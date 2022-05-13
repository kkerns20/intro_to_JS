# [Functions](https://launchschool.com/books/javascript/read/functions) #

Most languages have a feature called procedures that let you extract the code and run it as a separate unit. In JavaScript, we call these procedurs **functions**.

## Using Functions ##

You must defined it with the reserved keyword, `function`. After the word `function`, you write the function's name followed by a pair of parentheses( `()` ). After closing the parenthesis, the code you want to associate with the the function -- the **function body** -- gets placed between curly braces (`()`).

Here is a function `say`:

```js
// we defined the fuction say with the parameter of words
// parameters are **local variables**
function say(words) {
  console.log(words);
}

// we invoke the say function and pass it a single argument
say("hello")
say("What it do?!")
say("Getting it")
```

### Invocation and Invoking ###

Synonymous with *call* and *calling*. You *invoke a function* or write a *function invocation*.

The local variables between the parenthesis are properly called **parameters**, not arguments. Arguments are the values you pass into the function for each of those parameters.

```js
function add(left, right) { // left & right are parameters here
  let sum = left + right;   // left & right are arguments here
  return sum;
}

let sum = add(3, 6); // 3 and 6 are arguments
```

## Return Values ##

All JavaScript function calls evaluate to a value. By default, that value is `undefined`; this is the **implicit return value** of most JS functions.

Whne you use a `return` statement, you can return a specific value from a function. This is an **explicit return value**. All functions return something unless they raise an exception, even if they don't execute a `return` statement.

```js
function add(a, b) {
  return a + b;
}

add(2, 3); // returns 5

// let's capture the return value and log it to the console
let twoAndThree = add(2, 3);
console.log(twoAndThree); // => 5
```

Functions that always return a boolean value, i.e., `true` or `false` are called **predicates**.

## Default Parameters ##

```js
function say(words = "Howdy") { // created a default parameter
  console.log(words + '!');
}

say("hello") // => hello!
say("What it do?!") // What it do?!!
say("Getting it") // Getting it!
say(); // Howdy!
```

## Nested Functions ##

```js
function foo() {
  function bar() {
    console.log("BAR");
  }

  bar(); // => BAR
  bar(); // => BAR
}

foo();
bar(); // ReferenceError: bar is not defined
```

## Functions & Scope ##

### Global Variables ###

**Global variables**
: have global scope, which means they are available everywhere within a program. You can read and reassign them at any time

Global variables can be useful in some scenarios; however, most developers discourage their use since they often lead to bugs. Limit the scope of your variables.

## Functions vs Methods ##

**Method invocation**
: occurs when you prepend a variable name or value followed by a period (`.`) to a function invocation `'xxyxz'.toUpperCase()`.

## Mutating the Caller ##

When a method permanently alters the object that invokes the method, it is said to **mutate the caller**.

```js
let name = "Pete Hanson";
console.log(name.toUpperCase()); // => 'PETE HANSON'
console.log(name);               // => 'Pete Hanson'
// toUpperCase doesn't mutate the caller

let oddNumbers = [1, 3, 5, 7, 9];
oddNumbers.pop();
console.log(oddNumbers); // => [1, 3, 5, 7]
//  teh `pop()` method removes the last element and is destructive
```

How do you know which methods mutate the caller and which don't? It's useful to know that all primitive values are immutable, so this question never arises when dealing with them. However, there's no way to tell whether a function mutates an array or object. You have to use the documentation or memorize it through repetition.

> If you have experience programming in other languages and wonder whether JavaScript is a pass-by-value or pass-by-reference language, JavaScript is both! It uses pass-by-value when dealing with primitive values and pass-by-reference with objects and arrays.

## Function Composition ##

```js
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

let sum = add(20, 45);
console.log(sum): // => 65

let difference = subtract(80, 10);
console.log(difference); // => 70

console.log(add(20, 45)); // => 65
console.log(subtract(80, 10)); // => 70

function times(num1, num2) {
  return num1 * num2;
}

console.log(times(add(20, 45), subtract(80, 10))); // => 4550
// 4550 == ((20 + 45) * (80 - 10))

add(subtract(80, 10), times(subtract(20, 6), add(30, 5))); // => 560
```

## Three ways to Define a Function ##

In JS, we have used **function declarations**

We can also invoke a function before declaring it:

```js
greetPeople();

function greetPeople() {
  console.log("Good Morning!");
}
```

Another way to define a fuction is called **function expression**.

```js
let greetPeople = function () { // the space after function is not needed an most won't use it
  console.log("Good Morning!");
};

greetPeople();
```

It looks similar to a function declaration, but you cannot invoke a function expression before it appears in your program.

Our example declares a variable named `greetPeople`and assigns it to the function expression after the = sign. We can do that since JavaScript functions are **first-class functions.** The key feature of first-class functions is that you can treat them like any other value. In fact, **all JavaScript functions are objects**. Thus, you can assign them to variables, pass them as arguments to other functions, and return them from a function call. The implications are far-reaching, though you won't really appreciate why that is until later in the Core Curriculum.

Any function definition that doesn't have the word `function` at the beginning ofa statement is a function expression.

```js
(function greetPeople() { // This is a function expression, not a declaration
  console.log("Good Morning!");
});

// they also occur in higher-order functions
function makeGreeter(name) {
  return function greeter() {
    console.log(`Hello ${name}`);
  };
}
```

There's a third kind of function in JavaScript called an **arrow function**.

```js
let greetPeople = () => console.log("Good Morning!");
greetPeople();
```

If we rewrote the add function from above as an arrow function

```js
let add = (a, b) => a + b;
```

That's much shorter! Note the lack of a `return` statement. We can omit it in arrow functions *when and only when the function body contains a single expression* (the expression may have subexpressions, but the entire expression must evaluate to a single value). Suppose it contains two or more expressions or statements. In that case, you must explicitly return a value if you need it, and you must also use curly braces:

## [The Call Stack](https://launchschool.com/books/javascript/read/functions#callstack) ##

The **call stack** helps JavaScript keep track of what function is executing as well as where execution should resume when the function returns.

Need more notes over call stack
