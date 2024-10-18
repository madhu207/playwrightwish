//import { expect } from '@playwright/test';
import {test , expect} from "../Fixtures/testdataFixture";

test.beforeEach('test', async ({ page, logindata }) => {

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.getByPlaceholder('Username').click();
    await page.getByPlaceholder('Username').fill(logindata.unname);
    await page.getByPlaceholder('Password').click();
    await page.getByPlaceholder('Password').fill(logindata.pwd);
    await page.getByPlaceholder('Password').press("Enter");
    await page.waitForURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")
    await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();
  });

  test('Add  candidate for recruit ', async ({ page, testdata }) => {
    
   test.slow()
    await page.getByRole('link', { name: 'Recruitment' }).click();
    
    await page.getByRole('button', { name: ' Add' }).click();
    await expect(page.locator('#app')).toContainText('Add Candidate')
  
    await page.getByPlaceholder('First Name').fill(testdata.fname);
   
    await page.getByPlaceholder('Last Name').fill(testdata.lname);
  
    await page.getByPlaceholder('Type here').first().fill(testdata.email);
    await page.getByRole('button', { name: 'Save' }).click();
    await expect(page.getByText('Application Stage')).toBeVisible();

  })
  