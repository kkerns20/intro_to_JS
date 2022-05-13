# Flow Control #

hen writing programs, you want your data to take the correct path. You want it to turn left or right, up, down, reverse, or proceed straight ahead when it's supposed to. We call this **flow control**.

How do we make data do the right thing? We use conditionals.

## Conditionals ##

Examples

```js
if (x === 3) {                          // Example 1
  console.log("x is 3");
}

if (x === 3) {                          // Example 2
  console.log("x is 3");
} else {
  console.log("x is NOT 3");
}

if (x === 3) console.log("x is 3");     // Example 3

if (x === 3)                            // Example 4
  console.log("x is 3"); // ommitting the block is not preferrable

if (x === 3)                            // Example 5
  console.log("x is 3"); // ommitting the block is not preferrable
else
  console.log("x is NOT 3");

if (x === 3) {                          // Example 6
  console.log('x is 3');
} else {
  if (x === 4) {
    console.log('x is 4');
  } else {
    console.log('x is NOT 3 or 4');
  }
}

if (x === 3) {                          // Example 7
  console.log("x is 3");
} else if (x === 4) { // This is the one place where ommitting the block is preferrable
  console.log("x is 4");
} else {
  console.log('x is NOT 3 or 4');
}
```

## Comparisons ##

- `===`
  : the **strict equality operator**, also known as the **identity operator**, returns `true` when the operands have the same type *and* value, `false` otherwise.

```js
> 5 === 5
= true

> 5 === 4
= false

> 'abc' === 'abc'
= true

> 'abc' === 'abcd'
= false

> 'abc' === 'aBc'
= false

> '5' === '5'
= true

> '5' === '6'
= false

> 5 === '5'
= false

> '' === 0
= false
```

- `!==`
  : the **strict inequality operator** returns `false` when the operands have the same type *and* value, `true` otherwise. It is the inverse of `===`

```js
// Compare with the `===` examples.

> 5 !== 5
= false

> 5 !== 4
= true

> 4 !== 156
= true

> 'abc' !== 'def'
= true

> 'abc' !== 'aBc'
= true

> 5 !== '5'
= true
```

- `==`
  : the **non-strict equality operator**, also known as the **loose equality operator**, is similater to `===`; however, when the operands have different types, `==` attempts to coerce one of the operands ot the other operand's types before it compares them, and it may coerce both operands in some cases. The result is `true` when the final values are the same, `false` otherwise.

```js
// Compare with the `===` examples.

> 5 == 5
= true

> 5 == 4
= false

> 5 == '5'
= true

> '' == 0
= true
```

- `!=`
  : The **non-strict inequality operator**, also known as the **loose inequality operator**, is similar to `!==`. However, when the operands have different types, `!=` attempts to coerce one of the operands to the other operand's type before it compares them, and it may coerce both operands in some cases. The result is `false` when the final values are the same, `true` otherwise.

```js
// Compare with the `==` and `!==` examples.

> 5 != 5
= false

> 5 != 4
= true

> 5 != '5'
= false

> '' != 0
= false
```

> The rules that govern which operand == and != coerces to the other are complex and difficult to remember. Avoid these operators when you can. For instance, you can use explicit coercion and === in most cases.

> That advice is not universal. There are JavaScript developers, including some well-known ones, who will tell you to go ahead and use the loose operators, == and !=. Their reasoning is easy to understand: your code should not be attempting to compare different kinds of things, except in a few well-defined, isolated cases. Using the strict operators as a workaround is just masking bad code. They're not completely wrong! If you're comparing strings with arrays, your code almost certainly needs a redesign.

> That said, there are some edge cases that you need to be aware of with the loose operators. For that reason, the style we use at Launch School insists that you always use the strict operators. Doing so won't prevent you from having to fix bad code, but at this stage of your journey, it's less confusing to use the strict operators, and easier to debug.

- `<`
  : the **less than operator**

```js
> 4 < 5
= true

> 5 < 4
= false

> 5 < 5
= false

> "4" < "5"
= true

> "42" < "402" // compares char by char
= false

> "42" < "420"
= true

> "42" < 420 // '42' is coerced into a number here
= true
```

The examples with strings are especially tricky! Make sure you understand them. When comparing strings, the comparison is character-by-character. JavaScript moves from left-to-right in the strings looking for the first character that is different from its counterpart in the other string. Once it finds a character that differs, it compares that character with its counterpart, and makes a decision based on that. If both strings are equal up to the length of the shorter string as in the next to last example, then the shorter string is considered less than the longer string.

- `>`
  : the **greater than operator**

```js
// Compare with the `<` examples.

> 4 > 5
= false

> 5 > 4
= true

> 5 > 5
= false

> "4" > "5"
= false

> "42" > "402"
= true

> "42" > "420"
= false

> "42" > 420
= false
```

- `<=`
  : the **less than or equal to operator**

```js
// Compare with the `<` examples.

> 4 <= 5
= true

> 5 <= 4
= false

> 5 <= 5
= true
```

- `>=`
  : the **greater that or equal to operator**

```js
// Compare with the `>` examples.

> 4 >= 5
= false

> 5 >= 4
= true

> 5 >= 5
= true
```

