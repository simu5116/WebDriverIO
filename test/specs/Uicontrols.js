//const expectchai= require(".chai").expect
describe('UI Controls', async()=>
{
    it('UI Controls', async()=>
    {
        //change in spec file in wdio config to Uicontrols.js
        await browser.url("https://rahulshettyacademy.com/loginpagePractise/")
        expect(browser).toHaveTitleContaining('Rahul Shetty Academy')
        await $("#username").setValue("rahulshettyacademy")
        await $("//input[@type='password']").setValue("learning")
       /* const radiobutton=await $$(".customradio")//return all matching elements(like an array)
        console.log("radiobutton------"+radiobutton[1])
        //the below example is of chaining locators , when we have parent class but in chold there is only tag no class so we can user below approach
        const userradiobutton=radiobutton[1];
        await browser.pause(5000);
       await userradiobutton.$("span").click();*/

       //all these above steps in one single step
       await (await (await $$(".customradio")[1]).$("span")).click();
       await browser.pause(5000);
       const modalpopup=await $(".modal-body")
        //below we are using waitordisplyed instaed of wait for exists because after clicking n user radio button only this code comes in display mode
        modalpopup.waitForDisplayed()
         await $("#cancelBtn").click();

          console.log(await (await (await $$(".customradio")[0]).$("span")).isSelected())
          expect(modalpopup).not.toBeDisplayed();
          const dropdown=await $("select.form-control")
          await dropdown.selectByAttribute("value","stud")
          await dropdown.selectByVisibleText("Consultant")
         await dropdown.selectByIndex(1)
          console.log(await dropdown.getValue())

          //chai assertions
          //compare strings
          //see value is boolean or not
         // expectchai(await dropdown.getValue().to.equal("stud"))

    })
})