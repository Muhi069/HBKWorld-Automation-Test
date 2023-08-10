import { expect, test } from "@playwright/test";
import Homepage from "../pages/HomePage";
import CookieModalPage from "../pages/cookieModalPage";

let home: Homepage;
let cookieModal: CookieModalPage;

test.describe("All homepage component test", () => {
  test.beforeEach(async ({ page }) => {
    home = new Homepage(page);
    cookieModal = new CookieModalPage(page);
    await home.VisitPage("/");
    cookieModal.clickAcceptAll();
  });

  test("tc-007, career link works or not", async ({ page }) => {
    await expect(page).toHaveTitle(
      "Homepage - The product physics experts - HBK"
    );
    await expect(home.careenBtn).toBeVisible();
    await home.clickOnElement(home.careenBtn);
    await expect(page).toHaveTitle("Careers | About - HBK");
  });

  test("tc=009, search button clickable or not", async ({ page }) => {
    await expect(page).toHaveTitle(
      "Homepage - The product physics experts - HBK"
    );
    await expect(home.searchBtn).toBeVisible();
    await home.clickOnElement(home.searchBtn);
    await expect(home.searchField).toBeVisible();
    await expect(home.searchGoBtn).toBeVisible();
  });

  test("tc=010, search something and verify search field", async ({ page }) => {
    await expect(page).toHaveTitle(
      "Homepage - The product physics experts - HBK"
    );
    await expect(home.searchBtn).toBeVisible();
    await home.clickOnElement(home.searchBtn);
    await expect(home.searchField).toBeVisible();
    await home.typeSomething(home.searchField, "Aerospace");
    await expect(home.searchGoBtn).toBeVisible();
    await home.clickOnElement(home.searchGoBtn);
    await expect(page).toHaveTitle("Search - HBK");
    // await page.waitForLoadState;
    // await expect(page).toContainEqual("Aerospace");
  });

  test("tc-011, product tab functionality", async ({ page }) => {
    await expect(page).toHaveTitle(
      "Homepage - The product physics experts - HBK"
    );
    await expect(home.productTab).toBeVisible();
    await home.clickOnElement(home.productTab);
    await expect(home.softwareList).toBeVisible();
    await expect(home.instrumentsList).toBeVisible();
    await expect(home.transducersList).toBeVisible();
  });

  test("tc-012, application tab functionality", async ({ page }) => {
    await expect(page).toHaveTitle(
      "Homepage - The product physics experts - HBK"
    );
    await expect(home.applicationsTab).toBeVisible();
    await home.clickOnElement(home.applicationsTab);
    await expect(home.electricPowerList).toBeVisible();
    await expect(home.oemList).toBeVisible();
    await expect(home.reliabilityList).toBeVisible();
  });

  test("tc-013, services & support tab functionality", async ({ page }) => {
    await expect(page).toHaveTitle(
      "Homepage - The product physics experts - HBK"
    );
    await expect(home.serviceTab).toBeVisible();
    await home.clickOnElement(home.serviceTab);
    await expect(home.hbkServiceContactList).toBeVisible();
    await expect(home.calibrationList).toBeVisible();
    await expect(home.materialList).toBeVisible();
  });
});
