import { expect, Locator, Page } from "@playwright/test";
import BasePage from "./basepage";

export default class CookieModalPage extends BasePage {
  public declineBTN: Locator = this.page.getByLabel("Decline");
  public acceptAllBTN: Locator = this.page.getByLabel("Accept all", {
    exact: true,
  });
  public functionalCookieOption: Locator = this.page.getByRole("checkbox", {
    name: "Functional",
  });
  public statisticalCookieOption: Locator = this.page.getByRole("checkbox", {
    name: "Statistical",
  });
  public marketingCookieOption: Locator = this.page.getByRole("checkbox", {
    name: "Marketing",
  });
  public modalTitle: Locator = this.page.getByText("The website uses cookies");
  public dBTNStatusChange: Locator = this.page.getByLabel("Save settings");
  public declineStatuOnBTN: Locator = this.page.getByLabel("Decline");

  async isTitleVisible() {
    return this.modalTitle; // cookie modal title
  }

  async ClickDecline() {
    await this.declineBTN.click();
  }

  async clickAcceptAll() {
    await this.acceptAllBTN.click(); //clicking accept all button
  }

  async functionalOption() {
    await this.functionalCookieOption.check();
  }

  async statisticalOption() {
    await this.statisticalCookieOption.check();
  }

  async marketingOption() {
    await this.marketingCookieOption.check();
  }

  async selectAllOptions() {
    let len = await this.page
      .locator("//div[@class='coi-banner-consent-field']")
      .count();

    for (let i = len; i >= 2; i--) {
      await this.page
        .locator(
          "(//div[@class='coi-banner-consent-field'])[" +
            i +
            "]/div/label/input"
        )
        .check();
    }
  }

  async togglingFunctionalOff() {
    await this.functionalOption();

    await this.functionalOption();
  }

  async togglingStatisticalOff() {
    await this.statisticalOption();
    await this.statisticalOption();
  }

  async togglingMarketingOff() {
    await this.marketingOption();
    await this.marketingOption();
  }

  // public async isCookieModalHidden(): Promise<Locator> {
  //   return this.page.getByRole("button", { name: "open search" });
  // }
}
