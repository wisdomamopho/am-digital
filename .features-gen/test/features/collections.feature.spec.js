/** Generated from: test\features\collections.feature */
import { test } from "../../../test/steps/page-objects/common.fixture.ts";

test.describe("Review By Collections", () => {
  test(
    "Select Collection",
    { tag: ["@slow"] },
    async ({ Given, myCollectionsPage, When, page, Then }) => {
      await Given(
        "user is viewing the Browse by collection Name A-Z content block",
        null,
        { myCollectionsPage },
      );
      await When("user selects a letter to browse", null, {
        page,
        myCollectionsPage,
      });
      await Then(
        "the page is scrolled to display all collections starting with the chosen letter",
        null,
        { page },
      );
    },
  );

  test("Verify Collection Results", async ({
    Given,
    page,
    myCollectionsPage,
    When,
    Then,
    And,
  }) => {
    await Given(
      "user has chosen to view all collections starting with a chosen letter",
      null,
      { page, myCollectionsPage },
    );
    await When("user clicks on the collection", null, { myCollectionsPage });
    await Then(
      "user is navigated to the results page with the header equal to chosen collection title",
      null,
      { page },
    );
    await And("number of assets within the collection are listed", null, {
      page,
    });
    await And("the title of an asset is visible", null, { page });
  });

  test("", async ({}) => {});
});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("test\\features\\collections.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "Select Collection": {
    pickleLocation: "13:13",
    tags: ["@slow"],
    ownTags: ["@slow"],
  },
  "Verify Collection Results": { pickleLocation: "15:5" },
  "": { pickleLocation: "21:9" },
};
