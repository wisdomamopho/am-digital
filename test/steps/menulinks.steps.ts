import { expect } from "@playwright/test";
import { Given, When, Then } from "./page-objects/common.fixture";
import { data } from "../utils/testdata";

                                                                                                                                                                                                                                                                                                                                                                                                                                       
Given("user has navigated to a Timeline content block", async ({ page }) => {
  await page.getByLabel('Discovery Aids', { exact: true }).click();
});
/**
 * Limitation: the new page context is not easily accessible outside of the 'when' scope below, so I ammended
 * the step to engage the infinite scroll and wait for the item to be visible
 */
When("user scrolls to the hyperlink on the Timeline content block", async ({ page }) => {
  const headingName = 'The Brownings: A Brief History';
  const responsePromise = page.waitForResponse(response => 
    response.url().includes('contentBlocks/2017') && 
    response.status() === 200 && 
    response.request().method() === 'GET');
  await page.getByRole('link', { name: `${headingName}` }).click();
  await responsePromise;
  await expect(page.getByRole('heading', { name: `${headingName}`})).toBeVisible();
  await page.waitForLoadState();
});

Then("clicks, then the correct webpage is launched in a new tab", async ({ page }) => {
   // Manually scroll to the bottom of the page
   await expect(page.getByRole('heading', { name: 'Loading....' })).toBeVisible();
   await page.getByLabel('powered by Quartex').scrollIntoViewIfNeeded();
   await page.waitForLoadState();
   const browningLink = page.getByRole('link', { name: 'one of their first love' });
   await expect(browningLink).toBeVisible({timeout: 6000});
  
   const [newPage] = await Promise.all([ 
       page.waitForEvent('popup'),
       await browningLink.click()
     ]); 
   await newPage.waitForLoadState();
   await expect(newPage).toHaveTitle('[10 January 1845]. Browning, Robert to Browning, Elizabeth Barrett. - Demo');

});
