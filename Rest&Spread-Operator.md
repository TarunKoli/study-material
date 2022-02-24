# Spread and Rest Operator.

> Spread syntax (...) allows an iterable such as an array expression or string to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected, or an object expression to be expanded in places where zero or more key-value pairs (for object literals) are expected.

<br />

## 1. Passing Arguments using spread syntax

## - Example 1

```js
function sum(x, y, z) {
  return x + y + z;
}

const numbers = [1, 2, 3];

console.log(sum(...numbers));
// expected output: 6
```

## - Example 2

```js
function myFunction(v, w, x, y, z) {}
let args = [0, 1];
myFunction(-1, ...args, 2, ...[3]);
```

> If the array contained more than three numbers, e.g. [1, 2, 3, 4], then it would still work fine, except that all four would be passed, but only the first three would be used unless you added more arguments to the function.

<br />

## 2. Combining and concatenating

```js
[...iterableObj, "4", "five", 6]; // combine two arrays by inserting all elements from iterableObj
```

```js
let parts = ["shoulders", "knees"];
let lyrics = ["head", ...parts, "and", "toes"];
//  ["head", "shoulders", "knees", "and", "toes"]
```

```js
let arr1 = [0, 1, 2];
let arr2 = [3, 4, 5];

arr1 = [...arr1, ...arr2];
//  arr1 is now [0, 1, 2, 3, 4, 5]
```

## 3. Passing or copying arrays & Objects.

- ### For Object literals

```js
let objClone = { ...obj }; // pass all key:value pairs from an object
```

- ### For Array literals

```js
let arr = [1, 2, 3];
let arr2 = [...arr]; // like arr.slice()

arr2.push(4);
//  arr2 becomes [1, 2, 3, 4]
//  arr remains unaffected
```

## 4. Comparing and replacing keys in object literals

```js
let obj1 = { foo: "bar", x: 42 };
let obj2 = { foo: "baz", y: 13 };

let clonedObj = { ...obj1 };
// Object { foo: "bar", x: 42 }

let mergedObj = { ...obj1, ...obj2 };
// Object { foo: "baz", x: 42, y: 13 }
```

## 5. Merging Object literals

```js
let obj1 = { foo: "bar", x: 42 };
let obj2 = { foo: "baz", y: 13 };
const merge = (...objects) => ({ ...objects });

let mergedObj1 = merge(obj1, obj2);
// Object { 0: { foo: 'bar', x: 42 }, 1: { foo: 'baz', y: 13 } }

let mergedObj2 = merge({}, obj1, obj2);
// Object { 0: {}, 1: { foo: 'bar', x: 42 }, 2: { foo: 'baz', y: 13 } }
```
