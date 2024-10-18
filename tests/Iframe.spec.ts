import { test, expect } from '@playwright/test'

test("Iframe with name", async ({ page }) => {

    test.slow();
    await page.goto("https://www.w3schools.com/html/tryit.asp?filename=tryhtml5_input_form")

    const w3frame = page.frame("iframeResult")

    await w3frame?.locator("#fname").fill("firstname");

})

test.only("Iframe with Url", async ({ page }) => {

    test.slow()
    await page.goto("https://www.w3schools.com/html/html_iframe.asp")

    const frame2 = page.frame({ url: 'https://www.w3schools.com/html/default.asp' });
    await frame2?.getByLabel('Button to open search field').click();
    await frame2?.getByPlaceholder('Search...').fill("test code automate")

})

test.only("Iframe with framelocator method", async ({ page }) => {


    await page.goto("https://ui.vision/demo/webtest/frames/")

    const loginbutton = await page.frameLocator('iframe[title="W3Schools HTML Tutorial"]').getByLabel("Login to your account")
    loginbutton.click();

})

test.only("Frameinside frame", async ({ page }) => {


    await page.goto("https://ui.vision/demo/webtest/frames/")

    const parentframe = page.frame({url: 'https://ui.vision/demo/webtest/frames/frame_3.html'});

    const innerfgrame = parentframe?.frameLocator("");

    await innerfgrame?.locator("").click();



})


