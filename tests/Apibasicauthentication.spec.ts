import { test, request, expect } from '@playwright/test'


let tokenvalue ;

test.beforeAll("APibasicauth", async ({ request }) => {


    const resp = await request.post("https://restful-booker.herokuapp.com/auth",{
         data:{

            "username":"admin",
            "password":"password123"

         }

    })
    tokenvalue = (await resp.json()).token
})

test("authentication token", async ({ request }) => {


    const resp1 =   await request.put("https://restful-booker.herokuapp.com/booking/1",{
         headers:{

          Cookie: "token" + tokenvalue

         // Cookie: `token=${tokenValue}

         }, 
         data:{

            "firstname" : "wish",
            "lastname" : "update",
            "totalprice" : 111,
            "depositpaid" : true,
            "bookingdates" : {
                "checkin" : "2018-01-01",
                "checkout" : "2019-01-01"
            },
            "additionalneeds" : "Breakfast"

         }

    })
   
})


test("authentication Deletetoken", async ({ request }) => {

    const respdel = await request.delete("https://restful-booker.herokuapp.com/booking/1",{
        headers:{

            Cookie: "token" + tokenvalue

        }

   })
expect(respdel.status()).toBe(201)
})
// test("APibasicauth", async ({ request }) => {

//   const resp =   await request.put("https://restful-booker.herokuapp.com/booking/1", {
//         headers:{

//             Authorization:'Basic YWRtaW46cGFzc3dvcmQxMjM='
//         },
//         data:{
//             "firstname" : "wish",
//     "lastname" : "update",
//     "totalprice" : 111,
//     "depositpaid" : true,
//     "bookingdates" : {
//         "checkin" : "2018-01-01",
//         "checkout" : "2019-01-01"
//     },
//     "additionalneeds" : "Breakfast"
//         }
//     })

//     expect(resp.status()).toBe(200)

// })