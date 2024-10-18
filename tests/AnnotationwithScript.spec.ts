import { test, expect } from '@playwright/test'


test("Annotation practice test 1", {

    annotation:{

        type: "Jira story",
        description: "URL"
    
    }    
}, async({ page })=>{

await page.goto("https://www.google.com/");
await expect(page).toHaveTitle("Google");

}
)
test("Annotate test Practice Test2", {

annotation:[{

type: "Google Title evrify",
description: "We are going to verify google title"

},{
      type: "Jira story",
        description: "URL"
}]
}, async ({page}) => {


})

