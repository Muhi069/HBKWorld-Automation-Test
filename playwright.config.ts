import { devices, type PlaywrightTestConfig } from "@playwright/test";

const config: PlaywrightTestConfig = {
  projects: [
    {
      name: "chrome",
      use: {
        ...devices["Desktop Chrome"],
      },
    },
    {
      name: "firefox",
      use: {
        ...devices["Desktop Firefox"],
      },
    },
  ],
  testMatch: ["tests/ContentContainter.test.ts"],
  use: {
    baseURL: "https://dev.hbkworld.com/en#tabs-44a431fcb6-item-615e5a4dc4-tab",
    headless: false,
    screenshot: "only-on-failure",
    video: "retain-on-failure",
    launchOptions: {
      slowMo: 1000,
    },
  },
  retries: 1,
  reporter: [
    ["dot"],
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
};
export default config;
