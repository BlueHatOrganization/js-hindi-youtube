const accountId = 144553
let accountEmail = "rajvirc6@gmail.com"
var accountPassword = "1234"
accountCity = "Jaipur"
let accountState;
// accountId = 2 
console.log(accountId);

accountEmail = "soham@gmail.com"
accountPassword = "52564"
accountCity = "Kolkata"

/*
Prefer not to use var 
because of issue in block scope and functional scope
*/

console.table ([accountId, accountEmail, accountPassword, accountCity, accountState])