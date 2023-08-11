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

  test("tc-051, acoustics in footer section check", async ({ page }) => {
    await expect(page).toHaveTitle(
      "Homepage - The product physics experts - HBK"
    );
    await expect(home.acoustics).toBeVisible();
    await home.clickOnElement(home.acoustics);
    await expect(page).toHaveTitle("Acoustics | Analysis Software - HBK");
  });

  test("tc-052, electric power in footer section check", async ({ page }) => {
    await expect(page).toHaveTitle(
      "Homepage - The product physics experts - HBK"
    );
    await expect(home.electricPower).toBeVisible();
    await home.clickOnElement(home.electricPower);
    await expect(page).toHaveTitle("Electric Power | Power Generation - HBK");
  });

  test("tc-053, NVH in footer section check", async ({ page }) => {
    await expect(page).toHaveTitle(
      "Homepage - The product physics experts - HBK"
    );
    await expect(home.nvh).toBeVisible();
    await home.clickOnElement(home.nvh);
    await expect(page).toHaveTitle(
      "NVH Simulation Software | Vibration & Harshness  - HBK"
    );
  });

  test("tc-054, reliability in footer section check", async ({ page }) => {
    await expect(page).toHaveTitle(
      "Homepage - The product physics experts - HBK"
    );
    await expect(home.reliability).toBeVisible();
    await home.clickOnElement(home.reliability);
    await expect(page).toHaveTitle("Reliability | Software Solutions - HBK");
  });

  test("tc-055, structural integrity in footer section check", async ({
    page,
  }) => {
    await expect(page).toHaveTitle(
      "Homepage - The product physics experts - HBK"
    );
    await expect(home.structuralIntegrity).toBeVisible();
    await home.clickOnElement(home.structuralIntegrity);
    await expect(page).toHaveTitle("Structural Integrity solutions - HBK");
  });

  test("tc-056, vibration in footer section check", async ({ page }) => {
    await expect(page).toHaveTitle(
      "Homepage - The product physics experts - HBK"
    );
    await expect(home.vibration).toBeVisible();
    await home.clickOnElement(home.vibration);
    await expect(page).toHaveTitle("Safety | Vibration Solutions - HBK");
  });

  test("tc-057, virtual testing in footer section check", async ({ page }) => {
    await expect(page).toHaveTitle(
      "Homepage - The product physics experts - HBK"
    );
    await expect(home.virtualTesting).toBeVisible();
    await home.clickOnElement(home.virtualTesting);
    await expect(page).toHaveTitle("Virtual Testing - HBK");
  });

  test("tc-058, weighing in footer section check", async ({ page }) => {
    await expect(page).toHaveTitle(
      "Homepage - The product physics experts - HBK"
    );
    await expect(home.weighing).toBeVisible();
    await home.clickOnElement(home.weighing);
    await expect(page).toHaveTitle(
      "Component Manufacturer | Weighing Applications - HBK"
    );
  });

  test("tc-059, industries in footer section check", async ({ page }) => {
    await expect(page).toHaveTitle(
      "Homepage - The product physics experts - HBK"
    );
    await expect(home.industries).toBeVisible();
    await home.clickOnElement(home.industries);
    await expect(page).toHaveTitle(
      "Industries | Aerospace & Defence | Automotive | Energy - HBK"
    );
  });

  test("tc-060, audio in footer section check", async ({ page }) => {
    await expect(page).toHaveTitle(
      "Homepage - The product physics experts - HBK"
    );
    await expect(home.audio).toBeVisible();
    await home.clickOnElement(home.audio);
    await expect(page).toHaveTitle("Audio | Repair Communications - HBK");
  });

  test("tc-061, aerospace and defense in footer section check", async ({
    page,
  }) => {
    await expect(page).toHaveTitle(
      "Homepage - The product physics experts - HBK"
    );
    await expect(home.aeroAndDefence).toBeVisible();
    await home.clickOnElement(home.aeroAndDefence);
    await expect(page).toHaveTitle("Aerospace & Defence | Applications - HBK");
  });

  test("tc-062, automotive application in footer section check", async ({
    page,
  }) => {
    await expect(page).toHaveTitle(
      "Homepage - The product physics experts - HBK"
    );
    await expect(home.automotiveAndGround).toBeVisible();
    await home.clickOnElement(home.automotiveAndGround);
    await expect(page).toHaveTitle(
      "Automotive Applications | Ground Transportation - HBK"
    );
  });

  test("tc-063, power generation in footer section check", async ({ page }) => {
    await expect(page).toHaveTitle(
      "Homepage - The product physics experts - HBK"
    );
    await expect(home.energy).toBeVisible();
    await home.clickOnElement(home.energy);
    await expect(page).toHaveTitle("Power Generation I Energy  - HBK");
  });

  // test.only("tc-064, modern slavery in footer section check", async ({
  //   page,
  // }) => {
  //   await expect(page).toHaveTitle(
  //     "Homepage - The product physics experts - HBK"
  //   );
  //   await expect(home.modernSlavery).toBeVisible();
  //   await home.clickOnElement(home.modernSlavery);
  //   await expect(home.modernSlavery).toHaveText(
  //     "Modern Slavery and Human Trafficking Statement"
  //   );
  // });

  test("tc-065, imprint in footer section check", async ({ page }) => {
    await expect(page).toHaveTitle(
      "Homepage - The product physics experts - HBK"
    );
    await expect(home.imprint).toBeVisible();
    await home.clickOnElement(home.imprint);
    await expect(page).toHaveTitle("Imprint");
  });

  test("tc-066, cookie policy in footer section check", async ({ page }) => {
    await expect(page).toHaveTitle(
      "Homepage - The product physics experts - HBK"
    );
    await expect(home.cookiePolicy).toBeVisible();
    await home.clickOnElement(home.cookiePolicy);
    await expect(page).toHaveTitle("Cookie Policy");
  });

  test("tc-067, privacy policy in footer section check", async ({ page }) => {
    await expect(page).toHaveTitle(
      "Homepage - The product physics experts - HBK"
    );
    await expect(home.privacyPolicy).toBeVisible();
    await home.clickOnElement(home.privacyPolicy);
    await expect(page).toHaveTitle("Privacy Policy");
  });

  test("tc-068, sitemap in footer section check", async ({ page }) => {
    await expect(page).toHaveTitle(
      "Homepage - The product physics experts - HBK"
    );
    await expect(home.sitemap).toBeVisible();
    await home.clickOnElement(home.sitemap);
    await expect(page).toHaveTitle("Sitemap - HBK");
  });

  // test.only("tc-069, ethical business in footer section check", async ({
  //   page,
  // }) => {
  //   await expect(page).toHaveTitle(
  //     "Homepage - The product physics experts - HBK"
  //   );
  //   await expect(home.ethicalBusiness).toBeVisible();
  //   await home.clickOnElement(home.ethicalBusiness);
  //   await expect(page).toHaveTitle("Ethical business - Spectris");
  // });

  /* test case 69 and 64 have failed. additional cookie modal pops up. will fix this */
});
