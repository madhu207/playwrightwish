import { expect, test } from "@playwright/test";


test.beforeEach("", async () => {

  console.log("before each")


})


test.describe("group describe", async () => {

  test.setTimeout(5000)

  test.skip(({ browserName }) => browserName === 'chromium')

  test("practicetest1", async ({ page }) => {

    console.log("starting practice test 1");
    console.log("Ending practice test 1");

  })

  test("practicetest2", async ({ page }) => {

    console.log("starting practice test 2");
    console.log("Ending practice test 2");

  })
  test("practicetest3", async ({ page }) => {

    console.log("starting practice test 3");
    console.log("Ending practice test 3");

  })
  test("practicetest4", async ({ page }) => {

    console.log("starting practice test 4");
    console.log("Ending practice test 4");

  })

})

test.skip("practicetest5", async ({ page }) => {

  console.log("starting practice test 4");
  console.log("Ending practice test 4");

})

test("practicetest6", async ({ page, browserName }) => {


  if (browserName === 'firefox') {
    test.skip();
  }

  console.log("starting practice test 4");
  console.log("Ending practice test 4");

})

test.fixme("practicetest5a", async ({ page }) => {

  console.log("starting practice test 4");
  console.log("Ending practice test 4");

})


test("practicetest6a", async ({ page }) => {

  test.fixme()

  console.log("starting practice test 4");
  console.log("Ending practice test 4");

})

test("practicetest7", async ({ page }) => {

  test.fail();

  console.log("starting practice test 4");
  console.log("Ending practice test 4");

})

test.afterEach(async () => {
  console.log("executing after each")
})

test.afterAll(async () => {
  console.log("executing after all")
})








