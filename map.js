const map1 = new Map();
map1.set("info1", { name: "Tarun", age: 21 });
map1.set("info2", { name: "Aman", age: 19 });

for (let value of map1.values()) console.log(value);

for (let key of map1.keys()) console.log(key);
