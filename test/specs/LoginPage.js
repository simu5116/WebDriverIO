const loginPage = require('../pageobjects/login.page.js')
const shopPage = require('../pageobjects/Shop.page.js')
const reviewPage= require('../pageobjects/review.page')
const expectchai = require('chai').expect
const fs=require('fs')//this is required to parse your json file
let credentials=JSON.parse(fs.readFileSync('test/testData/LoginTest.json'))
let e2ecredentials=JSON.parse(fs.readFileSync('test/testData/e2eTest.json'))
describe('E2E Commerce Automation',async()=>
{

    credentials.forEach(({username,password})=>{
    it('Login Page Fail-Smoke',async()=>
    {
        //to run the test two times, u can use this.retries(2)
        //after running three times(1+2) it will report failure
        //with retry function you have to use function in it block if u are writing retries here
        //or in describe block if u are writing retries statement there, do not user ()=> fat function.
        await browser.url("/loginpagePractise/")
        await loginPage.Login(username,password)
        
    

        await browser.waitUntil(async()=>await loginPage.signIn.getAttribute('value') === 'Sign In',
        {
            timeout: 5000,
            timeoutMsg: 'Error message is not showing up'
        })
       const errortext=await loginPage.alert.getText();
        console.log("demo---->"+errortext)
    })
    e2ecredentials.forEach(({Products})=>{
    it('End to End Test-Smoke',async()=>
    {

       // const Products = ['iphone X','Blackberry']
        await browser.url("/loginpagePractise/")
        await loginPage.Login(username,password)
        await (await shopPage.checkout).waitForDisplayed()
        await shopPage.addProductsToCart(Products)
        await (await shopPage.checkout).click()
        sumOfProducts=await reviewPage.sumOfProducts()
        TotalFormattedprice= await reviewPage.TotalFormattedPrice()
        console.log(sumOfProducts)
        console.log(TotalFormattedprice)
        await expectchai(sumOfProducts).to.equal(TotalFormattedprice)

    })
})
    })
    
})
