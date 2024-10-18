import { test as baseTest } from '@playwright/test'



type myHooksFixtures = {

    loginlogout: any

}

export const test =baseTest.extend<myHooksFixtures>({

    loginlogout: async ({ page }, use) => {

        const loginlogout = undefined;

        await page.goto("https://www.saucedemo.com/");

        await page.getByPlaceholder("Username").fill("standard_user");

        await page.locator("[data-test='password']").fill("secret_sauce");

        await page.locator("[data-test='login-button']").click();

        await use(loginlogout);
        //logout

        await page.getByRole('button', { name: 'Open Menu' }).click();

        await page.getByRole('link', { name: 'Logout' }).click();


    }
})