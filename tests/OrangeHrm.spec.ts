import { chromium, expect, test } from "@playwright/test";

test("OrangehRM test", async ({ page }) => {

await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
await page.getByPlaceholder("Username").fill("Admin");
await page.getByPlaceholder("Password").fill("admin123");
await page.getByRole('button',{name: 'Login'}).click();
const sideicons:any =  page.locator(".oxd-main-menu-item-wrapper");

await sideicons.first().waitFor({ state: 'visible' });
const count = await sideicons.count();

for(let i=0; i<count;i++){

  const text =  await sideicons.nth(i).textContent();

    if(text === "Claim"){

        await sideicons.nth(i).click();

    }

}
await page.getByPlaceholder('Type for hints...').first().fill("John")
await page.waitForTimeout(2000);
const claimdown:any =  page.locator(".oxd-autocomplete-option");

await claimdown.first().waitFor({ state: 'visible' });
const count2 = await claimdown.count();

for(let i=0; i<count;i++){

    const text1 =  await claimdown.nth(i).textContent();
  
      if(text1 === "John  Doe"){
  
          await claimdown.nth(i).click();
          break;
  
      }
  
  }
})