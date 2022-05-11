# Input/Output #

## read-line ##

```js
let rlSync = require('readline-sync');
let name = rlSync.question("What's your name?\n");
console.log(`Good morning, ${name}!`);
```

## Exercises ##

1. Write a dynamic greeter program named `greeter.js`. The program should ask for your name, then output `Hello, {name}!` where `{name}` is the name you entered:

```
$ node greeter.js
What is your name? Sue
Hello, Sue!
```

```js
let rlSync = require('readline-sync');
let name = rlSync.question("What's your name? ");
console.log(`Hello, ${name}!`);
```

2. Modify the `greeter.js` program to ask for the user's first and last names separately, then greet the user with their full name.

```js
let rlSync = require('readline-sync');

let firstName = rlSync.question("What's your first name? ");
let lastName = rlSync.question("What's your last name? ");
let fullName = firstName + ' ' + lastName

console.log(`Hello, ${fullName}!`);
```

3. Modify the `age.js` program you wrote in the exercises for the *Variables* chapter. The updated code should ask the user to enter their age instead of hard-coding the age in the program.

```js
let rlSync = require('readline-sync');

let age = Number(rlSync.question("How old are you? "));
age = parseInt(age);
console.log('You are ' + age + ' years old.');
console.log(`In 10 years, you will be ${age + 10} years old.`);
console.log(`In 20 years, you will be ${age + 20} years old.`);
console.log(`In 30 years, you will be ${age + 30} years old.`);
console.log(`In 40 years, you will be ${age + 40} years old.`);
```