## Logical Operators ##

- `!`
  : the **not operator** returns `true` when its operand is `false` and vice versa

```js
> !true
= false

> !false
= true

> !(4 === 4)
= false

> !(4 !== 4)
= true
```

- `&&`
  - the **and operator**

```js
> true && true
= true

> true && false
= false

> false && true
= false

> false && false
= false

> (4 === 4) && (5 === 5)
= true

> (4 === 4) && (5 === 6)
= false

> (4 === 5) && (5 === 5)
= false

> (4 === 5) && (5 === 6)
= false
```

- `||`
  : the **or operator**

```js
> true || true
= true

> true || false
= true

> false || true
= true

> false || false
= false

> (4 === 4) || (5 === 5)
= true

> (4 === 4) || (5 === 6)
= true

> (4 === 5) || (5 === 5)
= true

> (4 === 5) || (5 === 6)
= false
```

## Short Circuits ##

Basically, as soon as the && operator determines that something is false, it doesn't have to check the second term. With the || operator, if the first is true, it will also move on.

## Truthiness **

 JavaScript can coerce any value to a boolean value, and that's what it does in conditional contexts like the *if* statement.

```js
a = 5
if (a) {
  console.log("how can this be true?");
} else {
  console.log("it is not true");
} // => evaluates to "how can this be true?

b = 0
if (b) {
  console.log("how can this be true?");
} else {
  console.log("it is not true");
} // => evaluates to it is not true
```

```js
let x;

if (x = 5) {
  console.log("how can this be true?");
} else {
  console.log("it is not true");
}
```

The above code doesn't test whether `x` is equal to `5`. Instead, it assigns the variable x to 5, then evaluates the assignment's return value (`5`) as a boolean. Here, `5` evaluates as true when it appears in a boolean expression.

Why? When coercing a value to a boolean, JavaScript treats the following values as false:

- `false`
- The number `0`. This include all 3 variables of zero in JavaScript:
  - `0`: the ordinary zero value
  - `-0`: A negative zero. That's mathematical nonsense, but a real thing in JavaScript.
  - `0n`: The `BigInt` version of zero
- An empty string (`''`)
- `undefined`
- `null`
- `NaN`

Everything else evaluates as true.

You should avoid using assignments in conditionals.

The &`&` and `||` logical operators, as you'll recall, use short-circuit evaluation. These operators work with truthy and falsy values too, and they can also return truthy values instead of boolean values. When using `&&` and `||`, the return value is always the value of the operand evaluated last:

```js
> 3 && 'foo'  // last evaluated operand is 'foo'
= 'foo'

> 'foo' && 3  // last evaluated operand is 3
= 3

> 0 && 'foo'  // last evaluated operand is 0
= 0

> 'foo' && 0  // last evaluated operand is 0
= 0

> 3 || 'foo'  // last evaluated operand is 3
= 3

> 'foo' || 3  // last evaluated operand is 'foo'
= 'foo'

> 0 || 'foo'  // last evaluated operand is 'foo'
= 'foo'

> 'foo' || 0  // last evaluated operand is 'foo'
= 'foo'

> '' || 0     // last evaluated operand is 0
= 0
```

`!!` isn't a separate operator in JS, instead it's two consecutive `!` operators.

```js
> !!3    // 3 is truthy, !3 is false, !false is true
= true

> !!''   // '' is falsy, !'' is true, !true is false
= false
```

## Operator Precedence ##

Use parentheses

## The Ternary Operator ##

similar to Ruby

## Switch Statement ##

A `switch` statement is simiilar to an `if` statement but it has a different interface. It compares a single value against multiple values for strict equality (as with the `===` operator), where as `if` can test multiple expression with any condition.

`switch statements use the reserved words`switch`,`case`,`default`, and`break`.

```js
// switch.js
let a = 5;

switch (a) {
  case 5:
    console.log('a is 5');
    break;
  case 6:
    console.log('a is 6');
    break;
  default:
    console.log('a is neither 5, nor 6');
    break;
} // => a is 5

// This example is functionally identical to the following if/else statement

let a = 5;

if (a === 5) {
  console.log('a is 5');
} else if (a === 6) {
  console.log('a is 6');
} else {
  console.log('a is neither 5, nor 6');
} // => a is 5
```

The `break` statement in each `case` is crucial. Without a break, execution "falls through" to the next `case` clasue.

```js
let a = 5;

switch (a) {
  case 5:
    console.log('a is 5');
  case 6:
    console.log('a is 6');
  default:
    console.log('a is neither 5, nor 6');
} // => a is 5
  //    a is 6
  //    a is neither 5, nor 6
```

This doesn't mean that falling through is a completely undesirable behavior...

```js
let a = 5;

switch (a) {
  case 5:
  case 6:
  case 7:
    // executed if a is 5, 6, or 7
    console.log("a is either 5, 6, or 7")
    break;
  case 8:
  case 9:
    // executed if a is 8 or 9
    console.log('a is 8 or 9');
    break;
  default:
    // executed if a is anything else
    console.log('a is not 5, 6, 7, 8, or 9');
    break;
}
```
