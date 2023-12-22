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

console.log(typeof myname);
console.log(typeof age);
console.log(typeof isValidResponse);
console.log(typeof accountState);

console.log("type of undefined using typeof method - " + typeof undefined)
console.log("type of null using typeof method - " +typeof null)