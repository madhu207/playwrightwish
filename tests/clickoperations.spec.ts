import{test , expect} from '@playwright/test'

test("first test", async ({ page }) => {

    test.slow()
    
    // await page.goto("https://the-internet.herokuapp.com/add_remove_elements/")
    // await page.getByRole('button', { name: 'Add Element' }).dblclick();

//     await page.goto("https://swisnl.github.io/jQuery-contextMenu/demo.html");

//    // await page.getByText('right click me', { exact: true }).click({button:'right'});

//     await page.getByRole('heading', { name: 'Example code: Simple Context' }).click({button: 'right'})

await page.locator("https://staging.engineer.ai/home");
await page.getByRole('button', {name: 'Choose a base'}).click();
await page.getByText("Actually Ill browse the").click();

await page.getByRole('button', {name: 'O custom Template'}).dispatchEvent('click');



})

test("radio", async ({ page }) => {

  await page.goto("https://artoftesting.com/samplesiteforselenium");

  await page.locator("#male").check();

  await expect( page.locator("#male")).toBeChecked();



})

test.only("check", async ({ page }) => {

    await page.goto("https://artoftesting.com/samplesiteforselenium");
  
    await page.locator(".Automation").check();
    await expect(page.locator(".Automation")).toBeChecked();

    await page.locator(".Performance").check(); 
    await page.locator(".Performance").uncheck(); 
  
   // await expect( page.locator(".Performance")).toBeChecked();

    if(await page.locator(".Automation").isChecked()){

        page.locator(".Automation").uncheck()
      
    }
  
  
  
  })
