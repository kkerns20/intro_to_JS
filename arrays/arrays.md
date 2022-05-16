# Arrays #

accessing last element

```js
array[array.length - 1]
```

adding elements to array

```js
array = [1, 2, 3, 4]

array[array.length] = 10
```

variables declared with `const` and initialized to an array can't change what the variable refers to but you can change the elements

If you want the array to remain frozen, use the object freeze method

```js
> const MyArray = Object.freeze([1, 2, 3])
> MyArray[1] = 5
> MyArray
= [1, 2, 3]
```

This only freezes one level deep in the array. If your array contains nested arrays or other objects, the values inside of them can still be changed, unless they are also frozen.

```js
> const MyArray = Object.freeze([1, 2, 3, Object.freeze([4, 5, 6])])
> MyArray[3][1] = 0
> MyArray
= [1, 2, 3, [4, 5, 6]]
```

### Adding elements with push and concat ###

push mutates the caller but concat does not

```js
> array.push('a')
= 5               // the new length of the array

> array
= [ 1, 4, 3, 10, 'a' ]

> array.push(null, 'xyz')
= 7

> array
= [ 1, 4, 3, 10, 'a', null, 'xyz' ]

> array.concat(42, 'abc')
= [ 1, 4, 3, 10, 'a', null, 'xyz', 42, 'abc' ]

> array
= [ 1, 4, 3, 10, 'a', null, 'xyz' ]
```

### Removing elements with pop and splice ###

```js
> array.pop()      // mutates caller
= 'xyz'            // removed element value

> array
= [ 1, 4, 3, 10, 'a', null ]

> array.splice(3, 2)  // delete 2 elements starting at index 3
[ 10, 'a' ]

> array
= [ 1, 4, 3, null ]
```

`splice` mutates the original array and returns a new array that contains the deleted elements.

## Iteration Methods ##

### Iterating with `forEach` ###

To use `forEach`, you need a **callback** function that you pass to forEach as an argument. A callback function is a function that you pass to another function as an argument. The called function invokes the callback function when it runs. The forEach method invokes its callback once for each element, passing it the element's value as an argument. forEach always returns undefined.

```js
let array = [1, 2, 3];
array.forEach(function(num) {
  console.log(num); // on first iteration  => 1
                    // on second iteration => 2
                    // on third iteration  => 3
}); // returns `undefined`

let array = [1, 2, 3];
array.forEach(num => console.log(num)); // more compact
```

### Transforming Arrays with `map` ###

```js
> let numbers = [1, 2, 3, 4]
> let squares = numbers.map(num => num * num);
> squares
= [ 1, 4, 9, 16 ]

> squares = numbers.map(num => num * num);
= [ 1, 4, 9, 16 ]
```

`forEach` and `map` are important methods, but they can confuse beginners. The main thing to remember is that `forEach` performs simple iteration and returns `undefined`, while `map` transforms an array's elements and returns a new array with the transformed values.

### Filtering Arrays with `filter` ###

(Like select in Ruby) The filter method is another array iteration method. It returns a new array that includes all elements from the calling array for which the callback returns a truthy value.

```js
> let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2]
> numbers.filter(num => num > 4)
= [ 5, 6, 7, 8, 9, 10 ] // returns an array of selected elements

> numbers
= [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2 ]
```

### Building New Values from Arrays with `reduce` ###

`reduce` takes two arguments: a callback function and a value that initializes something called the ***accumulator***. In its simplest form, the callback function takes two arguments: the current value of the accumulator and an element from the array. It returns a value that will be used as the accumulator in the next invocation of the callback:

```js
> let arr = [2, 3, 5, 7]
> arr.reduce((accumulator, element) => accumulator + element, 0)
= 17

> arr.reduce((accumulator, element) => accumulator * element, 1)
= 210

> let strings = ['a', 'b', 'c', 'd']
> strings.reduce((accumulator, element) => {
...   return accumulator + element.toUpperCase()
... }, '');
= 'ABCD'
```

`reduce` does not mutate the caller. (It is possible that the callback might mutate the caller, but that's inadvisable, and not `reduce`'s fault.)

## Arrays can be odd ##

- Arrays are objects
- If you change an array's `length` property to a smaller value, the array gets truncated.
- If you change an array's `length` property to a larger value, new elements do not get initialized

```js
> let arr = []
> arr.length = 3
> arr
= [ <3 empty items> ]

> arr[0]
= undefined

> arr.filter(element => element === undefined)
= []

> arr.forEach(element => console.log(element)) // no output
= undefined

> arr[1] = 3
> arr
= [ <1 empty item>, 3, <1 empty item> ]

> arr.length
= 3

> arr.forEach(element => console.log(element))
= 3
= undefined

> Object.keys(arr)
= ['1']
```

- You can create array "elements" with indexes that use negative or non-integer values, or even non-numeric values:

```js
> arr = [1, 2, 3]
= [ 1, 2, 3 ]

> arr[-3] = 4
= 4

> arr
= [ 1, 2, 3, '-3': 4 ]

> arr[3.1415] = 'pi'
= 'pi'

> arr["cat"] = 'Fluffy'
= 'Fluffy'

> arr
= [ 1, 2, 3, '-3': 4, '3.1415': 'pi', cat: 'Fluffy' ]
// these 'elements' arent' true elements, they are properties on hte array object
> arr.length
= 3
```

- Since arrays are objects, you can use the Object.keys method to return an array's keys -- its index values -- as an array of strings. Even negative, non-integer, and non-numeric indexes are included.

```js
> arr = [1, 2, 3]
> arr[-3] = 4
> arr[3.1415] = 'pi'
> arr["cat"] = 'Fluffy'
> arr
= [ 1, 2, 3, '-3': 4, '3.1415': 'pi', cat: 'Fluffy' ]

> Object.keys(arr)
= [ '0', '1', '2', '-3', '3.1415', 'cat' ]
// One quirk of this method is that it treats unset values in arrays differently from those that merely have a value of undefined. Unset values are created when there are "gaps" in the array; they show up as empty items until you try to use their value:
> let a = new Array(3);
> a
= [ <3 empty items> ]

> a[0] === undefined;
= true

> let b = [];
> b.length = 3;
> b
= [ <3 empty items> ]

> b[0] === undefined;
= true

> let c = [undefined, undefined, undefined]
> c
= [ undefined, undefined, undefined ]

> c[0] === undefined;
= true
```
