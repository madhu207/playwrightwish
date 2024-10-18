import{test , expect} from '@playwright/test'

test("alert", async ({ page }) => {
    
await page.goto("https://the-internet.herokuapp.com/javascript_alerts")

page.on("dialog",dialog=>{

    expect(dialog.type()).toEqual("alert");

    expect(dialog.message()).toEqual("I am a JS Alert");

    dialog.accept();

})

await page.getByRole("button", {name: 'Click for JS Alert'}).click();
await expect(page.locator("#result")).toHaveText("You successfully clicked an alert");
})

test("handle confirm dialog", async ({ page }) => {
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts")


    page.on("dialog",dialog=>{

        expect(dialog.type()).toEqual("confirm");
    
        expect(dialog.message()).toEqual("I am a JS Confirm");
    
        dialog.dismiss();
    
    })

    await page.getByRole("button", {name: 'Click for JS Confirm'}).click();
})

test.only("prompt confirm dialog", async ({ page }) => {
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts")


    page.on("dialog",dialog=>{

        expect(dialog.type()).toEqual("prompt");
    
        expect(dialog.message()).toEqual("I am a JS prompt");

        expect(dialog.defaultValue()).toEqual("")
    
        dialog.accept("test automate");
    
    })

    await page.getByRole("button", {name: 'Click for JS prompt'}).click();
})