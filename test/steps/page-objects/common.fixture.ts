import { expect } from "@playwright/test";
import { test as base, createBdd  } from 'playwright-bdd';
import { Page } from '@playwright/test';

/**
 * "@todo": Separate the pago objects out into it's own files
 */
class MyCommonPage {
  constructor(public page: Page) {}
  async navigativateTo(url: string) {
    await this.page.goto(url);
  }
  async dismissCookieBanner() {
    await this.page.addLocatorHandler(
      this.page.getByText('This website uses cookies to'),
      async () => {
        await this.page.getByLabel('dismiss cookie message').click();
      });
  }
}
class MySearchPage {
  constructor(public page: Page) {}
    async selectSearchIcon() {
      await this.page.getByTestId("toggleSearchButton").click();
    }

    async applySearchOrFilter (searchTerm: string) {
      //this waits for the request to return
      const responsePromise = this.page.waitForResponse(response =>
        response.url().includes('document/getdocumentlist') && 
        response.status() === 200 && 
        response.request().method() === 'POST'
      );
      await this.page.getByRole('button', { name: searchTerm }).click();
      await responsePromise; 
    }

    async performBasicSearch (url: string, searchTerm: string) {
      await this.page.goto(url);
      await this.page.getByTestId("toggleSearchButton").click();
      await expect(this.page.getByTestId("mastheadSearch")).toBeVisible();
      await this.page.locator("#search_input_header").fill(searchTerm); 
      //this waits for the request to return
      const responseSearchPromise = this.page.waitForResponse(response =>
        response.url().includes('pages/search') && 
        response.status() === 200 && 
        response.request().method() === 'POST'
      );
      await this.page.getByRole('button', { name: 'Apply Search' }).click();
      await responseSearchPromise;
    /**
    * The below is used to check if the documents are being returned or not.You wil
    * need to perform the click before waiting the response.
    */ 
    //   const responseDocumentPromise = this.page.waitForResponse(response =>
    //     response.url().includes('document/getdocumentlist') && 
    //     response.status() === 200 && 
    //     response.request().method() === 'POST'
    //   );
    //   const responseDocument = await responseDocumentPromise;
    //   const documentResponseBody = await responseDocument.json();
    //   const titleList = documentResponseBody.docs.map((doc: any) => doc.title);
    //   const istitleListEmpty = documentResponseBody.docs.every((doc: any) => doc.title.length === 0);
    // return { istitleListEmpty, titleList};
    }
}

class MyCollectionsPage {
  constructor(public page: Page) {}

  async scrollRight() {
    await this.page.getByLabel('Scroll right').click();
  }

  async selectLetter(letter: string) {
    await this.page.getByLabel(`Letter ${letter} link`).click();
  }

  async isLetterVisible (letter: string) {
    await expect(this.page.getByLabel(`Letter ${letter} link`)).toBeVisible(); 
  }

  async selectCollection(collection: string) {
    await this.page.getByRole('link', { name: collection }).click();
  }

  async openCollectionMenu() {
    await this.page.goto('/');  
    await this.page
      .getByTestId('site-main-menu')
      .getByRole('link', { name: 'Explore the Collections' })
      .click();
  }
}

// This extends the base fixture
export const test = base.extend<{ 
  myCommonPage: MyCommonPage, 
  page: Page, 
  mySearchPage: MySearchPage, 
  myCollectionsPage: MyCollectionsPage,
  firefoxOnly: void
}>({
  page: async ({ context }, use) => {
    const newPage = await context.newPage();
    await use(newPage);
    await newPage.close();
  },
    firefoxOnly: [async ({ $tags }, use, testInfo) => {
      if ($tags.includes('@firefox')) testInfo.skip();
      await use();
    }, { auto: true }],
    myCommonPage: async ({ page }, use) => {
    await use(new MyCommonPage(page));
  },
    mySearchPage: async ({ page }, use) => {
      await use(new MySearchPage(page));
    },
    myCollectionsPage: async ({ page }, use) => {
      await use(new MyCollectionsPage(page));
  }
});

export const { Given, When, Then } = createBdd(test);

