let rlSync = require('readline-sync');

let firstName = rlSync.question("What's your first name? ");
let lastName = rlSync.question("What's your last name? ");
let fullName = firstName + ' ' + lastName

console.log(`Hello, ${fullName}!`);