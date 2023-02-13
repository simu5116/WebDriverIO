describe('E2E Commerce Automation',async()=>
{
    it('First TC-Smoke', async()=>
    {
       await browser.url("/loginpagePractise/")
        console.log(await browser.getTitle())

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
       const errortext=await $('.alert-danger').getText();
        console.log("demo---->"+errortext)
        //wait until checkbox is displayed after signing in
        await (await $(".btn-primary")).waitForExist();
        await expect(browser).toHaveUrlContaining("shop");
        //expect you can have on browser, you can have on locators also
        await expect(browser).toHaveTitle("ProtoCommerce");

        //to run testcases in firefox, or microsoft edge, install selenium standalone service in package.json then in wdio.conf.js modify
        //services: [
       // ['selenium-standalone', { drivers: { firefox: '0.29.1', chrome: true, chromiumedge: 'latest' } }]
       // ],
       //then change browsername in capabilities

    })
})