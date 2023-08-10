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

  test("tc-015, software list check", async ({ page }) => {
    await expect(page).toHaveTitle(
      "Homepage - The product physics experts - HBK"
    );
    await expect(home.softwareList).toBeVisible();
    await home.clickOnElement(home.softwareList);
    await expect(page).toHaveTitle("Software - HBK");
  });

  test("tc-016, instruments list check", async ({ page }) => {
    await expect(page).toHaveTitle(
      "Homepage - The product physics experts - HBK"
    );
    await expect(home.instrumentsList).toBeVisible();
    await home.clickOnElement(home.instrumentsList);
    await expect(page).toHaveTitle("Instruments - HBK");
  });

  test("tc-017, transducers list check", async ({ page }) => {
    await expect(page).toHaveTitle(
      "Homepage - The product physics experts - HBK"
    );
    await expect(home.transducersList).toBeVisible();
    await home.clickOnElement(home.transducersList);
    await expect(page).toHaveTitle("Transducers - HBK");
  });

  test("tc-019, electric power list check", async ({ page }) => {
    await expect(page).toHaveTitle(
      "Homepage - The product physics experts - HBK"
    );
    await expect(home.applicationsTab).toBeVisible();
    await home.clickOnElement(home.applicationsTab);
    await expect(home.electricPowerList).toBeVisible();
    await home.clickOnElement(home.electricPowerList);
    await expect(page).toHaveTitle("Electric Power | Power Generation - HBK");
  });

  test("tc-020, oem custom sensor list check", async ({ page }) => {
    await expect(page).toHaveTitle(
      "Homepage - The product physics experts - HBK"
    );
    await expect(home.applicationsTab).toBeVisible();
    await home.clickOnElement(home.applicationsTab);
    await expect(home.oemList).toBeVisible();
    await home.clickOnElement(home.oemList);
    await expect(page).toHaveTitle("OEM Sensor Solutions | Engineering - HBK");
  });

  test("tc-021, reliability list check", async ({ page }) => {
    await expect(page).toHaveTitle(
      "Homepage - The product physics experts - HBK"
    );
    await expect(home.applicationsTab).toBeVisible();
    await home.clickOnElement(home.applicationsTab);
    await expect(home.reliabilityList).toBeVisible();
    await home.clickOnElement(home.reliabilityList);
    await expect(page).toHaveTitle("Reliability | Software Solutions - HBK");
  });

  test("tc-023, hbk assured service list check", async ({ page }) => {
    await expect(page).toHaveTitle(
      "Homepage - The product physics experts - HBK"
    );
    await expect(home.serviceTab).toBeVisible();
    await home.clickOnElement(home.serviceTab);
    await expect(home.hbkServiceContactList).toBeVisible();
    await home.clickOnElement(home.hbkServiceContactList);
    await expect(page).toHaveTitle("HBK Assured Service Contract - HBK");
  });

  test("tc-024, calibration list check", async ({ page }) => {
    await expect(page).toHaveTitle(
      "Homepage - The product physics experts - HBK"
    );
    await expect(home.serviceTab).toBeVisible();
    await home.clickOnElement(home.serviceTab);
    await expect(home.calibrationList).toBeVisible();
    await home.clickOnElement(home.calibrationList);
    await expect(page).toHaveTitle("Services - HBK"); // page changed internally
  });

  test("tc-025, material characterization list check", async ({ page }) => {
    await expect(page).toHaveTitle(
      "Homepage - The product physics experts - HBK"
    );
    await expect(home.serviceTab).toBeVisible();
    await home.clickOnElement(home.serviceTab);
    await expect(home.materialList).toBeVisible();
    await home.clickOnElement(home.materialList);
    await expect(page).toHaveTitle(
      "Material Characterization & Fatigue Testing Services - HBK"
    );
  });

  test("tc-041, about in footer section check", async ({ page }) => {
    await expect(page).toHaveTitle(
      "Homepage - The product physics experts - HBK"
    );
    await expect(home.about).toBeVisible();
    await home.clickOnElement(home.about);
    await expect(page).toHaveTitle("About - HBK");
  });

  test("tc-042, our history in footer section check", async ({ page }) => {
    await expect(page).toHaveTitle(
      "Homepage - The product physics experts - HBK"
    );
    await expect(home.ourHistory).toBeVisible();
    await home.clickOnElement(home.ourHistory);
    await expect(page).toHaveTitle("History | About - HBK");
  });

  test("tc-043, executive management in footer section check", async ({
    page,
  }) => {
    await expect(page).toHaveTitle(
      "Homepage - The product physics experts - HBK"
    );
    await expect(home.executive).toBeVisible();
    await home.clickOnElement(home.executive);
    await expect(page).toHaveTitle("Management | About - HBK");
  });

  test("tc-044, career in footer section check", async ({ page }) => {
    await expect(page).toHaveTitle(
      "Homepage - The product physics experts - HBK"
    );
    await expect(home.careers).toBeVisible();
    await home.clickOnElement(home.careers);
    await expect(page).toHaveTitle("Careers | About - HBK");
  });

  test("tc-045, orgs and memberships in footer section check", async ({
    page,
  }) => {
    await expect(page).toHaveTitle(
      "Homepage - The product physics experts - HBK"
    );
    await expect(home.orgAndMembership).toBeVisible();
    await home.clickOnElement(home.orgAndMembership);
    await expect(page).toHaveTitle("Organisations & Memberships | About - HBK");
  });

  test("tc-046, business ethics in footer section check", async ({ page }) => {
    await expect(page).toHaveTitle(
      "Homepage - The product physics experts - HBK"
    );
    await expect(home.businessEthics).toBeVisible();
    await home.clickOnElement(home.businessEthics);
    await expect(page).toHaveTitle("Business Ethics | About - HBK");
  });

  test("tc-047, export control in footer section check", async ({ page }) => {
    await expect(page).toHaveTitle(
      "Homepage - The product physics experts - HBK"
    );
    await expect(home.exportControl).toBeVisible();
    await home.clickOnElement(home.exportControl);
    await expect(page).toHaveTitle("Export Control | About - HBK");
  });

  test("tc-048, quality management in footer section check", async ({
    page,
  }) => {
    await expect(page).toHaveTitle(
      "Homepage - The product physics experts - HBK"
    );
    await expect(home.qualityManagement).toBeVisible();
    await home.clickOnElement(home.qualityManagement);
    await expect(page).toHaveTitle("Quality Management | About - HBK");
  });

  test("tc-049, terms & conditions in footer section check", async ({
    page,
  }) => {
    await expect(page).toHaveTitle(
      "Homepage - The product physics experts - HBK"
    );
    await expect(home.termsAndConditions).toBeVisible();
    await home.clickOnElement(home.termsAndConditions);
    await expect(page).toHaveTitle("Terms & Conditions | About");
  });

  test("tc-050, applications in footer section check", async ({ page }) => {
    await expect(page).toHaveTitle(
      "Homepage - The product physics experts - HBK"
    );
    await expect(home.applications).toBeVisible();
    await home.clickOnElement(home.applications);
    await expect(page).toHaveTitle("Applications - HBK");
  });
});
