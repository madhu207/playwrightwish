import { Locator, Page } from "playwright-core";

export class Cartpage {

    readonly page: Page
    readonly backpacklink: Locator

    constructor(page: Page) {

        this.page = page;
        this.backpacklink = page.locator('[data-test="item-4-title-link"]')

    }


}