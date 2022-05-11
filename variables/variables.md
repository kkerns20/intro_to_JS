# [[Variables](https://launchschool.com/books/javascript/read/variables) #

One of the most basic concepts of programming is that programs need to store information in memory so that it can use and manipulate that information. Variables are the means for doing that in almost all computer languages. They provide a way to label data with a descriptive name that helps us and other readers understand a program. Think of variables as containers that hold information: their purpose is to label and store data in memory so that your program can use it.

## Variables and Variable Names ##

### Variable Naming ###

Properly naming variables is traditionally viewed as one of the most difficult tasks in computer programming. A variable name must accurately and succinctly describe the data that the variable contains.

Variable names are often referred to by the broader term, **identifiers**. In JavaScript, identifiers refer to several things:

- Variable names declared by `let` and `var`
- Constant names declared by `const`
- Property names of objects
- Function names
- Function parameters
- Class names

## Declaring and Assigning Variables ##

A variable declaration is a statement that asks the JavaScript engine to reserve space for a variable with a particular name.

The preferred method to declare a variable is with the `let` keyword.

```js
let firstName // declared and initiialized to undefined

let lastName = 'Kerns' // declared and initiailized to the string 'Kerns'

lastName = 'Buck' // varaible reassignment
```

In most cases, you'll write your variable declaration and **initialize** it with an explicit value on the same line.

## Declaring Constants ##

`const` keyword is similar to `let`, but alllows you declare and initialize **constant** identifiers. Constants have an immutable binding to their values, so they cannot assign it to a new value.

`const` declarations require a value.

## Variable Scope ##

A variable's **scope** determines where it is available in a program. The location where you declare a variable determines its scope. In JavaScript, variables declared with the `let` or `const` keywords have **block** scope.

```js
if (expression) {  // block starts at {
  doSomething();   // block body
}                  // block ends here
```

Not everything is a block.

```js
{
  // this is a block
  let foo = 42;
  console.log(foo);
}

if (answer === 'yes') {
  // this is a block
  console.log('yes');
} else {
  // so is this
  console.log('nope');
}

while (answer !== 'no') {
  // this is a block
  doSomething();
}

function foo() {
  // not technically a block. However, we can treat it as a block.
  let foo = 42;               // foo has block scope
  console.log(foo);
}

let foo = {
  // this is not a block
  bar: 42,
};
```

In general, blocks appear in `if...else`, `while`, `do...while`, `for`, `switch`, and `try...catch` statements, or by themselves (as in the first example above).

```js
if (1 === 1) {
  let a = 'foo';
}

console.log(a); // ReferenceError: a is not defined
// a is not in scope to log it as 'foo'

// instead, this will work
let a = 'foo';
if (1 === 1) {
  a = 'bar';
}

console.log(a);    // => 'bar'
```

## A Common Gotcha ##

Make sure to always declare your variables and constants wit `let` and `const`.

## Exercises ##

1. Write a program named `greeter.js` that greets `'Victor'` three times. Your program should use a variable and not hard code the string value 'Victor' in each greeting. Here's an example run of the program:

```
$ node greeter.js
Good Morning, Victor.
Good Afternoon, Victor.
Good Evening, Victor.
```

```js
let name = 'Victor';

let timeOfDay = [
  'Morning',
  'Afternoon',
  'Evening',
];

console.log(`Good ${timeOfDay[0]}, ${name}.`);
console.log(`Good ${timeOfDay[1]}, ${name}.`);
console.log(`Good ${timeOfDay[2]}, ${name}.`);

```

2. Write a program named age.js that includes someone's age and then calculates and reports the future age in 10, 20, 30 and 40 years. Below is the output for someone 20 years old.

```
You are 20 years old.
In 10 years, you will be 30 years old.
In 20 years, you will be 40 years old.
In 30 years, you will be 50 years old.
In 40 years, you will be 60 years old.
```

```js
let age = 20;
console.log('You are ' + age + ' years old.');
console.log(`In 10 years, you will be ${age + 10} years old.`);
console.log(`In 20 years, you will be ${age + 20} years old.`);
console.log(`In 30 years, you will be ${age + 30} years old.`);
console.log(`In 40 years, you will be ${age + 40} years old.`);
```

3. What happens when you run the following program? Why do we get that result?

```js
{
  let foo = 'bar';
}

console.log(foo);
```

The `let` statement creates variables with block scope, which limits the visibility of the variable to the block. `foo` doesn't exist outside of the block

```
> {
...   let foo = 'bar';
... }
undefined
> 
> console.log(foo);
Uncaught ReferenceError: foo is not defined
```

4. What happens when you run the following code? Why?
