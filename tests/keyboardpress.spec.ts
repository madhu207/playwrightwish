import{test , expect} from '@playwright/test'

test("first test", async ({ page }) => {
    
     test.slow();
    await page.goto("https://www.google.com/");

    await page.locator("#APjFqb").pressSequentially("playwright" ,{delay: 100})
   
  //  await page.locator("#APjFqb").press("ArrowDown+ArrowDown+ArrowDown");

   // await page.locator("#APjFqb").press("Enter");

    await page.locator("#APjFqb").press("Backspace");

})