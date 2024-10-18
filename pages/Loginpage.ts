import { Locator, Page } from "playwright-core";


export class Loginpage {

    readonly page: Page
    readonly usernameTextBox: Locator  //declared properties
    readonly passwordTextBox: Locator
    readonly loginButton: Locator

    constructor(page: Page) {

        //in side the constructor we intialsed the values of properties
        this.page = page;
        this.usernameTextBox = page.locator("#user-name");
        this.passwordTextBox = page.locator("//input[@name='password']")
        this.loginButton = page.locator("#login-button")

    }

    async Openapplication(){

        await this.page.goto("https://www.saucedemo.com/")
    }

    async Login(usernamevalue: string, passwordval: any) {

        await this.usernameTextBox.fill(usernamevalue)
        await this.passwordTextBox.fill(passwordval)
        await this.loginButton.click()

    }

}