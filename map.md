# Javascript Maps

- ### Map is simialr to the objects in javascript that allows us to store elements in a key/value pair.

- ### Unlike an Object, a map contain objects, functions, and other data types as keys.

- ### To create a Map, we use the new Map() constructor.

```js
// create a Map
const map1 = new Map();
console.log(map1);
```

  <br />

# Insert Item to Map

- ### After we create a Map, we can use the set method to to insert element to it.

```js
// create a set

const map2 = new Map();
map2.set("info", { name: "tarun", age: 21 });
console.log(map2);
```

- ### We can also use objects or functions as keys

> Using Object as key

```js
// Map with a object key
const obj = {};
map2.set(obj, { name: "jack", age: 23 });
console.log(map2);
```

> Using Function as key

```js
// Map with a function key
const fun = () => {
  console.log("Fun Functions");
};
```

<br />

# Access Map Elements

- ### We can access the map elements using the get() method.

```js
// Access Map elements
const map1 = new Map();
map1.set("info", { name: "Tarun", age: 21 });
console.log(map1.get("info")); // { name: "Tarun", age: 21 }
```

<br />

# Check Map Elements

- ### We can use has method to check if a key is present in Map or not.

```js
// Check Map elements
const map1 = new Map();
map1.set("info", { name: "Tarun", age: 21 });
console.log(map1.has("info")); // true
```

<br />

# Removing Elements

- We can use the clear() method to remove all elements and delete() method to delete a particular key from a Map.

<br />

> Remove all elements

```js
// Remove Map elements
const map1 = new Map();
map1.set("info1", { name: "Tarun", age: 21 });
map1.set("info2", { name: "Aman", age: 19 });
console.log(map1);

// Removing all elements
map1.clear();
console.log(map1);
```

<br />

> Remove a single element

```js
// Remove Map elements
const map1 = new Map();
map1.set("info1", { name: "Tarun", age: 21 });
map1.set("info2", { name: "Aman", age: 19 });
console.log(map1);

// Removing a single element
map1.delete("info1");
console.log(map1);
```

<br />

# Javascript Map Size

- We can get the number of elements present in a map using the size property.

```js
const map1 = new Map();
map1.set("info1", { name: "Tarun", age: 21 });
map1.set("info2", { name: "Aman", age: 19 });
console.log(map1.size); // 2
```

<br />

# Iterate a Map

## 1. Using the for of loop.

```js
const map1 = new Map();
map1.set("info1", { name: "Tarun", age: 21 });
map1.set("info2", { name: "Aman", age: 19 });

for (let [key, value] of map1)
  console.log(`${key} => {name: ${value.name}, age: ${value.age}}`);
```

## 2. Using the forEach() method.

```js
const map1 = new Map();
map1.set("info1", { name: "Tarun", age: 21 });
map1.set("info2", { name: "Aman", age: 19 });

map1.forEach((value, key) => {
  console.log(`${key} => {name: ${value.name}, age: ${value.age}}`);
});
```

## 3. Over Map Values

- We can iterate over the map and get the values using the values() method.

```js
const map1 = new Map();
map1.set("info1", { name: "Tarun", age: 21 });
map1.set("info2", { name: "Aman", age: 19 });

for (let value of map1.values()) console.log(value);
```

## 4. Over Map Keys

- We can iterate over the map and get the keys using the keys() method.

```js
const map1 = new Map();
map1.set("info1", { name: "Tarun", age: 21 });
map1.set("info2", { name: "Aman", age: 19 });

for (let key of map1.keys()) console.log(key);
```
