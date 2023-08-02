import { Locator, Page } from "@playwright/test";

export default class basepage {

    constructor(public page: Page) {
        
    }



    async clickOnElement(locator: Locator) {
         this.page.locator(locator);
    }

    
}