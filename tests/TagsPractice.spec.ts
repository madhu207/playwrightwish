import { test, expect } from '@playwright/test'


test.describe("Describe block", {tag:"@Sanity"}, async()=>{

test("Practice tag1 @UI", async ({ page }) => {

    console.log("Practice test1")
})

test("Practice tag2 @API", async ({ page }) => {
    console.log("Practice test2")

})

test("Practice tag3 @UI", async ({ page }) => {
    console.log("Practice test3")

})

test("Practice tag4", { tag: "@UI" }, async ({ page }) => {
    console.log("Practice test4")

})

test("Practice tag5", { tag: "@API" }, async ({ page }) => {
    console.log("Practice test5")

})

test("Practice tag6", { tag: ["@API","@Smoke"] }, async ({ page }) => {

    console.log("Practice test6")
})
})