import { test,request } from '@playwright/test'

let reqcontext2;

test.beforeAll("Before all", async()=>{

    reqcontext2 = await request.newContext({

        baseURL: "https://restful-booker.herokuapp.com",
        extraHTTPHeaders:{
            Accept:'application/json'  
        }
    });

})

test("API Testing GET ", async ({ request }) => {

   const response1 = await request.get("https://restful-booker.herokuapp.com/booking",{
    ignoreHTTPSErrors: true,
     headers:{
        Accept:'application/json'
     }
 
   });
  
   console.log(await response1.json())
})

test("API Testing GET 2", async () => {

    const reqcontext = await request.newContext({

        baseURL: "https://restful-booker.herokuapp.com",
        extraHTTPHeaders:{

            Accept:"application/json"
        }
    });

    const response1 = await reqcontext.get("/booking",{
 
     ignoreHTTPSErrors: true
    });
   
    console.log(await response1.json())
 })

 test("API Testing GET 3", async () => {

    const response1 = await reqcontext2.get("/booking",{
 
     ignoreHTTPSErrors: true
    });
   
    console.log(await response1.json())
 })
 
 test.only("API Testing GET 4", async ({request}) => {

    const response1 = await request.get("/booking",{ //need to give baseurl in playwright.config.ts
 
     ignoreHTTPSErrors: true
    });
   
    console.log(await response1.json())
 })
 