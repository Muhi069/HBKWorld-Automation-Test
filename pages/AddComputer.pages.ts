import { Page } from "@playwright/test";

export default class AddComputer {
  constructor(public page: Page) {}

  computerName = () => this.page.locator("//input[@name='name']");

  introduced = () => this.page.locator("//input[@name='introduced']");

  discontinued = () => this.page.locator("//input[@name='discontinued']");

  createComputerBTN = () => this.page.locator("//input[@type='submit']");

  async enterComputerName(name: string) {
    await this.computerName().fill(name);
  }

  async Introduced(intro: string) {
    await this.introduced().fill(intro);
  }

  async Discontinued(dis: string) {
    await this.computerName().fill(dis);
  }

  async CreateComputer() {
    await this.createComputerBTN().click();
  }
}
