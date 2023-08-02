import { test as myTest } from "@playwright/test";
import ComputerHomePage from "../pages/ComputerDatabaseHomePage.pages";
import AddComputer from "../pages/AddComputer.pages";
import cookieModalPage from "../pages/cookieModalPage";

type pages = {
  computerPage: ComputerHomePage;
  addComp: AddComputer;
  cookieModal: cookieModalPage;
};

const testPages = myTest.extend<pages>({
  computerPage: async ({ page }, use) => {
    await use(new ComputerHomePage(page));
  },
  addComp: async ({ page }, use) => {
    await use(new AddComputer(page));
  },

  cookieModal: async ({ page }, use) => {
    await use(new cookieModalPage(page));
  },
});

export const test = testPages;
export const expect = testPages.expect;
