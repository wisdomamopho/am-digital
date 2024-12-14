import { defineConfig, devices } from "@playwright/test";
import { defineBddConfig, cucumberReporter } from "playwright-bdd";

const testDir = defineBddConfig({
  features: "test/features/*.feature",
  steps: ["test/steps/*.ts", "test/steps/page-objects/common.fixture.ts"],
});

export default defineConfig({
  testDir,
  timeout: 10 * 60 * 1000,
  expect: {
    timeout: 70 * 1000, // I have added this because i noticed some latency issues
  },
  reporter: [
    cucumberReporter("html", {
      outputFile: "cucumber-report/index.html",
      externalAttachments: true,
      attachmentsBaseURL: "http://127.0.0.1:8080/data",
    }),
    ["html", { open: "never" }],
  ],
  use: {
    screenshot: "on",
    trace: "on",
    baseURL: "https://demo.quartexcollections.com/",
    actionTimeout: 30 * 1000,
    navigationTimeout: 60 * 1000,
  },
  projects: [
    /* Test against desktop browsers */
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
    {
      name: "firefox",
      use: { ...devices["Desktop Firefox"] },
    },
    {
      name: "webkit",
      use: { ...devices["Desktop Safari"] },
    },
    /* Test against mobile viewports. */
    /* Disbaled as the test is currently not compatible with mobile viewports
    {
      name: 'Mobile Chrome',
      use: { ...devices['Pixel 5'] },
    },
    {
      name: 'Mobile Safari',
      use: { ...devices['iPhone 12'] },
    },
    */
    /* Test against branded browsers. */

    {
      name: "Google Chrome",
      use: { ...devices["Desktop Chrome"], channel: "chrome" }, // or 'chrome-beta'
    },
    {
      name: "Microsoft Edge",
      use: { ...devices["Desktop Edge"], channel: "msedge" }, // or 'msedge-dev'
    },
  ],
});
