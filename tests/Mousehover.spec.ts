import { test, expect } from '@playwright/test';


test("hopve", async({page})=>{


    await page.goto("https://demo.opencart.com/")

    await page.getByRole('link', { name: 'Components', exact: true }).hover({force:true});
    await page.getByRole('link', { name: 'Show All Components' }).click();



})

