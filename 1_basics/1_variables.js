const accountId = 4563851
let accountEmail = "mijbah@gmail.com"
var accountPassword = "12515"
accountCity = "Taltola"
let accountState;

// accountId = 2  // not allowed

console.log(accountId);

/* 
Prefer not to use var 
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity,accountState]);


