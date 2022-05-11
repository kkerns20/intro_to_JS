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
