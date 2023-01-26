describe('E2E Commerce Automation',async()=>
{
    it('First TC', async()=>
    {
       await browser.url("https://rahulshettyacademy.com/loginpagePractise/")
       console.log(browser.getTitle())

       //Javascri[t is asynchronous and it will not go in sequence]
       //in Async , every step will return a promise.
       //resolved,pending,rejected.
       //so Js will not wait if promise is pending, it will go to another step and exceute and come back to this step later
       // so wherever u have ur webdriver io code prefix it with await, also write sync on perfix with function
       //this will wait until promise is resolved



       //npx wdio--this will search for wdio executable file in node modules(executable file is in bin folder
       //so instead of giving whole path till wdio , write npx wdio)
       //npx wdio run ./wdio.conf.js

       expect(browser).toHaveTitleContaining('Rahul Shetty Academy')
       await (await $("#username")).setValue("rahulshettyacademy")
       await (await $("//input[@type='password']")).setValue("learning")
       await (await $("#signInBtn")).click()
       browser.waitUntil(async ()=>await $("#signInBtn").getAttribute("value") === "Sign In",
       {
        timeout:5000,
        timeoutMsg: "Error Message is not showing up"
       }
       )
        console.log((await $('.alert-danger')).getText())

    })
})