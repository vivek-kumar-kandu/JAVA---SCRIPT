const accountID = 123456
let accountEmail = "vivek@gmail.com"
var accountPassward = "12345"
accountCity = "ghaiabad"
let accountState
// accountID = 2 //not allowed , typeerror 

accountEmail = "hc@google.com"

accountPassward = "2514"
/*
please do not use var
bcz of issue in block and functional scope
*/
console.log(accountID);
console.log(accountEmail);
console.log(accountPassward);
console.table([accountEmail,accountCity,accountID,accountPassward ,accountState]);