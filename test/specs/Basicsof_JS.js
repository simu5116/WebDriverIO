//reduce filer map
var marks=[12,13,56,78]

let total=marks.reduce((sum,mark)=>sum+mark,0)//first argument is the accumulator , here sum is the accumulator//reducing to one value
console.log(total)

var scores=[12,45,67,88,90,98]

let evennumbers=scores.filter(score=>score%2==0)//filtering out
console.log(evennumbers)
let mappedarray=evennumbers.map(score=>score*3)//performs operation on every element
//scores.push(90) new element added at the end
//scores.pop() deletes last element from ther end
//marks.unshit(89) add element at the beggining

//scope of var keyword is global or function level
//scope of let keyword is global level or block level

//IMPORTANT
//https://www.freecodecamp.org/news/differences-between-var-let-const-javascript/#:~:text=If%20you're%20just%20starting,cannot%20be%20reassigned%20another%20value.

//IMPORTANT
//https://webdriver.io/docs/organizingsuites

//in wdio.config file
//=================================================================
//Now to run smoke test, we added Smoke keyword in it block, you can take any keyword, like debit credit
//run npx wdio run ./wdio.conf.js --mochaOpts.grep Smoke
//mochOpts means this is all mocha framework, it and describe syntax
//grep means we are telling to search smoke word in all spec files and run only them
//=================================================================
// suites:
//     {
//         //==========================
//         //If you want to filter entire spec file like this file belongs to debit card functionality or credit card functioanlity
//         debitCard:['test/specs/LoginPage.js','test/specs/example.e2e.js'],
//         creditCard:['test/specs/Uicontrols.js','test/specs/Windows_and_Frames.js'],
//         //for running you can run with command 
//         //npx wdio run ./wdio.conf.js --suite debitCard

//     },
//If you want to rin only specific spec file you can run directly 
//npx wdio run ./wdio.conf.js --spec test/specs/example.e2e.js
//If you want to run two files
//npx wdio run ./wdio.conf.js --spec test/specs/example.e2e.js,test/specs/Uicontrols.js

//why do we need n number of wdio config file
//IN QA env also, we have diff configuartion, like baseURL will be diff like UAT SIT so everytime we cant come and change right
//maybe u want to run test in parallel in SIT but not in UAT

//==============================
//in package.json
// //"scripts": {
//     "test": "echo \"Error: no test specified\" && exit 1",
//     "wdio": "wdio run ./wdio.conf.js",
//     "CreditCardTests" : "npx wdio run ./wdio.conf.js --suite CreditCard",
//     "QARegression" : "npx wdio run ./wdio.conf.js"
//   },

//you can make ur own scripts and run by
//npm run CreditCardTests

//===================
//allure will give us xml result for each spec file
//we will convert that xml to html by doing some steps mentioned in last section videos, allure reports capture screenshots at failure
//npm run GenerateReports
//"GenerateReports": "allure generate allure-results --clean && allure open"


//The WDIO runner currently supports Mocha, Jasmine, and Cucumber.

//In Mocha we have BDD TDD and quink
//https://webdriver.io/docs/frameworks
//https://mochajs.org/#interfaces
//https://mochajs.org/api/mocha



//JavaScript promises are a very powerful feature that help you run asynchronous code in JavaScript.
//The code does not directly or immediately return a value. Instead, it returns a promise that it will eventually provide the value at a later time.

//A promise in JavaScript is asynchronous, meaning it takes time to resolve or finish. Just as the search for the applicant's resume takes time to complete.
//The JS engine also doesn’t wait around doing nothing – it starts executing other parts of the code, pending the returned value of the promise.
//With JavaScript promises, we do this by using a callback function (promise handlers). These functions are defined in a nested then() method.

//https://www.freecodecamp.org/news/what-is-promise-in-javascript-for-beginners/#:~:text=A%20promise%20is%20simply%20a,immediately%2C%20it%20returns%20a%20promise.

//Retries

//In order to use the this.retries() method, the suite block describe must use an unbound function function(){} instead of a fat arrow function () => {}, as described in Mocha docs. Using Mocha you can also set a retry count for all specs using mochaOpts.retries in your wdio.conf.js.


/*
describe('retries', function () {
    // Retry all tests in this suite up to 4 times
    this.retries(4)

    beforeEach(async () => {
        await browser.url('http://www.yahoo.com')
    })

    it('should succeed on the 3rd try', async function () {
        // Specify this test to only retry up to 2 times
        this.retries(2)
        console.log('run')
        await expect($('.foo')).toBeDisplayed()
    })
})
*/