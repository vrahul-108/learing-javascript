"use strict" // will use newer version of JS. This is aplied on entire file and cannot be revert to unstrict.

// alert("Hello Rahul") 
/* this is valid in brower but not in node. 
In browser, goto Page source and to cosole and run it. It will show pop-up window in page.
*/

let myname = "Rahul" // string variable
let age = 32 // int variable
let isValidResponse = true //boolean variable
let accountState //undefined variable. It is a type

// null is standalone value. It is not type but an object. Check it by using typeof method in console.log.

// console.log(typeof myname);
// console.log(typeof age);
// console.log(typeof isValidResponse);
// console.log(typeof accountState);

// console.log("type of undefined using typeof method - " + typeof undefined)
// console.log("type of null using typeof method - " +typeof null)


// Primitve Data types - Call by Value
// Number, String, boolean, null, undefined, Symbol, BigInit

const sym1 = Symbol('Hello')
const sym2 = Symbol('Hello')

// console.log(sym1 == sym2)
// console.log(sym1 === sym2)
// console.log(typeof sym1);


// Non-Primitive Data Types - Call by Reference
// Array, Object, Functions --  datatypes are object
const heros = ["Hanuman", "IronMan", "Batman"] // array uses []

// console.log(heros);
// console.log(typeof heros);

// Object uses {}
let myDetail = {
    name:"Rahul",
    age:33,
    gender:"male"
}

// console.log(myDetail);
// console.log(typeof myDetail);

// function as varaible -- datatype is function object
const myFunc = function(){
    console.log("Hello Rahul - Inside function");
}

// console.log(myFunc);
// console.log(typeof myFunc);


// Memory in JS
// Primitive Data types are stored in Stack - means call by value - copy is passed
// Non-Primitive Data types are stored in Heap. Variable name in stack but value in heap.
// means call by refernce - same data is modified.

let string1 = "youtube.com"
let string2 = string1
string2 = "snapchat.com"

console.log(string1);
console.log(string2);

let user1 ={
    email : "rahul@gmail.com",
    city : "Pune"
}

let user2 = user1
user2.email = "another_user@gmail.com"

console.log(user1);
console.log(user2);