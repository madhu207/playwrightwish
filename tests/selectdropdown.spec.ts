import{test , expect} from '@playwright/test'

test("with value and visible text", async ({ page }) => {

await page.goto("https://artoftesting.com/samplesiteforselenium");

await page.locator("#testingDropdown").selectOption("Database Testing");
await page.locator("#testingDropdown").selectOption({value: 'Automation'});
await page.locator("#testingDropdown").selectOption({label: 'Manual Testing'});
await page.locator("#testingDropdown").selectOption({index: 1});


})

test("with label", async ({ page }) => {

    await page.goto("https://www.w3schools.com/tags/tryit.asp?filename=tryhtml_option_label");
    
    await page.frameLocator('iframe[name="iframeResult"]').getByLabel('Choose a car:').selectOption('Mercedes')
    await page.frameLocator('iframe[name="iframeResult"]').getByLabel('Choose a car:').selectOption({label: 'Audi'})
    
    
    })

    
test.only("multiselect", async ({ page }) => {

    await page.goto("https://demoqa.com/select-menu");

    await page.locator("#cars").selectOption(['Volvo','Saab','Audi'])
    
    })

