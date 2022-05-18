# Objects #

## What are objects ##

Objects store a collection of **key-value pairs**: each item in the collection has a name that we call the **key** and an associated **value**.

These are like hashes in Ruby, but it's better to call them objects in JS.

We can create an object using **object literal** syntax:

```js
let person = {
  name:    'Jane',
  age:     37,
  hobbies: ['photography', 'genealogy'],
};

// or on a single line

> let person = { name: 'Jane', age: 37, hobbies: ['photography', 'genealogy'] }

// we can access using dot or bracket notation

> person.name                 // dot notation, preferred
= 'Jane'

> person['age']               // bracket notation
= 37

> person.height = '5 ft'
= '5 ft'

> person['gender'] = 'female'
= 'female'

> person
{
  name: 'Jane',
  age: 37,
  hobbies: [ 'photography', 'genealogy' ],
  height: '5 ft',
  gender: 'female'
}
```

if you want to delete something from an existing object, use the `delete` keyword. Delete removes the key-value if it can and returns `true`, unless it cannot delete the property.

```js
> delete person.age
= true

> delete person['gender']
= true

> delete person['hobbies']
= true

> person
= { name: 'Jane', height: '5 ft' }
```

> Key-value pairs are also called object **properties** in JavaScript. We can also use "property" to refer to the key name; the meaning is typically clear from context. For instance, we can talk about the `name` property for the `person` object without mentioning the value.

If a variable is declared with `const`, then you can't change what the object that variable refers to is but you can modify that object's properties and property values:

```js
> const MyObj = { foo: "bar", qux: "xyz" }
> MyObj.qux = "hey there"
> MyObj.pi = 3.1415
> MyObj
= { foo: 'bar', qux: 'hey there', pi: 3.1415 }

> MyObj = {} // Uncaught TypeError: Assignment to constant variable.

// remember that you can use `Object.freeze` to freeze the //properties

> const MyObj = Object.freeze({ foo: "bar", qux: "xyz" })
> MyObj.qux = "hey there"
> MyObj
= { foo: 'bar', qux: 'xyz' } // this only works one level deep
```

## Objects vs. Primitives ##
