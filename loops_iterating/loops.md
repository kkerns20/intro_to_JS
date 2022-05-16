# Loops and Iterating #

## while Loops ##

 ```js
let names = ['Kurt', 'Haley', 'Rhone', 'Wit'];
let upperNames = [];
let index = 0;

while (index < names.length) {
  let upperCaseNames = names[index].toUpperCase();
  upperNames.push(upperCaseNames);
  index += 1;
}

console.log(upperNames); // => [ 'KURT', 'HALEY', 'RHONE', 'WIT' ]
 ```

## do/while Loop ##

While differing visibly from a while loop, the behavior is almost identical. The crucial difference is that the `do/while` always executes the code in the block at least once.

```js
let answer;
do {
  answer = prompt("Do you want to do that again?");
} while (answer === 'y');
```

## for Loops ##

A `for` loop combines variable initialization, a loop condition, and the variable increment/decrement expression all on the same line:

```js
for (initialization; condition; increment) {
  // loop body
}

// it's almost the same as:
initialization;
while (condition) {
  // loop body
  increment;
}
```

By rewriting our names program with a `for` loop to better illustrate the difference, we get this:

```js
let names = ['Kurt', 'Haley', 'Rhone', 'Wit'];
let upperNames = [];

for (let index = 0; index < names.length; index += 1) {
  let upperCaseName = names[index].toUpperCase();
  upperNames.push(upperCaseName)
}

console.log(upperNames); // => [ 'KURT', 'HALEY', 'RHONE', 'WIT' ]
```

`for` loops let you see and understand the looping logic at a single glance. The syntax also lets you move the `index` variable from the global scope into the scope of the `for` statement, and it helps make your code cleaner and more organized.

## Controlling Loops ##

JavaScript uses the keywords `continue` and `break` to provide more control over loops.

`continue`
: lets you start a new iteration of the loop

`break`
: lets you terminate a loop early

### continue ###

If we wanted all names to be uppercased except Kirra:

```js
let names = ['Kurt', 'Haley', 'Rhone', 'Wit', 'Kirra'];
let upperNames = [];

for (let index = 0; index < names.length; index += 1) {
  if (names[index] === 'Kirra') { // we could rewrite with a negated if condtional to
    continue;                     // get rid of teh continue
  }

  let upperCaseName = names[index].toUpperCase();
  upperNames.push(upperCaseName)
}

console.log(upperNames); // => [ 'KURT', 'HALEY', 'RHONE', 'WIT' ]
```

> Earlier, we said that you should always use blocks with `if` statements. A common exception to this rule occurs when using a `continue`, `break`, or `return` statement as the `if` clause. When changing the flow with these three statements, the single-line version of the `if` statement can make your code easier to read.

### break ###

```js
let array = [3, 1, 5, 9, 2, 6, 4, 7]
let indexOfFive = -1;

for (let i = 0; i < array.length; i += 1) {
  if (array[i] === 5) {
    indexOfFive = i;
    break; // if we didn't have this, we would be wasteful of CPU resources
  }
}

console.log(indexOfFive);
```

## Array Iteration ##

```js
let names = ['Kurt', 'Haley', 'Rhone', 'Wit', 'Kirra'];

names.forEach(function (name) {
  console.log(name);
});

// we can make it more concise with an arrow function

names.forEach(name => console.log(name));
```

Most JavaScript programmers prefer to use **array looping abstractions** like `forEach` to loop over arrays

## Recursion ##

**Recursive** functions are functions that call themselves.

```js
function doubler(number) {
  console.log(number);

  if (number <= 50) {
    doubler(number * 2);
  }
}

doubler(5); // => 5
            // => 10
            // => 20
            // => 40
            // => 80
```

```js
// fibonacci.js

function fibonacci(number) {
  if (number < 2) return number; // 0 if number is 0, 1 if number is 1
  return fibonacci(number - 1) + fibonacci(number - 2);
}

console.log(fibonacci(6));  // => 8
console.log(fibonacci(20)); // => 6765
```

Every recursive function has a **baseline condition** that marks the end of the recursion( `number < 2` in the code above)

## Exercises ##

1. Modify the `age.js` program you wrote in the exercises for the Input/Output chapter. The updated code should use a `for` loop to display the future ages.

```js
// age.js

let readlineSync = require('readline-sync');
let age = readlineSync.question('How old are you? ');
age = parseInt(age);
console.log(`You are ${age} years old.`);
for (let future = 10; future <= 40; future += 10) {
  console.log(`In ${future} years, you will be ${age + future} years old.`);
}
```

2 Write a function that computes and returns the factorial of a number by using a `for` loop. The factorial of a positive integer `n`, signified by `n`!, is defined as the product of all integers between 1 and n, inclusive:

```js
function factorial(value) {
  let result = 1;
  for (let counter = value; counter > 0; counter -= 1) {
    result *= counter;
  }

  return result;
}

console.log(factorial(1));     // => 1
console.log(factorial(2));     // => 2
console.log(factorial(3));     // => 6
console.log(factorial(4));     // => 24
console.log(factorial(5));     // => 120
console.log(factorial(6));     // => 720
console.log(factorial(7));     // => 5040
console.log(factorial(8));     // => 40320
```

3. The following code causes an infinite loop (a loop that never stops iterating). Why?

```js
let counter = 0;

while (counter = 1) { // this reassignment will always result in a truthy value
  console.log(counter);
  counter += 1;

  if (counter > 2) {
    break;
  }
}
```
