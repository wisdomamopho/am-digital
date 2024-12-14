import { expect } from "@playwright/test";
import { Given, When, Then  } from "./page-objects/common.fixture";
import { data } from "../utils/testdata";

Given("I am on any page of the Quartex Published Site", async ({ myCommonPage }) => {
  await myCommonPage.navigativateTo("/");
  await myCommonPage.dismissCookieBanner();
});
                                                                                                                                                                                                                                                                                                                                                                                                                                       
Given("I click on the search Icon at the top right", async ({ page, mySearchPage }) => {
  await mySearchPage.selectSearchIcon();
  await expect(page.getByTestId("mastheadSearch")).toBeVisible();
});

Given("I enter a valid search term in the basic search input box", async ({ page }) => {
  await page.locator("#search_input_header").fill(`${data.dataSet1.searchTerm}`);
});

When("I click the search button", async ({ mySearchPage }) => {
  const search = "Apply Search";
 await mySearchPage.applySearchOrFilter(`${search}`);
});

Then('I should be navigated to the {string} page', async ({ page }, arg: string) => {
  await expect(page).toHaveTitle(arg)
});

Then("I should see the first page of search results", async ({ page }) => {
  await expect(page.locator("#pagination-top-page")).toHaveCount(1);
});

/** I have made an assumption that the asset here only refers to the
 *  testdata given and not the entire list matching the keyword
 */
Then("the assets listed should meet the search criteria", async ({ page }) => {
  await expect(page.getByText(`Showing 1-30 of ${data.dataSet1.NumberOfResults}`)).toBeVisible();
});
/** I have decided to amend the test to be more keyword specific, 
 *  this is to enable reusabilty of this step between the positive and negative tests
 */ 
Given('I have performed a successful basic search using the keyword {string}', async ({ mySearchPage }, arg: string) => {
  const searchTerm = arg; 
  mySearchPage.performBasicSearch("/", searchTerm);
});

When('I select to filter the search results by collection \\(from the filter results panel)', async ({ page, mySearchPage }) => { 
  await page.locator('#collections div').filter({ hasText: 'Interwar Periodicals' }).click(); 
  const search = "Apply Filter";
  await mySearchPage.applySearchOrFilter(`${search}`);
});

Then('the assets listed meet the search and filter criteria', async ({ page }) => { 
  const title = data.dataSet2?.assetTitle;
  await expect(page.getByText(`${title}`)).toBeVisible();
});

When('there are no assets meeting the search criteria', async ({ page }) => { 
  await expect(page.getByText(`Showing 0-0 of 0`)).toBeVisible();
});

Then('a message should be outputed, informing the user that no results are available', async ({ page }) => { 
  const message = await page.locator('#no-results-msg-container').textContent(); 
  expect(message).toContain(`${data.dataSet1?.NoResultsFoundError}`); 
});
