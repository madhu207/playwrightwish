import { expect } from '@playwright/test'

import{test } from "../Fixtures/POMfixture"
//import { Cartpage } from '../pages/Cartpage';


test("verify cart", async ({  loginpage, homepage, cartpage }) => {

    //const loginpage = new Loginpage(page);

    await loginpage.Openapplication();
    await loginpage.Login("standard_user", "secret_sauce");

   // const homepageobj = new Homepage(page);
    await expect(homepage.HomepageTitle).toHaveText("Swag Labs");
    homepage.AddtoCart();
    await expect(homepage.backpackRemoveButton).toHaveText("Remove");
    await expect(homepage.cartIcon).toHaveCount(1);

    await homepage.GotoCart();

   // const cartpageobj = new Cartpage(page);
    expect(cartpage.backpacklink).toHaveText("Sauce Labs Backpack");

})