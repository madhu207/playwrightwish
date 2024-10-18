import { chromium, expect, test } from "@playwright/test";

test("first test", async ({ page, browserName }) => {
    // test.slow(({browserName})=> browserName === 'chromium')
    // const browser = await chromium.launch();
    // const context = await browser.newContext();
    // const page =   await context.newPage();
    test.slow(browserName === "chromium"); //it will increase timeout three times
    await page.goto("https://www.saucedemo.com/")

    await page.locator("#user-name1").fill("standard_user");

    await page.locator("//input[@name='password']").fill("secret_sauce");

    await page.locator("#login-button").click();

    await expect(page.locator(".shopping_cart_container a")).toBeVisible();



})