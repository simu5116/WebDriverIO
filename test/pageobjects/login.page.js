

class LoginPage
{


    get username()
    {
        return $("input[name='username']")
    }

    get password()
    {
        return $("//input[@type='password']")
    }

    get alert()
    {
        return $(".alert-danger")
    }

    get signIn()
    {
        return $("#signInBtn")
    }

    async  Login(Username,Password)
    {
        await this.username.setValue(Username)
        await this.password.setValue(Password)
        await this.signIn.click()
        
    }
}
//exporting object of login class
module.exports=new LoginPage()