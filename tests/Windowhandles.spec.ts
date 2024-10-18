import { test, expect } from '@playwright/test'

test("window", async ({ context }) => {

    const page = await context.newPage();
    await page.goto("https://testpages.eviltester.com/styled/windows-test.html");
    await expect(page).toHaveTitle("Windows Example Test");

   const event =  context.waitForEvent("page");

   await page.locator("id=gobasicajax").click();

   const newPage = await event;

   await newPage.locator("[name='submitbutton']").click();



    
})