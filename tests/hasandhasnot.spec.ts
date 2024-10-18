import { chromium, test } from "@playwright/test";

test("first test", async ({ page }) => {

    // const browser = await chromium.launch();
    // const context = await browser.newContext();
    // const page =   await context.newPage();

    await page.goto("https://www.saucedemo.com/")

    await page.locator("#user-name").fill("standard_user");

    await page.locator("//input[@name='password']").fill("secret_sauce");

    await page.locator("#login-button").click();

    //   await page.locator("text='Sauce Labs Backpack'").click();

    await page.locator("text=Sauce LABS Backpack").click();


    await page.locator("data-test=add-to-cart").click();


    await page.waitForTimeout(2000);


})


test.only("has not methods", async ({ page }) => {

    await page.goto("https://www.saucedemo.com/")
    await page.locator(".form_group", { has: page.locator("input#user-name") }).click();

    await page.locator(".form_group", { has: page.locator("input#user-name") }).pressSequentially("standard_user");

    await page.locator(".form_group", { hasNot: page.locator("input#user-name") }).click();

    await page.locator(".form_group", { hasNot: page.locator("input#user-name") }).pressSequentially("secret_sauce");

    await page.locator("#login-button").click();

    //await page.locator("//a",{hasText: "Sauce Labs Backpack"}).click();

    await page.locator(".inventory_item_name", { hasNotText: /Sauce.*/ }).click();

    await page.waitForTimeout(2000);

})