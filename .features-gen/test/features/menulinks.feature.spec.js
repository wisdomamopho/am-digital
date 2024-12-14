/** Generated from: test\features\menulinks.feature */
import { test } from "../../../test/steps/page-objects/common.fixture.ts";

test.describe("Validate Menu Links", () => {
  test("Timeline Content Block Hyperlink", async ({
    Given,
    myCommonPage,
    And,
    page,
    When,
    Then,
  }) => {
    await Given("I am on any page of the Quartex Published Site", null, {
      myCommonPage,
    });
    await And("user has navigated to a Timeline content block", null, { page });
    await When(
      "user scrolls to the hyperlink on the Timeline content block",
      null,
      { page },
    );
    await Then(
      "clicks, then the correct webpage is launched in a new tab",
      null,
      { page },
    );
  });

  test("", async ({}) => {});
});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("test\\features\\menulinks.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "Timeline Content Block Hyperlink": { pickleLocation: "3:1" },
  "": { pickleLocation: "16:1" },
};
