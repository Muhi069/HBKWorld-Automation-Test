import { expect, test } from "@playwright/test";
import CookieModalPage from "../pages/cookieModalPage";

let cookieModal: CookieModalPage;
test.describe("All cookie modal test cases", () => {
  test.beforeEach(async ({ page }) => {
    cookieModal = new CookieModalPage(page);
    await cookieModal.VisitPage("/");
  });
  test("tc-001, cookie modal visibility", async ({ page }) => {
    await expect(cookieModal.modalTitle).toBeVisible();
    await expect(cookieModal.declineBTN).toHaveText("Decline");
    await expect(cookieModal.acceptAllBTN).toHaveText("Accept all");
  });

  test("tc-002, decline cookie", async ({ page }) => {
    await expect(cookieModal.modalTitle).toBeVisible();
    await expect(cookieModal.declineBTN).toHaveText("Decline");
    await cookieModal.ClickDecline();
    await expect(cookieModal.declineBTN).toBeHidden();
  });

  test("tc-003, accept all cookie", async ({ page }) => {
    await expect(page).toHaveTitle(
      "Homepage - The product physics experts - HBK"
    );
    await expect(cookieModal.modalTitle).toBeVisible();
    await expect(cookieModal.acceptAllBTN).toBeVisible();
    await cookieModal.clickAcceptAll();
    await expect(cookieModal.acceptAllBTN).toBeHidden();
  });

  test("tc-004, accept functional cookie", async ({ page }) => {
    await expect(cookieModal.functionalCookieOption).toBeVisible();
    cookieModal.functionalOption();
    expect(cookieModal.dBTNStatusChange).toHaveText("Save settings");
  });

  test("tc-005, accept statistical cookie", async ({ page }) => {
    await expect(cookieModal.statisticalCookieOption).toBeVisible();
    cookieModal.statisticalOption();
    expect(cookieModal.dBTNStatusChange).toHaveText("Save settings");
  });

  test("tc-006, accept marketing cookie", async ({ page }) => {
    await expect(cookieModal.marketingCookieOption).toBeVisible();
    cookieModal.marketingOption();
    expect(cookieModal.dBTNStatusChange).toHaveText("Save settings");
  });

  test.only("tc-007, accept all cookie options", async ({ page }) => {
    await expect(cookieModal.functionalCookieOption).toBeVisible();
    await expect(cookieModal.statisticalCookieOption).toBeVisible();
    await expect(cookieModal.marketingCookieOption).toBeVisible();
    cookieModal.selectAllOptions();
    expect(cookieModal.dBTNStatusChange).toHaveText("Save settings");
  });

  test("tc-008, toggle functional cookie off", async ({ page }) => {
    await expect(cookieModal.functionalCookieOption).toBeVisible();
    cookieModal.togglingFunctionalOff();
    expect(cookieModal.declineStatuOnBTN).toHaveText("Decline");
  });

  test("tc-009, toggle statistical cookie off", async ({ page }) => {
    await expect(cookieModal.statisticalCookieOption).toBeVisible();
    cookieModal.togglingStatisticalOff();
    expect(cookieModal.declineStatuOnBTN).toHaveText("Decline");
  });

  test.only("tc-010, toggle marketing cookie off", async ({ page }) => {
    await expect(cookieModal.marketingCookieOption).toBeVisible();
    cookieModal.togglingMarketingOff();
    expect(cookieModal.declineStatuOnBTN).toHaveText("Decline");
  });

  // test("tc-011, cookie modal persistent", async ({
  //   page,
  //   baseURL,
  //   cookieModal,
  // }) => {
  //   cookieModal.cookieModalPersistency();
  //   expect(cookieModal.isCookieModalHidden()).toBeVisible();
  // });
});

//expect(cookieModal.isCookieModalHidden()).toBeHidden();
