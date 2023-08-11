import { expect, Locator, Page } from "@playwright/test";
import BasePage from "./basepage";

export default class Homepage extends BasePage {
  /* Locators */
  public careenBtn: Locator = this.page
    .getByRole("banner")
    .getByRole("link", { name: "Careers" });

  public languageOptn: Locator = this.page
    .getByText(
      "English English Français Deutsch Español 中文 Italiano 日本語 Português 한국인"
    )
    .first();

  public searchBtn: Locator = this.page.getByRole("button", {
    name: "open search ",
  });

  public searchField: Locator = this.page.getByPlaceholder("Search Here");

  public searchGoBtn: Locator = this.page.getByRole("button", { name: "Go!" });

  public productTab: Locator = this.page
    .getByRole("tab", { name: "Products" })
    .locator("span");

  public applicationsTab: Locator = this.page
    .getByRole("tab", { name: "Applications" })
    .locator("span");

  public serviceTab: Locator = this.page
    .getByRole("tab", { name: "Service & Support" })
    .locator("span");

  public softwareList: Locator = this.page.getByRole("link", {
    name: "Software ",
  });

  public instrumentsList: Locator = this.page.getByRole("link", {
    name: "Instruments ",
  });

  public transducersList: Locator = this.page.getByRole("link", {
    name: "Transducers ",
  });

  public electricPowerList: Locator = this.page.getByRole("link", {
    name: "Electric Power ",
  });

  public oemList: Locator = this.page.getByRole("link", {
    name: "OEM Custom Sensors ",
  });

  public reliabilityList: Locator = this.page.getByRole("link", {
    name: "Reliability ",
  });

  public hbkServiceContactList: Locator = this.page.getByRole("link", {
    name: "HBK Assured Service Contracts ",
  });

  public calibrationList: Locator = this.page.getByRole("link", {
    name: "Calibration ",
  });

  public materialList: Locator = this.page.getByRole("link", {
    name: "Material Characterization & Fatigue Testing ",
  });

  public footerCarouselNxtBTN: Locator = this.page
    .locator("#carousel-c075854f2f")
    .getByLabel("Next slide");

  public footerCarouselPrevBTN: Locator = this.page
    .locator("#carousel-c075854f2f")
    .getByLabel("Previous slide");

  public about: Locator = this.page
    .locator("#linklist-caf818c06a")
    .getByRole("link", { name: "About" });

  public applications: Locator = this.page.getByRole("link", {
    name: "Applications",
  });

  public industries: Locator = this.page.getByRole("link", {
    name: "Industries",
  });

  public ourHistory: Locator = this.page.getByRole("link", {
    name: "Our History",
  });

  public executive: Locator = this.page.getByRole("link", {
    name: "Executive Management",
  });

  public careers: Locator = this.page
    .locator("#linklist-caf818c06a")
    .getByRole("link", { name: "Careers" });

  public orgAndMembership: Locator = this.page.getByRole("link", {
    name: "Organisations & Memberships",
  });

  public businessEthics: Locator = this.page.getByRole("link", {
    name: "Business Ethics",
  });

  public exportControl: Locator = this.page.getByRole("link", {
    name: "Export Control",
  });

  public qualityManagement: Locator = this.page.getByRole("link", {
    name: "Quality Management",
  });

  public termsAndConditions: Locator = this.page.getByRole("link", {
    name: "Terms & Conditions",
  });

  public acoustics: Locator = this.page.getByRole("link", {
    name: "Acoustics",
  });

  public electricPower: Locator = this.page.getByRole("link", {
    name: "Electric Power",
    exact: true,
  });

  public nvh: Locator = this.page.getByRole("link", {
    name: "NVH",
  });

  public reliability: Locator = this.page.getByRole("link", {
    name: "Reliability",
  });

  public structuralIntegrity: Locator = this.page.getByRole("link", {
    name: "Structural Integrity",
  });

  public vibration: Locator = this.page.getByRole("link", {
    name: "Vibration",
  });

  public virtualTesting: Locator = this.page.getByRole("link", {
    name: "Virtual Testing",
  });

  public weighing: Locator = this.page.getByRole("link", {
    name: "Weighing",
  });

  public audio: Locator = this.page.getByRole("link", {
    name: "Audio",
  });

  public aeroAndDefence: Locator = this.page.getByRole("link", {
    name: "Aerospace & Defence",
  });

  public automotiveAndGround: Locator = this.page.getByRole("link", {
    name: "Automotive & Ground Transportation",
  });

  public energy: Locator = this.page.getByRole("link", {
    name: "Energy",
  });

  public modernSlavery: Locator = this.page.getByRole("link", {
    name: "Modern Slavery Statement",
  });

  public imprint: Locator = this.page.getByRole("link", {
    name: "Imprint",
  });

  public cookiePolicy: Locator = this.page.getByRole("link", {
    name: "Cookie Policy",
  });

  public privacyPolicy: Locator = this.page.getByRole("link", {
    name: "Privacy Policy",
  });

  public sitemap: Locator = this.page.getByRole("link", {
    name: "Sitemap",
  });

  public ethicalBusiness: Locator = this.page.getByRole("link", {
    name: "Ethical Business",
    exact: true,
  });

  public modernSlaveryLink: Locator = this.page.getByText(
    "Modern Slavery and Human Trafficking Statement",
    { exact: true }
  );

  /* Methods/Actions */

  // async clickCareer() {
  //   await this.careenBtn.click();
  // }

  // async languageOption() {
  //   await this.languageOptn.hover();
  // }

  // async searchBtnClick() {
  //   await this.searchBtn.click();
  // }

  // async typeInSearchBox(string: string) {
  //   await this.searchField.type(string);
  // }

  // async searchGoBTNClick() {
  //   await this.searchGoBtn.click();
  // }

  // async clickProductTab() {
  //   await this.productTab.click();
  // }

  // async clickApplicationsTab() {
  //   await this.applicationsTab.click();
  // }

  // async clickServiceAndSupportTab() {
  //   await this.serviceTab.click();
  // }
}
