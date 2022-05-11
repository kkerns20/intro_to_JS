# The Basics #

## Data Types ##

Javascript has five so-called *primitive data types*:

- String
- Number
- Undefined
- Null
- Boolean

Every type that is not a primitive type is an **object type**.

### Strings ###

string interpolate with backticks and `${}`

### Numbers ###

encompasses all real numbers

you can't use commas or decimals for any number

### Booleans ###

on or off state, have a starring role when working with comparison operators

### Undefined ###

This is a way to express the absence of a value.

### Null ###

Represents the intentional absence of a value. `null` often represents emptiness or nothing.

Chief difference between `null` and `undefined`:

- you must use `null` explicitly if you want to use it
- `undefined` can arise implicitly

### The typeof Operator ###

similar to Class in Ruby

```js
> typeof 1
= 'number'

> typeof 'foo'
= 'string'

> typeof true
= 'boolean'

> typeof undefined
= 'undefined'

> typeof null // this is an actual mistake in JS but would break too many apps to fix it
= 'object'

> typeof [1, 2, 3]
= 'object'
```

## Operations ##

### NaN ###

To determine whether a value is `NaN`, you can't use the usual comparison operators in a simplet way. `NaN` is the only value in JavaScript that is not equal to itself.

```js
> let value = NaN;
> value === NaN         // We'll talk about this in a few minutes
= false

> NaN === NaN
= false

//  instead use either Number.isNaN or Object.is
> let value = NaN;
> Number.isNaN(value)
= true

> Object.is(value, NaN)
= true
```

### Infinity and -Infinity ###

Like `NaN`, `Infinity` and `-Infinity` are considered by JavaScript to be numbers.

```js
> Infinity * Infinity
= Infinity

> Infinity + Infinity
= Infinity

> Infinity - Infinity
= NaN

> Infinity / Infinity
= NaN

> 1234567890 / Infinity
= 0

> typeof Infinity
= 'number'

> typeof -Infinity
= 'number'

> let value1 = Infinity
> value1 === Infinity
= true

> let value2 = -Infinity
> value2 === -Infinity
= true

// be wary in some instances
> let value1 = Infinity
> value1 === Infinity * 123456789
= true
```

### Equality Comparison ###

```js
> 42 === 42
= true

> 42 === 43
= false

> 'foo' === 'foo'   // It works with strings too
= true

> 'FOO' === 'foo'   // Case is different
= false
```

### Concatenation ###

```js
> '1' + 2
= '12'
```

JavaScript concatenates the two values as though they were both strings. First, it converts—*coerces*—the number 2 to a string; it then concatenates the result to the string `'1'`. We call this behavior *implicit type coercion*. When using `+`, if either operand is a string and the other is not, JavaScript coerces the non-string operand to a string; thus, the result is always another string.

## Explicit Coercion ##

 The difference between explicit and implicit coercion is that explicit coercion lets you decide what you want to do, whereas implicit coercion lets the engine choose.

### Strings to Numbers ###

 The `Number` function coerces a string to a number

 `> Number('1') // => 1`

 `Number` takes a string value as an argument and returns a number if the string contains a valid numeric value. You can then perform arithmetic operations on the result. It will return `NaN`  if its not a number and doesn't raise an error

 You can also use `parseInt` function to coerce strings to numbers

 ```js
> parseInt('12')
= 12

> parseInt('12xyz')
= 12

> parseInt('3.1415')
= 3
 ```

`parseFloat` is a simlar function

### Numbers to Strings ###

`> String(20) //=> '20'`

## Data Structures ##

The most common data structures, or complex data types, that JavaScript programmers use are arrays and objects.

### Arrays ###

JavaScript organizes information into ordered lists using *arrays*. They may contain strings, numbers, booleans, or any other data type. In JavaScript, array literals use square brackets [ ] surrounding a comma-delimited list of values, otherwise known as elements.

Access elements like `[1, 2, 3, 4][1] // => 2`

Arrays can also be written in a multi-line format

```js
[
  "Eric Idle",
  "John Cleese",
  "Terry Gilliam",
  "Graham Chapman",
  "Michael Palin",
  "Terry Jones",
]
```

The trailing comma is optional, but a common practice.

Most important facts to remember about arrays are:

- The order of the elements is significant.
- Use index numbers to retrieve array elements.
- Index numbers are non-negative integers starting from `0`.

### Objects ###

JavaScript **objects** have many use cases, but the one that interests us most now is as a dictionary-like data structure that matches keys with specific values. Other languages use different names for the same kind of structure: *hash*, dictionary, and associative array are the most common terms. Essentially, a JavaScript object is a collection of key-value pairs.

```js
> ({ dog: 'barks', cat: 'meows', pig: 'oinks' })['cat']
= 'meows'

// also can be multi-line

{
  title: "Monty Python's Flying Circus",
  cast: [
    "Eric Idle",
    "John Cleese",
    "Terry Gilliam",
    "Graham Chapman",
    "Michael Palin",
    "Terry Jones",
  ],
  firstSeason: 1969,
  lastSeason: 1974,
}
```

## Expressions and Return Values ##

