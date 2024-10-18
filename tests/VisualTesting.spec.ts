import { test, expect } from '@playwright/test'
import exp from 'constants';

test("Practice tag1 @UI", async ({ page }) => {

    await page.goto("https://the-internet.herokuapp.com/tables");
   // await expect(page).toHaveScreenshot();
   //await expect(page).toHaveScreenshot("Visual testing.png");
  // await expect(page).toHaveScreenshot(["Childfolder1/Childfolder2","VisualTestingwithchildfolder1.png"]);
  // await expect(page).toHaveScreenshot(["Childfolder3","abcfolder","VisualTestingwithchildfolder1.png"]);
 // await expect(page).toHaveScreenshot("FullNamePractice.png",{fullPage: true})

 //await expect(page).toHaveScreenshot("MaxDiffPixelPractice.png",{maxDiffPixels: 800})

 //await expect(page).toHaveScreenshot("MaxDiffPixelRatio.png",{maxDiffPixelRatio: 800})
   await expect(page).toHaveScreenshot("Mask Page1.png",{mask:[page.locator("locatorpath"), page.locator("locatorpath")]});

   await expect(page.locator("particluar locator")).toHaveScreenshot("tableverification.png");

   await expect(page).toHaveScreenshot("updatepratice.png")
})