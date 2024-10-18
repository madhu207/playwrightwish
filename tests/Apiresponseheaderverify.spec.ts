import { test, request, expect } from '@playwright/test'

test("headerverification", async ({ request }) => {

   const getresponse =  await request.get("/booking/1");
   const headersvalue = getresponse.headers();
   console.log(headersvalue);

   expect(headersvalue.server).toEqual("Cowboy")
   expect(headersvalue['x-powered-by']).toEqual("Express")

   console.log("***********")

   const headerarray = getresponse.headersArray()

   console.log(headerarray)

   expect(headerarray.length).toBe(11)

   headerarray.forEach((header)=>{

   console.log(header.name +"::" +header.value )

   })


})