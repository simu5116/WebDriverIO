const loginPage = require('../pageobjects/login.page.js')
const shopPage = require('../pageobjects/Shop.page.js')

describe('E2E Commerce Automation',async()=>
{

    it('Login Page Fail',async()=>
    {
        await browser.url("https://rahulshettyacademy.com/loginpagePractise/")
        await loginPage.Login('rahulshettyacademy','learning 123')
        
    

    browser.waitUntil(async ()=>await loginPage.signIn.getAttribute("value") === "Sign In",
       {
        timeout:5000,
        timeoutMsg: "Error Message is not showing up"
       }
       )
       const errortext=await loginPage.alert.getText();
        console.log("demo---->"+errortext)
    })

    it('End to End Test',async()=>
    {

        const Products=['Apple','Blackberry']
        await browser.url("https://rahulshettyacademy.com/loginpagePractise/")
        await loginPage.Login('rahulshettyacademy','learning')
        await (await shopPage.checkout).waitForDisplayed()
        await shopPage.addProductsToCart(Products)

    })
    
})
