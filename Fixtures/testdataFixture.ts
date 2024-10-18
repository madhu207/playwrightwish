import {test as basetest} from "@playwright/test";

type Myfixture = {

    logindata:any
    testdata:any
}

export const test = basetest.extend<Myfixture>({

    logindata:{
     
        unname: "Admin",
        pwd: "admin123"
    },

    testdata:{
     
        fname: "sam",
        lname: "d",
        mname:"warn",
        email:"abc@gmail.com"
    }

})

export {expect} from "@playwright/test";