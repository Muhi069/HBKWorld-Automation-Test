import { Page } from "@playwright/test";

export default class ComputerHomePage {
  constructor(public page: Page) {}

  //addAComputerBTN =  this.page.getByText("Add a new computer")

  async clickAddComputer() {
    await this.page
      .locator("//a[contains(text(),'Add a new computer')]")
      .click();
  }
}
