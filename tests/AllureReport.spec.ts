import { test, expect } from '@playwright/test';

test('Allure report1', async ({ page }) => {

await page.goto("https://www.google.com/")
await expect(page).toHaveTitle("Google")

})

test('Allure report2', async ({ page }) => {

    await page.goto("https://www.google.com/")
    await expect(page).toHaveTitle("Google1")
    
    })

    test('Allure report3', async ({ page }) => {

        await page.goto("https://www.google.com/")
        await expect(page).toHaveTitle("Google")
        
        })