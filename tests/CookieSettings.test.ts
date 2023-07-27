import { expect, test } from "@playwright/test";

test("declining cookie_SC002", async ({ page, baseURL }) => {
  await page.goto(`${baseURL}`);

  page.locator("//button[contains(text(),'Decline')]").click();

  await page.waitForTimeout(3000);
});

test("accepting cookie_SC003", async ({ page, baseURL }) => {
  await page.goto(`${baseURL}`);

  page.locator("//button[@aria-label='Accept all']").click();

  await page.waitForTimeout(3000);
});

test("cookie option functional_SC004", async ({ page, baseURL }) => {
  await page.goto(`${baseURL}`);

  await page
    .locator("(//div[@class='coi-banner-consent-field'])[2]/div/label/input")
    .click();

  const btn = page.locator("//button[@id='updateButton']");
  expect(btn).toHaveText("Save settings");

  await page.waitForTimeout(3000);
});

test("cookie option statistical_SC005", async ({ page, baseURL }) => {
  await page.goto(`${baseURL}`);

  await page
    .locator("(//div[@class='coi-banner-consent-field'])[3]/div/label/input")
    .click();

  const btn = page.locator("//button[@id='updateButton']");
  expect(btn).toHaveText("Save settings");

  await page.waitForTimeout(3000);
});

test("cookie option marketing_SC006", async ({ page, baseURL }) => {
  await page.goto(`${baseURL}`);

  await page
    .locator("(//div[@class='coi-banner-consent-field'])[4]/div/label/input")
    .click();

  const btn = page.locator("//button[@id='updateButton']");
  expect(btn).toHaveText("Save settings");

  await page.waitForTimeout(3000);
});

test("cookie option all select_SC007", async ({ page, baseURL }) => {
  await page.goto(`${baseURL}`);
  let len = await page
    .locator("//div[@class='coi-banner-consent-field']")
    .count();

  for (let i = 2; i <= len; i++) {
    await page
      .locator(
        "(//div[@class='coi-banner-consent-field'])[" + i + "]/div/label/input"
      )
      .click();
  }
  const btn = page.locator("//button[@id='updateButton']");
  expect(btn).toHaveText("Save settings");
});

test("cookie modal visible or not_SC001", async ({ page, baseURL }) => {
  await page.goto(`${baseURL}`);

  expect(page.getByText("The website uses cookies")).toBeVisible();

  expect(page.locator("//button[contains(text(),'Decline')]")).toBeVisible();

  expect(page.locator("//button[@aria-label='Accept all']")).toBeVisible();
});

test("toggling Functional option off_SC008", async ({ page, baseURL }) => {
  await page.goto(`${baseURL}`);

  await page
    .locator("(//div[@class='coi-banner-consent-field'])[2]/div/label/input")
    .click();

  await page
    .locator("(//div[@class='coi-banner-consent-field'])[2]/div/label/input")
    .click();

  const btn = page.locator("//button[@id='declineButton']");
  expect(btn).toHaveText("Decline");
});

test("toggling Statistical option off_SC009", async ({ page, baseURL }) => {
  await page.goto(`${baseURL}`);

  await page
    .locator("(//div[@class='coi-banner-consent-field'])[3]/div/label/input")
    .click();

  await page
    .locator("(//div[@class='coi-banner-consent-field'])[3]/div/label/input")
    .click();

  const btn = page.locator("//button[@id='declineButton']");
  expect(btn).toHaveText("Decline");
});

test("toggling Marketing option off_SC010", async ({ page, baseURL }) => {
  await page.goto(`${baseURL}`);

  await page
    .locator("(//div[@class='coi-banner-consent-field'])[4]/div/label/input")
    .click();

  await page
    .locator("(//div[@class='coi-banner-consent-field'])[4]/div/label/input")
    .click();

  const btn = page.locator("//button[@id='declineButton']");
  expect(btn).toHaveText("Decline");
});

test.only("cookie modal persistent or not", async ({ page, baseURL }) => {
  await page.goto(`${baseURL}`);
  page.locator("//button[@aria-label='Accept all']").click();

  await page.waitForTimeout(3000);
  await page.goto(`${baseURL}`);
  expect(page.getByText("The website uses cookies")).toBeHidden();
});
