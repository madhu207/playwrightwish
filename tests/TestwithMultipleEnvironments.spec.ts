import { chromium, expect, test } from "@playwright/test";


test("TestWithMultipleEnvironments", async ({ page }) => {

    console.log(process.env.URl)
    
    console.log(process.env.Username1)

    console.log(process.env.Password)

    const urlvalue = <string> process.env.URl

   // const urlvalue1 = process.env.URl as string
    await page.goto(urlvalue)
    await page.locator('[data-test="username"]').fill(<string> process.env.Username1)
    await page.locator('[data-test="password"]').fill( process.env.Password as string)


})