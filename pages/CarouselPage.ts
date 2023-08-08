import { expect, Locator, Page } from "@playwright/test";
import BasePage from "./basepage";

export default class CarouselPage extends BasePage {
  public carouselNextBTN: Locator = this.page
    .locator("#hero-carousel-mod")
    .getByLabel("Next slide");

  public carouselPrevBTN: Locator = this.page
    .locator("#hero-carousel-mod")
    .getByLabel("Previous slide");

  public learnMoreBTN: Locator = this.page.getByRole("link", {
    name: "MicroStrain banner Welcome to MicroStrain MicroStrain to join Hottinger Brüel & Kjær We will look forward to welcoming our new colleagues and customers from MicroStrain. Discover how HBK and this new partnership will strengthen our smart sensor platform. Learn more",
  });

  public microStrainTitle: Locator = this.page.getByText(
    "Welcome to MicroStrain"
  );

  public hbkWorldTitle: Locator = this.page.getByText("Welcome to HBK World");
}
