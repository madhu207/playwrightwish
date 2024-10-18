import { test, expect } from '@playwright/test';

test('report4', async ({ page }) => {

await page.goto("https://www.google.com/")
await expect(page).toHaveTitle("Google")

})

test('report5', async ({ page }) => {

    await page.goto("https://www.google.com/")
    await expect(page).toHaveTitle("Google")
    
    })

    test('report6', async ({ page }) => {

        await page.goto("https://www.google.com/")
        await expect(page).toHaveTitle("Google")
        
        })