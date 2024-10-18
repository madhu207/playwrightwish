import { test, expect, chromium } from '@playwright/test';

const browser = await chromium.launch();
const context = await browser.newContext();

const page =await context.newPage();

async function globalsetup() {
    

  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByPlaceholder('Username').click();
  await page.getByPlaceholder('Username').fill('Admin');
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();

  await page.context().storageState({path : '.playwright/auth/auth.json'})



};