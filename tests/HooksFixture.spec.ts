import { expect } from "@playwright/test"

import {test} from "../Fixtures/HooksFixture"

test('add to cart', async ({ page, loginlogout }) => {

 
    //logout
    await page.getByText("Sauce Labs Backpack").click();

    await page.locator("#add-to-cart").click();

    await page.locator(".shopping_cart_link").click();

    await expect(page.locator(".inventory_item_name")).toHaveText("Sauce Labs Backpack")

    await page.locator("#remove-sauce-labs-backpack").click();

    await expect(page.locator(".inventory_item_name")).not.toBeVisible();

})

test('empty card verify', async ({ page, loginlogout }) => {

    await page.locator(".shopping_cart_link").click();
    await expect(page.locator(".inventory_item_name")).not.toBeVisible();

})