When you use the Node or browser console REPL, you type **expressions** at the `>` prompt. An expression is anything that JavaScript can evaluate to a value, even if that value is `undefined`or `null`. With few exceptions, almost everything you write in JavaScript is an expression. JavaScript expressions evaluate to a value that can be captured and used in subsequent code.

```js
> 7 + (5 + 2)
= 14 // return value

> console.log(5 + 2)
7
= undefined // return value
```

### Printing (logging) vs returning values ###

Inexperienced JavaScript programmers are often confused with the difference between returning a value and printing or displaying it. When we invoke the `console.log` method, we're telling JavaScript to write something to the console. In Node, that is your screen; in your browser, it's the Console in your Developer Tools application. The term **log** is a synonym for printing or displaying something on the console.

## Statements ##

JavaScript also has **statements**. You can find a complete list of statements on [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements). Statements often include expressions as part of their syntax, but the statement itself is not an expression -- its value cannot be captured and reused later in your code.

An example of a JavaScript statement is the variable declaration:
`> let foo = 3;`

The key difference between a statement and an expression is that you can't capture a value from a statement.

### Statements in Practice ###

> a **statement** is a line of code commanding a task. Every program consists of a sequence of statements.

By this definition, every chunk of code that can be treated as a single unit is a statement. This includes:

- variable, function, and class declarations
- loops and `if`statements
- `return`and `break` statements
- assignments: `a = 3`;
- standalone expressions: `console.log("Hello");`

The chief difference between this latter definition and the language specification is it includes assignments and function calls as statements, while the language specification does not. Most developers use the term "statement" in the broader sense: any syntactic unit of code that expresses an action for the computer to perform.

## Exercises ##

1. Concatenate two or more strings, one with your first name and one with your last, to create a string with your full name as its value. For example, if your name is John Doe, think about how you can put `'John'` and `'Doe'` together to get `'John Doe'.`

```js
let firstName = 'Kurt';
let lastName = 'Kerns';

fullName = firstName + ' ' + lastName

console.log(fullName)
```

2. Use the arithmetic operators to determine the individual digits of a 4-digit number like `4936`:

```js
let number = 4396;
let ones = number % 10

console.log(ones)

number = (number - ones) / 10

console.log(number)

let tens = number % 10

console.log(tens)

number = (number - tens) / 10

console.log(number)

let hundreds = number % 10

console.log(hundreds)

let thousands = (number - hundreds) / 10

console.log(thousands)
```

4. Why does this code log `'510'` instead of `15`

```js
console.log('5' + 10);
// javascript implicitly concatenates strings and coerces the number into a string
```

5. Use explicit coercion so it logs `15` instead.

```js
console.log(Number('5') + 10);
// = 15

// OR
console.log(parseInt('5', 10) + 10); // =15
console.log(parseInt('5') + 10);     // =15
```

6. Use the template literal syntax along with the expression `Number('5') + 10` to log the following sentence to the console:
`The value of 5 + 10 is 15.`

```js
let value = `The value of 5 + 10 is ${Number('5') + 10}.`;

console.log(value);
```

7. Will an error occur if you try to access an array element with an index that is greater than or equal to the length of the array? For example:

```js
let foo = ['a', 'b', 'c'];
console.log(foo.length);  // => 3
console.log(foo[3]);      // will this result in an error?
```

*There won't be an error. When we use an out-of-bound index, JavaScript returns `undefined` so line 3 logs and returns `undefined` to the console.*

8. Create an array named names that contains a list of pet names. For instance:

| **Name** |
| -------- |
| asta |
| butterscotch |
| pudding |
| neptune |
| darwin |

```js
let names = [
  'asta',
  'butterscotch',
  'pudding',
  'neptune',
  'darwin',
];
names; // [ 'asta', 'butterscotch', 'pudding', 'neptune', 'darwin' ]
```

9. Create an object named `pets` that contains a list of pet names and the type of animal. For instance:

| **Name** | **Animal** |
| -------- | ---------- |
| asta | dog |
| butterscotch | cat |
| pudding | cat |
| neptune | fish |
| darwin | lizard |

```js
// Multiline
let pets = {
  asta:         'dog',
  butterscotch: 'cat',
  pudding:      'cat',
  neptune:      'fish',
  darwin:       'lizard', // The comma on this line is optional
};

// Single line
let pets = { asta: 'dog', butterscotch: 'cat', pudding: 'cat', neptune: 'fish', darwin: 'lizard' };
```

10. What value does the following expression evaluate to?

```js
'foo' === 'Foo'
```

*This evaluates to `false` because case matters when comparing strings.*

11. What value does the following expression evaluate to?

```js
parseInt('3.1415') // = 3
```

*`parseInt`converts strings that begin with a digit to their numeric equivalent. If it encounters a non-digit such as `.`, it stops converting. Thus, this example converts the `3` at the beginning of the string but ignores everything else.*

12. What value does the following expression evaluate to?

```js
'12' < '9'
```

*This evaluates to `true` since it is comparing strings, so it starts with `'1' < '9'`, so `'12'` must be less than `'9'`.*

If we used numbers instead, it would evaluate to false.
