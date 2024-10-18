import { test, expect } from '@playwright/test'

import { Loginpage } from '../pages/Loginpage'

import { Homepage } from '../pages/Homepage'
import { Cartpage } from '../pages/Cartpage';

test("verify cart", async ({ page }) => {

    const loginpageobj = new Loginpage(page);

    await loginpageobj.Openapplication();
    await loginpageobj.Login("standard_user", "secret_sauce");

    const homepageobj = new Homepage(page);
    await expect(homepageobj.HomepageTitle).toHaveText("Swag Labs");
    homepageobj.AddtoCart();
    await expect(homepageobj.backpackRemoveButton).toHaveText("Remove");
    await expect(homepageobj.cartIcon).toHaveCount(1);

    await homepageobj.GotoCart();

    const cartpageobj = new Cartpage(page);
    expect(cartpageobj.backpacklink).toHaveText("Sauce Labs Backpack");

})