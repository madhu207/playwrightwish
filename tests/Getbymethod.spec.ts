import {chromium, test} from "@playwright/test";

test("first test",async({page})=>{

    await page.goto("https://demo.nopcommerce.com/login");
  //  await page.getByLabel("Email").fill("testautocode@gmail.com"); 
    await page.getByLabel("Email:", {exact : true}).fill("testautocode@gmail.com");

    await page.getByPlaceholder("Search store").fill("mobile");

    await page.getByText("New Customer").textContent();

    await page.getByAltText("nopCommerce demo store").click();

    await page.getByTitle("Show products in category Electronics").first().click();
    await page.getByPlaceholder("Search store").fill("mobile");

    await page.getByRole('button' ,{name : 'search'}).click();
    

    await page.goto("https://www.saucedemo.com/");

    await page.waitForTimeout(3000);

    await page.getByTestId("username").fill("abcd@gmail.com")
    

})