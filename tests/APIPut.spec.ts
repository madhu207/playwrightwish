import { test, request, expect } from '@playwright/test'


test("Post", async ({ request }) => {

 const resp = await request.put("/booking/1", {

        headers: {
            Authorization: 'Basic YWRtaW46cGFzc3dvcmQxMjM='
        },
        data: {


            "firstname": "wish",
            "lastname": "update",
            "totalprice": 777,
            "depositpaid": true,
            "bookingdates": {
                "checkin": "2018-01-01",
                "checkout": "2019-01-01"
            },
            "additionalneeds": "lunch"


        }
    })
  const jsonresponse =  await resp.json();

  console.log(jsonresponse)

  expect(resp.status()).toBe(200);
  expect(resp.statusText()).toBe("OK");
  expect(resp.ok()).toBeTruthy();
  expect(jsonresponse).toMatchObject({
    
    "firstname": "wish",
    "lastname": "update",
    "totalprice": 777,
    "depositpaid": true,
    "bookingdates": {
        "checkin": "2018-01-01",
        "checkout": "2019-01-01",},
        "additionalneeds":"lunch"

  })
expect(jsonresponse.additionalneeds).toEqual("lunch")

const respget = await request.get("/booking/1")
console.log(await respget.json())
expect(await respget.json()).toMatchObject({
    
    "firstname": "wish",
    "lastname": "update",
    "totalprice": 777,
    "depositpaid": true,
    "bookingdates": {
        "checkin": "2018-01-01",
        "checkout": "2019-01-01",},
        "additionalneeds":"lunch"

  })

})