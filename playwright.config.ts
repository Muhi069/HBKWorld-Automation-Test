import { defineConfig } from "@playwright/test";

export default defineConfig({
  retries: 0,
  // testDir: "test-cases/cookie_modal2_test.spec.ts",
  testMatch: "test-cases/cookie_modal2_test.spec.ts",
  use: {
    browserName: "chromium",
    headless: false,
    baseURL: "https://www.hbkworld.com/en",
    screenshot: "only-on-failure",
    video: "retain-on-failure",
  },
  expect: {
    timeout: 10_000,
  },

  reporter: [
    ["dot"],

    [
      "junit",
      {
        outputFile: "results.xml",
      },
    ],
    [
      "json",
      {
        outputFile: "jsonReports/jsonReport.json",
      },
    ],
    [
      "html",
      {
        open: "never",
      },
    ],
  ],
});
