let score = "33abc"

let scoreInNumber = Number(score)

console.log(typeof score);
console.log(score);
console.log(typeof scoreInNumber);
console.log(scoreInNumber);


let isNumber = false
let boolInNum = Number(isNumber)
console.log(typeof isNumber);
console.log(typeof boolInNum);
console.log(boolInNum);


let myName = ""
let isName = Boolean(myName)

console.log(typeof isName);
console.log(isName);


// "33" => 33
// "33abc" => NaN
// true => 1 ; false => 0

let someNum = 1234
let numInString = String(someNum)

console.log(numInString);
console.log(typeof numInString);
