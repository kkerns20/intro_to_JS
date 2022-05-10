# Intro to JS - Preparations #

## Naming Conventions ##

**camelCase** for most variable and function names

```js
let answerToUltimateQuestion = 42;     // initializing a variable
function fourScoreAndSevenYearsAgo() { // defining a function
  // do something
}
```

**constructor functions** should normally use PascalCase

```js
function DomesticCat(name) {           // defining a function
  // do something
}
```

Constants that server as *unchanging configuration values* in your program use SCREAMING_SNAKE_CASE

```js
const INTEREST_RATE = 0.0525;
const COURSE_NUMBER = 'JS101';
const HOST = 'launchschool.com';
const FIRST_LETTER = 'a';             // magic number
const LAST_LETTER = 'z';              //
```

We also use SCREAMING_SNAKE_CASE for constants that represent so-called magic numbers (which may not actually be numbers) -- constants that are important to your program in some way but not as configuration values.

```js
const SECONDS_PER_MINUTE = 60;
const OUNCES_PER_POUND = 16;
const METERS_PER_KILOMETER = 1000;
const PI = 3.141528;
const INPUT_PROMPT = '==>';
const TODAY = new Date();
```

Constants that are used to store functions should follow same rules as function names: camelCase for most and PascalCase for constructor functions

```js
const sayHi = function() {
  console.log("Hi!");
};

const Pet = function(name) {
  this.name = name;
};
```

For other constants, follow the naming conventions of your teammates or your personal style.

***The first character must be alphabetic***

## Use Semicolons ##

JavaScript automatically, but invisibly, inserts semicolons where it needs them, but the convention is to use them. There are some people that don't, but you have to be careful with that.

```js
// traditional style - use it
function greeting() {
  console.log('Get ready!');
}

greeting(); // => Get ready!

// there will also be REPL outputs in the book
> greeting()
Get ready!   // console output
= undefined  // return value of greeting();

> 2 + 2
= 4          // return value of 2 + 2
```

Constructor is synonomous with Class from Ruby

## Preparations Exercises ##

3. Create a file named `foo.js` in a directory named `preparations_exercises`. Add the following code to the file.

```js
let foo = "bar";
console.log(foo);
foo;
```

4. What is output when you run `foo.js` with `node`? What does the REPL output? What does Chrome REPL output?

```js
// Node from a file
$ node foo.js
bar

// Node REPL
> let foo = 'bar'
= undefined

> console.log(foo);
bar
= undefined

> foo
= 'bar'

// Chrome REPL
> let foo = 'bar';
  console.log(foo);
  foo
bar
= "bar"
```

5. Identify the Constructors for each of hte following methods and classify each method as either a 'Static' or a 'Prototype' method:

`substring`  => String Constructor => Prototype

`create`  => Object Constructor => Static

`fromCharCode` => String Constructor => Static

`slice` => Array, String Constructor => Prototype

`toString` => String, Object, Array, Number Constructor => Protoype
