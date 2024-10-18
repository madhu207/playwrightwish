import { test, expect } from "@playwright/test"

test.beforeEach('Login', async ({ page }) => {
    //login

    await page.goto("https://www.saucedemo.com/");

    await page.getByPlaceholder("Username").fill("standard_user");

    await page.locator("[data-test='password']").fill("secret_sauce");

    await page.locator("[data-test='login-button']").click();

})


test('add to cart', async ({ page }) => {

 
    //logout
    await page.getByText("Sauce Labs Backpack").click();

    await page.locator("#add-to-cart").click();

    await page.locator(".shopping_cart_link").click();

    await expect(page.locator(".inventory_item_name")).toHaveText("Sauce Labs Backpack")

    await page.locator("#remove-sauce-labs-backpack").click();

    await expect(page.locator(".inventory_item_name")).not.toBeVisible();

})

test('empty card verify', async ({ page }) => {

    await page.locator(".shopping_cart_link").click();
    await expect(page.locator(".inventory_item_name")).not.toBeVisible();

})

test.afterEach('Logout', async ({ page }) => {
    //logout
    //await page.locator("#react-burger-menu-btn").click();

    await page.getByRole('button', { name: 'Open Menu' }).click();

    await page.getByRole('link', { name: 'Logout' }).click();
})



