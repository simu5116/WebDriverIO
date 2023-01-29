describe('Windows and Frames Handling', async()=>
{
    xit('Parent and Child Window Switch', async()=>
    {
        await browser.url("https://rahulshettyacademy.com/loginpagePractise/")
        await (await $(".blinkingText")).click();
        const windowhandles=await browser.getWindowHandles();
        await browser.switchToWindow(windowhandles[1])
        console.log(await $("h1").getText())
        //await browser.closeWindow()//close child window
       await browser.switchToWindow(windowhandles[0])
       console.log(await browser.getTitle())
       //open brand new window
       await browser.newWindow("https://google.com")
        await browser.switchWindow("https://rahulshettyacademy.com/loginpagePractise/")
        //so at last when we give switchwindow, webdriver will first see if we have same url matching with any of the opened windows if yes then it will switch to that and it will not open again tab with same url
        await browser.pause(3000)
    })

    it('Frame switch',async()=>
    {
        await browser.url("https://rahulshettyacademy.com/AutomationPractice/")
        await (await $("#mousehover")).scrollIntoView()
        console.log(await $$("a").length) //links count in the page// $$ will give you an array andd then its count
        await browser.switchToFrame(await $("[id='courses-iframe']"))
        console.log(await $("=Courses").getTagName())
        console.log(await $$("a").length) 
        await browser.switchToFrame(null) //switch back to main window
    })
})