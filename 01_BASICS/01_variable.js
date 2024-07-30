const accountId=123456;

let accountEmail="raeesa@gmail.com";

var accountPwd="password";

accountCity="hyderabad";

//accountId=123; not allowed

accountEmail="saba@gmail.com";

var accountPwd="scriptpwd";

accountCity="mysore";

console.log(accountId);
console.log(accountEmail);
console.log(accountPwd);
console.log(accountCity);

console.table([accountId,accountEmail,accountPwd,accountCity]);


/*prefer not to use var bcz of issue in block scope and functional scope*/