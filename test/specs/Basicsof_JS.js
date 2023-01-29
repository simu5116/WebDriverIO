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


