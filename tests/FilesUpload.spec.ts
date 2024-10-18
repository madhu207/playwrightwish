import { test, expect } from '@playwright/test';


test("file upload", async ({ page }) => {
    //input type = file
    await page.goto("https://davidwalsh.name/demo/multiple-file-upload.php");
    //page.locator("#filesToUpload").setInputFiles("Fileupload/10040.csv");
    await page.locator("#filesToUpload").setInputFiles(["Fileupload/10040.csv", "Fileupload/NBEC-10663 (1).csv"]);
    await page.locator("#filesToUpload").setInputFiles([]);

})

test.only("heroku app", async ({ page }) => {

    await page.goto("https://the-internet.herokuapp.com/upload");

    const filechoser = page.waitForEvent("filechooser");
    await page.locator("#drag-drop-upload").click();

    const fileresolved = await filechoser;

    await  fileresolved.setFiles(["Fileupload/10040.csv","Fileupload/NBEC-10663 (1).csv","Fileupload/SFRA Presentation 1.pdf"])


})