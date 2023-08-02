import { test } from "../fixture/myFixture";
import ComputerHomePage from "../pages/ComputerDatabaseHomePage.pages";
import AddComputer from "../pages/AddComputer.pages";
import * as data from "../data/data1.json";

test("add a computer to database", async ({
  page,
  baseURL,
  computerPage,
  addComp,
}) => {
  //   const compHomePage = new ComputerHomePage(page);
  //   const addComp = new AddComputer(page);
  await page.goto(`${baseURL}`);
  computerPage.clickAddComputer();
  addComp.enterComputerName(data.name);
  addComp.Introduced(data.intro);
  addComp.Discontinued(data.disc);
  addComp.CreateComputer();
});
