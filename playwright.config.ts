import { defineConfig, devices } from '@playwright/test';
import { defineBddConfig } from 'playwright-bdd';

const testDir = defineBddConfig({
  /**
   * This is where the .feature files are located.
   * The .feature files are text files that define the tests using the Gherkin language.
   * The features are used to execute the tests.
   */
  features: 'test/features/*.feature',
  /**
   * This is where the step definitions are located.
   * The step definitions are ts files that export Given, When, Then functions
   * that are used to execute the steps in the feature files.
   */
  steps: [
    'test/steps/*.ts',
    'test/steps/page-objects/common.fixture.ts' 
  ],
});

export default defineConfig({
  testDir,
  timeout: 10 * 60 * 1000,
  retries: 1,
  expect: {
    timeout: 70 * 1000 
  },
  reporter: "html",
  use: {
    screenshot: 'on',
    trace: 'on',
    video: 'on', 
    baseURL: 'https://demo.quartexcollections.com/',
    actionTimeout: 30 * 1000,
    navigationTimeout: 60 * 1000,
    
  },
  projects: [
    /* Test against desktop browsers */
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    /*
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
    */
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
      name: 'Google Chrome',
      use: { ...devices['Desktop Chrome'], channel: 'chrome' }, // or 'chrome-beta'
    },
    {
      name: 'Microsoft Edge',
      use: { ...devices['Desktop Edge'], channel: 'msedge' }, // or 'msedge-dev'
    },
  ],
});