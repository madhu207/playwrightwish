import { test, expect } from '@playwright/test';
import fs from "fs"
import { parse } from "csv-parse/sync"

const records = parse(fs.readFileSync("Test-data/testdata.csv"), {

    columns: true,
    skip_empty_lines: true,
    //delimiter:";"


})

// records.forEach((data) => {

//     // test('excelraed -' + data.Id,  async({page})=>{

//     test(`excelraed - ${data.Id}`, async ({ page }) => {

//         // console.log(records)
//         await page.goto("https://demoqa.com/automation-practice-form")
//         await page.getByPlaceholder('First Name').fill(data.Firstname);
//         await page.getByPlaceholder('Last Name').fill(data.Lastname);

//     })


// })

for(const data of records){

    test(`excelraed - ${data.Id}`, async ({ page }) => {

        //         // console.log(records)
                await page.goto("https://demoqa.com/automation-practice-form")
                await page.getByPlaceholder('First Name').fill(data.Firstname);
                await page.getByPlaceholder('Last Name').fill(data.Lastname);

})
}

