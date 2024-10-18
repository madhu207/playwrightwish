import { test, expect, Page } from "@playwright/test"

let page:Page;

test.beforeAll('Login', async ({ browser }) => {
    //login
    test.slow()
     page = await browser.newPage();
    await page.goto("https://www.saucedemo.com/");

    await page.getByPlaceholder("Username").fill("standard_user");

    await page.locator("[data-test='password']").fill("secret_sauce");

    await page.locator("[data-test='login-button']").click();

})


test('add to cart', async () => {

    //  test.slow();
    //logout
    await page.getByText("Sauce Labs Backpack").click();

    await page.locator("#add-to-cart").click();

    await page.locator(".shopping_cart_link").click();

    await expect(page.locator(".inventory_item_name")).toHaveText("Sauce Labs Backpack")

    await page.locator("#remove-sauce-labs-backpack").click();

    await expect(page.locator(".inventory_item_name")).not.toBeVisible();

})

test('empty card verify', async () => {

    await page.locator(".shopping_cart_link").click();
    await expect(page.locator(".inventory_item_name")).not.toBeVisible();

})

test.afterAll('Logout', async () => {
    //logout
    //await page.locator("#react-burger-menu-btn").click();

    await page.getByRole('button', { name: 'Open Menu' }).click();

    await page.getByRole('link', { name: 'Logout' }).click();
})



