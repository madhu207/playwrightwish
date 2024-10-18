import { test, expect } from '@playwright/test';
import dataArray from "../Test-data/testdata.json"
import logindata from "../Test-data/logindata.json"

test.beforeEach('test', async ({ page }) => {

  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByPlaceholder('Username').click();
  await page.getByPlaceholder('Username').fill(logindata.username);
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill(logindata.Password);
  await page.getByPlaceholder('Password').press("Enter");
  await page.waitForURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")
  await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();
});




test('submit timesheet', async ({ page,context }) => {

  await expect(page.locator('#app')).toContainText('Quick Launch');

  await expect(page.getByRole('button', { name: 'Timesheets' })).toBeVisible();
  await page.getByRole('link', { name: 'Time' }).click();
  await expect(page.getByLabel('Topbar Menu').getByRole('list')).toContainText('Timesheets');
})

dataArray.forEach((data)=>{
 
  test.slow()
  test(`Add  candidate for recruit ${data.Fname}`, async ({ page }) => {
    
   
    await page.getByRole('link', { name: 'Recruitment' }).click();
    
    await page.getByRole('button', { name: ' Add' }).click();
    await expect(page.locator('#app')).toContainText('Add Candidate')
  
    await page.getByPlaceholder('First Name').fill(data.Fname);
   
    await page.getByPlaceholder('Last Name').fill(data.Lname);
  
    await page.getByPlaceholder('Type here').first().fill(data.Email);
    await page.getByRole('button', { name: 'Save' }).click();
    await expect(page.getByText('Application Stage')).toBeVisible();
  
  })

  // for (const data of dataArray){

  // }

})
