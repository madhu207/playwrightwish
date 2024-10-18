import { test, expect } from '@playwright/test';


test("keyboardAction", async({page})=>{


    await page.goto("https://testpages.eviltester.com/styled/basic-html-form-test.html");
    const textarea =  page.locator("[name='comments']");
    await textarea.press("Control+A")
    await textarea.press("Backspace");
    await textarea.press("a+B+c");
    await textarea.press("Control+a+x");
    const username =  page.locator("[name='username']");
   await username.press("Control+v");
   await username.press("ArrowLeft+ArrowLeft+ArrowLeft");
   await username.press("Z");
   await page.keyboard.press("PageDown")
   await page.keyboard.press("PageUp")
    

})

