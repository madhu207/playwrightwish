import { test, request, expect } from '@playwright/test'

test("Deletecall", async ({ request }) => {

// const respo =await request.delete("https://restful-booker.herokuapp.com/booking/3")
// expect(respo.status()).toBe(201);

// const deletetext = await respo.text()

// console.log(deletetext)

// expect(deletetext).toEqual("Created")

const respget = await request.get("https://restful-booker.herokuapp.com/booking/3")
console.log(respget.status())
expect(respget.status()).toBe(404)

})