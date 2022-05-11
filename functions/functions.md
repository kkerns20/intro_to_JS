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
