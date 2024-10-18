import { Locator, Page } from "playwright-core";


export class Homepage{

    readonly page: Page
    readonly HomepageTitle : Locator;
    readonly backpackAddtoCartbutton : Locator;
    readonly backpackRemoveButton: Locator;
    readonly cartIcon : Locator;

    constructor(page : Page){
        this.page = page
        this.HomepageTitle = page.getByText("Swag Labs")
        this.backpackAddtoCartbutton = page.locator('[data-test="add-to-cart-sauce-labs-backpack"]')
        this.backpackRemoveButton = page.locator('[data-test="remove-sauce-labs-backpack"]')
        this.cartIcon = page.locator('[data-test="shopping-cart-link"]')
    
    }

    async AddtoCart(){

       await this.backpackAddtoCartbutton.click();

    }

    async GotoCart(){

        await this.cartIcon.click();
 
     }

}

