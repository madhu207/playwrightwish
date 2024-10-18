import {test as baseTest} from '@playwright/test'



type myFixtures = {

    fixture: any
    fixture1: any
}

type myworkerfixture = {

    workerfixture: any
    
}
export const test = baseTest.extend<myFixtures, myworkerfixture>({

    fixture: async({}, use)=>{
        const fixture = "I am fixture "

        console.log("Before part of fixture")
        await use(fixture);
        console.log("After part of fixture ")
    },
    fixture1: async({}, use)=>{
        const fixture = "I am fixture 1"

        console.log("Before part of fixture 1")
        await use(fixture);
        console.log("After part of fixture 1")
    },

    workerfixture: [async({}, use)=>{
        const workerfixture = "I am workfixture 1"

        console.log("Before part of workfixture 1")
        await use(workerfixture);
        console.log("After part of workfixture 1")
    },{scope:"worker"}]

})