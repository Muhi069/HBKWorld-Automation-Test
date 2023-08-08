import { Locator, Page } from "@playwright/test";

export default class BasePage {
  page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async VisitPage(url: string) {
    await this.page.goto(url);
  }

  async clickOnElement(locator: Locator) {
    await locator.click();
  }

  async typeSomething(string: string, locator: Locator) {
    await locator.fill(string);
  }
}
