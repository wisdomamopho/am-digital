/** Generated from: test\features\search.feature */
import { test } from "../../../test/steps/page-objects/common.fixture.ts";

test.describe("Basic Search Functionality", () => {
  test(
    "Basic Input Search",
    { tag: ["@bdd"] },
    async ({ Given, myCommonPage, And, page, mySearchPage, When, Then }) => {
      await Given("I am on any page of the Quartex Published Site", null, {
        myCommonPage,
      });
      await And("I click on the search Icon at the top right", null, {
        page,
        mySearchPage,
      });
      await And(
        "I enter a valid search term in the basic search input box",
        null,
        { page },
      );
      await When("I click the search button", null, { mySearchPage });
      await Then(
        'I should be navigated to the "Browse All - Demo" page',
        null,
        { page },
      );
      await Then("I should see the first page of search results", null, {
        page,
      });
      await Then("the assets listed should meet the search criteria", null, {
        page,
      });
    },
  );

  test("Basic Filter Search", async ({
    Given,
    mySearchPage,
    When,
    page,
    Then,
  }) => {
    await Given(
      'I have performed a successful basic search using the keyword "Brown"',
      null,
      { mySearchPage },
    );
    await When(
      "I select to filter the search results by collection (from the filter results panel)",
      null,
      { page, mySearchPage },
    );
    await Then("the assets listed meet the search and filter criteria", null, {
      page,
    });
  });

  test(
    "No Results Found",
    { tag: ["@webkit"] },
    async ({ Given, mySearchPage, When, page, Then, And }) => {
      await Given(
        'I have performed a successful basic search using the keyword "Quartex"',
        null,
        { mySearchPage },
      );
      await When("there are no assets meeting the search criteria", null, {
        page,
      });
      await Then(
        'I should be navigated to the "Browse All - Demo" page',
        null,
        { page },
      );
      await And(
        "a message should be outputed, informing the user that no results are available",
        null,
        { page },
      );
    },
  );

  test("", async ({}) => {});
});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("test\\features\\search.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "Basic Input Search": {
    pickleLocation: "20:13",
    tags: ["@bdd"],
    ownTags: ["@bdd"],
  },
  "Basic Filter Search": { pickleLocation: "29:13" },
  "No Results Found": {
    pickleLocation: "31:5",
    tags: ["@webkit"],
    ownTags: ["@webkit"],
  },
  "": { pickleLocation: "37:9" },
};
