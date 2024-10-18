
import { test, request, expect } from '@playwright/test'

test("API Testing GET 4", async ({ request }) => {

    const response1 = await request.get("/booking/2402")

    console.log(await response1.json())
})

test("API Testing GET 5", async ({ request }) => {

    const response1 = await request.get("/booking?firstname=John&lastname=Smith")

    console.log(await response1.json())
})

test("API Testing GET 6", async ({ request }) => {

    const response1 = await request.get("/booking", {

        params: {
            firstname: "John",
            lastname: "Smith"
        }
    })

    console.log(await response1.json())
})


test("API Testing GET 8", async ({ request }) => {

    const response1 = await request.get("/booking/25")

    console.log(await response1.json())
 //   expect(response1.status()).toBe(200);
    //  expect(response1.ok()).toBeTruthy();
    expect(await response1.json()).toMatchObject({

        firstname: 'Josh',
        lastname: 'Allen',
        totalprice: 111,
        depositpaid: true,
        bookingdates: { checkin: '2018-01-01', checkout: '2019-01-01' },
        additionalneeds: 'midnight snack'

    })

    const name = await response1.json()
    expect(name.firstname).toEqual("Josh");
})

test.only("API with UI", async ({ request, page }) => {

    const demoblaze = await request.get("https://api.demoblaze.com/entries");

   const response2 = await demoblaze.json()
   console.log(response2.Items[0])
   console.log(response2.Items[0].title)
   await page.goto("https://www.demoblaze.com/")
   await expect(page.getByRole('link', {name: 'Samsung galaxy s6'})).toHaveText(response2.Items[0].title)
})
