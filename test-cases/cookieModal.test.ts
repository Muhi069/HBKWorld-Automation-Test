import { test, expect } from "../fixture/myFixture";

test.describe("All cookie modal test cases", () => {
  test("tc-001, cookie modal visibility", async ({
    page,
    baseURL,
    cookieModal,
  }) => {
    await page.goto(`${baseURL}`);
    expect(cookieModal.isTitleVisible()).toHaveText("The website uses cookies");
    expect(cookieModal.isDecliceBtnVisible()).toHaveText("Decline");
    expect(cookieModal.isAcceptAllBtnVisible()).toHaveText("Accept all");
  });

  test("tc-002, decline cookie", async ({ page, baseURL, cookieModal }) => {
    await page.goto(`${baseURL}`);
    cookieModal.ClickDecline();
  });

  test("tc-003, accept all cookie", async ({ page, baseURL, cookieModal }) => {
    await page.goto(`${baseURL}`);
    cookieModal.ClickAcceptAll();
  });

  test("tc-004, accept functional cookie", async ({
    page,
    baseURL,
    cookieModal,
  }) => {
    await page.goto(`${baseURL}`);
    cookieModal.FunctionalOption();
    expect(cookieModal.isDeclineBtnStatusChanged()).toHaveText("Save settings");
  });

  test("tc-005, accept statistical cookie", async ({
    page,
    baseURL,
    cookieModal,
  }) => {
    await page.goto(`${baseURL}`);
    cookieModal.StatisticalOption();
    expect(cookieModal.isDeclineBtnStatusChanged()).toHaveText("Save settings");
  });

  test("tc-006, accept marketing cookie", async ({
    page,
    baseURL,
    cookieModal,
  }) => {
    await page.goto(`${baseURL}`);
    cookieModal.MarketingOption();
    expect(cookieModal.isDeclineBtnStatusChanged()).toHaveText("Save settings");
  });

  test("tc-007, accept all cookie options", async ({
    page,
    baseURL,
    cookieModal,
  }) => {
    await page.goto(`${baseURL}`);
    cookieModal.SelectAllOptions();
  });

  test("tc-008, toggle functional cookie off", async ({
    page,
    baseURL,
    cookieModal,
  }) => {
    await page.goto(`${baseURL}`);
    cookieModal.FunctionalOption();
    cookieModal.TogglingFunctionalOff();
    expect(cookieModal.isDeclineBtnStatusBackToDecline()).toHaveText("Decline");
  });

  test("tc-009, toggle statistical cookie off", async ({
    page,
    baseURL,
    cookieModal,
  }) => {
    await page.goto(`${baseURL}`);
    cookieModal.TogglingStatisticalOff();
    expect(cookieModal.isDeclineBtnStatusBackToDecline()).toHaveText("Decline");
  });

  test("tc-010, toggle marketing cookie off", async ({
    page,
    baseURL,
    cookieModal,
  }) => {
    await page.goto(`${baseURL}`);
    cookieModal.TogglingMarketingOff();
    expect(cookieModal.isDeclineBtnStatusBackToDecline()).toHaveText("Decline");
  });

  test("tc-011, cookie modal persistent", async ({
    page,
    baseURL,
    cookieModal,
  }) => {
    await page.goto(`${baseURL}`);
    cookieModal.CookieModalPersistency();
    expect(cookieModal.isCookieModalHidden()).toBeVisible();
  });
});

//expect(cookieModal.isCookieModalHidden()).toBeHidden();
