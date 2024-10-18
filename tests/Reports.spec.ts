import { test, expect } from '@playwright/test';

test('report1', async ({ page }) => {

await page.goto("https://www.google.com/")
await expect(page).toHaveTitle("Google")

})

test('report2', async ({ page }) => {

    await page.goto("https://www.google.com/")
    await expect(page).toHaveTitle("Google")
    
    })

    test('report3', async ({ page }) => {

        await page.goto("https://www.google.com/")
        await expect(page).toHaveTitle("Google")
        
        })