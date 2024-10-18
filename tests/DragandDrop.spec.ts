import { test, expect } from '@playwright/test';


test("drag and drop", async({page})=>{


    await page.goto("https://demoqa.com/droppable")
    // //approach1 manual way to drag and drop
    // await page.getByText('Drag me', { exact: true }).hover();
    // await page.mouse.down();
    // await page.getByLabel('Simple').locator('#droppable').hover();
    // await page.mouse.up();

    // await expect(page.getByLabel('simple').locator('#droppable')).toHaveText("Dropped!")
    //approach2 with dragto method

   await page.getByText('Drag me', { exact: true }).dragTo(page.getByLabel('Simple').locator('#droppable'));
   await expect(page.getByLabel('simple').locator('#droppable')).toHaveText("Dropped!")




   



})
