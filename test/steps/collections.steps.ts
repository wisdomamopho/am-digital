import { expect } from "@playwright/test";
import { Given, When, Then } from "./page-objects/common.fixture";
import { data } from "../utils/testdata";

                                                                                                                                                                                                                                                                                                                                                                                                                                       
Given("user is viewing the Browse by collection Name A-Z content block", async ({ myCollectionsPage }) => {
  await myCollectionsPage.openCollectionMenu();
});

When("user selects a letter to browse", async ({ page, myCollectionsPage }) => {
  await expect(page.getByRole('heading', { name: 'Browse by collection Name' })).toBeVisible();
  await myCollectionsPage.scrollRight();
  await myCollectionsPage.isLetterVisible('W');
  await myCollectionsPage.selectLetter('W');
});

Then("the page is scrolled to display all collections starting with the chosen letter", async ({ page }) => {
  await expect(page.getByRole('link', { name: `${data.dataSet2?.TypeOfCollection}` })).toBeInViewport();
});

Given("user has chosen to view all collections starting with a chosen letter", async ({ page, myCollectionsPage }) => {
    await myCollectionsPage.openCollectionMenu();
    await expect(page.getByRole('heading', { name: 'Browse by collection Name' })).toBeVisible();
    await myCollectionsPage.scrollRight();
    await myCollectionsPage.isLetterVisible('W');
    await myCollectionsPage.selectLetter('W');
    await expect(page.getByRole('link', { name: `${data.dataSet2?.TypeOfCollection}` })).toBeInViewport();
});

When("user clicks on the collection", async ({ myCollectionsPage }) => {
    await myCollectionsPage.selectCollection(`${data.dataSet2?.TypeOfCollection}`);
});
Then("user is navigated to the results page with the header equal to chosen collection title", async ({ page }) => {
    await page.waitForLoadState();
    const pageTitle = await page.title();
    expect(pageTitle).toContain(`${data.dataSet2?.TypeOfCollection}`);
});
Then("number of assets within the collection are listed", async ({ page }) => {
    await expect(page.getByText(`Showing 1-18 of ${18}`)).toBeVisible();
});

Then("the title of an asset is visible", async ({ page }) => {
    await expect(page.getByText(`Memoirs of a Prisoner of War`)).toBeVisible();  
});

