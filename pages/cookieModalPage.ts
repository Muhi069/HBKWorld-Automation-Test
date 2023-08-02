import { expect, Page } from "@playwright/test";

export default class cookieModalPage {
  constructor(public page: Page) {
    
  }
  const declineBTN = this.page.locator("//button[contains(text(),'Decline')]");
  // makeItStable() {
  //   this.page.waitForLoadState("networkidle");
  // }

  isTitleVisible() {
    return this.page.getByText("The website uses cookies"); // cookie modal title
  }

  isDecliceBtnVisible() {
    return this.page.locator("//button[contains(text(),'Decline')]"); //Decline button
  }

  isAcceptAllBtnVisible() {
    return this.page.locator("//button[@aria-label='Accept all']"); //Accept All button
  }

  async ClickDecline() {
    // await this.page.locator("//button[contains(text(),'Decline')]").click(); //clicking decline button
    await this.declineBTN.click()
  }

  async ClickAcceptAll() {
    await this.page.waitForSelector("//button[@aria-label='Accept all']");
    await this.page.locator("//button[@aria-label='Accept all']").click(); //clicking accept all button
  }

  async FunctionalOption() {
    await this.page
      .locator("(//div[@class='coi-banner-consent-field'])[2]/div/label/input")
      .click();
  }

  isDeclineBtnStatusChanged() {
    return this.page.locator("//button[@id='updateButton']");
  }

  async StatisticalOption() {
    await this.page
      .locator("(//div[@class='coi-banner-consent-field'])[3]/div/label/input")
      .click();
  }

  async MarketingOption() {
    await this.page
      .locator("(//div[@class='coi-banner-consent-field'])[4]/div/label/input")
      .click();
  }

  async SelectAllOptions() {
    let len = await this.page
      .locator("//div[@class='coi-banner-consent-field']")
      .count();

    for (let i = 2; i <= len; i++) {
      await this.page
        .locator(
          "(//div[@class='coi-banner-consent-field'])[" +
            i +
            "]/div/label/input"
        )
        .click();
    }
  }

  async TogglingFunctionalOff() {
    await this.page
      .locator("(//div[@class='coi-banner-consent-field'])[2]/div/label/input")
      .click();

    await this.page
      .locator("(//div[@class='coi-banner-consent-field'])[2]/div/label/input")
      .click();
  }

  isDeclineBtnStatusBackToDecline() {
    return this.page.locator("//button[@id='declineButton']");
  }

  async TogglingStatisticalOff() {
    await this.page
      .locator("(//div[@class='coi-banner-consent-field'])[3]/div/label/input")
      .click();

    await this.page
      .locator("(//div[@class='coi-banner-consent-field'])[3]/div/label/input")
      .click();
  }

  async TogglingMarketingOff() {
    await this.page
      .locator("(//div[@class='coi-banner-consent-field'])[4]/div/label/input")
      .click();

    await this.page
      .locator("(//div[@class='coi-banner-consent-field'])[4]/div/label/input")
      .click();
  }

  async CookieModalPersistency() {
    this.ClickAcceptAll();
  }

  isCookieModalHidden() {
    return this.page.getByRole("button", { name: "open search" });
  }
}
