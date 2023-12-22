const accountId = 12345
let accountEmail = "rahul123@gmail.com"
var accountName = "Rahul Verma"
accountCity = "Patna"

let accountState

// accountId = 9821 // Not allowed as variable is of const type
accountEmail = "verma2305@outlook.com"
accountName = "Shivangi Sinha"
accountCity = "Pune"

console.log(accountId);

/*
table method in console takes array of elements separated by comma.
Also, Don't use var as it do not have scope handling like 'let'
*/

console.table([accountId, accountEmail, accountName, accountCity, accountState])