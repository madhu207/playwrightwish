import { test, expect } from '@playwright/test'

test('Calender', async ({ page }) => {
  
    test.slow();

    await page.goto("https://testautomationpractice.blogspot.com/");

    const year = "2019";
    const month = "March";
    const date = "7";

    await page.locator("#datepicker").click();

    while (true) {

        const currentyear = await page.locator(".ui-datepicker-year").textContent();
        const currentmonth = await page.locator(".ui-datepicker-month").textContent();
        if (currentyear == year && currentmonth==month ) {
       
        break;
            
        }
         
        await page.locator("[title='Prev']").click();
    }

   const dates =  await page.$$(".ui-state-default")

    for(const dt of dates){

        if(await dt.textContent() == date){

           await dt.click();
           break;
        }
    }

})