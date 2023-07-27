import { expect, test } from "@playwright/test";

test("click application content bar_SC001", async ({ page, baseURL }) => {
  await page.goto(`${baseURL}`);
  page.locator("//button[@aria-label='Accept all']").click();

  await page
    .locator("(//span[@class='cmp-tabs__tab-title']/text())[2]")
    .click();

  expect(page.locator("//h2[contains(text(),'Applications')])")).toBeVisible();
});
