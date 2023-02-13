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