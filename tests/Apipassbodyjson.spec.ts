import { test, request, expect } from '@playwright/test'
import Apijson from "../Test-data/apidata.json"

test("Pass body from JSON for Post call", async ({ request }) => {


 const postresp =  await request.post("https://restful-booker.herokuapp.com/booking",{

    data: Apijson.Postcalldata
 })

  const jsonresponse = await postresp.json();

  expect (jsonresponse.booking).toMatchObject(Apijson.Postcalldata)

expect(jsonresponse.booking.additionalneeds).toEqual(Apijson.Postcalldata.additionalneeds)
})

test("Pass body from JSON for Put call", async ({ request }) => {

    const putresp =  await request.put("https://restful-booker.herokuapp.com/booking",{

        headers:{
            Authorization:'Basic YWRtaW46cGFzc3dvcmQxMjM='
        },
        data:Apijson.Putcalldata
     })

     const jsonputresp = await putresp.json();

     expect(jsonputresp).toMatchObject(Apijson.Putcalldata)
     expect(jsonputresp.booking.firstname).toEqual(Apijson.Putcalldata.firstname)
})