let str1 = "rahul-verma-intel"
let url = String("https://rahul-verma-intel.com/view-my-page")

// console.log(url.length);

// Use string interpolation - provide args using ${variableName}
// console.log(`This is demo by ${str1.toUpperCase()} using url ${url} to test`)

//console.log(str1[3])

const str2 = new String("Rahul Verma")
//console.log(str2.charAt(2))
// console.log(str2.indexOf('a'))
// console.log(str2.lastIndexOf('a'))
// console.log(url.substring(5, 10))
// console.log(url.substring(10))

const anotherStr = str2.slice(2, 5)
//console.log(anotherStr)
//console.log(str1.slice(-4))
//console.log(str1.slice(2-str1.length, -1))

//console.log(url.replace("-", " ")) // replcaes first occurrances of search string

//console.log(str2.__proto__)

const str3 = "   This is Mr.Verma   "
console.log("trim test - <" + str3.trim() + ">")
console.log("trim start test - <" + str3.trimStart() + ">")
console.log("trim end test - <" + str3.trimEnd() + ">")


console.log(url.split('-'));