import { test, request, expect } from '@playwright/test'

test("Post", async ({ request }) => {

  const response1 =  await request.post("/booking",{
data:{
    
        "firstname": "Jim",
        "lastname": "Brown",
        "totalprice": 111,
        "depositpaid": true,
        "bookingdates": {
            "checkin": "2018-01-01",
            "checkout": "2019-01-01"
        },
        "additionalneeds": "Breakfast"
    }
})

    const jsonresp2 = await response1.json();
    console.log(jsonresp2);
    expect(response1.status()).toBe(200);
    expect(response1.statusText()).toBe("OK");
    expect(response1.ok()).toBeTruthy();

   // expect(response1.booking.additionalneeds).toEqual("Breakfast")


})

test("DemoBlaze", async ({ request }) => {

    const resp2 = await request.post("https://demoblaze.com/addtocart",{

       // data:{"need to give payload view source"};
    })

})