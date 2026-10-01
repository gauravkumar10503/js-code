const accountId = 144553;
let accountEmail="github@google.com";
var accountPassword="12345";
accountCity="Jaipur";
let accountState;

//accountId = 2;  This is not allowed
accountEmail="hc@hc.com";
accountPassword="212121";
accountCity="Bengaluru";

/* perfer not to use var
because of issue in block scope 
and functional scope */

console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);
