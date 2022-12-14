# MongoDB Aggregation Framework

> Example Data

```js
{
        "_id" : ObjectId("6395a4e32ac0c23132889d76"),
        "gender" : "male",
        "name" : {
                "title" : "mr",
                "first" : "zachary",
                "last" : "lo"
        },
        "location" : {
                "street" : "3193 king st",
                "city" : "chipman",
                "state" : "yukon",
                "postcode" : "H8N 1Q8",
                "coordinates" : {
                        "latitude" : "76.4507",
                        "longitude" : "-70.2264"
                },
                "timezone" : {
                        "offset" : "+11:00",
                        "description" : "Magadan, Solomon Islands, New Caledonia"
                }
        },
        "email" : "zachary.lo@example.com",
        "login" : {
                "uuid" : "76970c67-4801-4926-80f0-4872fe0aee42",
                "username" : "lazyrabbit189",
                "password" : "pass1",
                "salt" : "BVMLMPwZ",
                "md5" : "a6ff61f912af9958587e0fc0c8dc920b",
                "sha1" : "bd37d1c699fb5a17031924c37e5d90ba4403e598",
                "sha256" : "0305e3ebf6f4502790d804cff5989a6a928f466af6e36bd808ad9ed24e51fee7"
        },
        "dob" : {
                "date" : "1988-10-17T03:45:04Z",
                "age" : 29
        },
        "registered" : {
                "date" : "2011-09-29T20:54:32Z",
                "age" : 6
        },
        "phone" : "273-427-0510",
        "cell" : "309-911-7770",
        "id" : {
                "name" : "",
                "value" : null
        },
        "picture" : {
                "large" : "https://randomuser.me/api/portraits/men/9.jpg",
                "medium" : "https://randomuser.me/api/portraits/med/men/9.jpg",
                "thumbnail" : "https://randomuser.me/api/portraits/thumb/men/9.jpg"
        },
        "nat" : "CA"
}
```

### Agrregate function takes an array to create series of stages(pipeline) through which the data has to pass and filter out.

### Just like find method, aggregate function also returns a pointer.

<br />

> ## Syntax :-

```js
db.persons.aggregate([{ $match: { gender: "female" } }]).pretty();
```

```js
$match => works same as find method (Filtering data).
```

<br />

> ## $group operator :-

- ### Group operator accumlates(merge) the data of similar type.
- ### It is used along with aggregation operator such as $sum, $max, $min, $push etc. (Reach out to official docx for more info)
- ### Data is passed from one stage to other

```js
db.persons.aggregate([
  { $match: { gender: "female" } },
  { $group: { _id: { state: "$location.state" }, totalPersons: { $sum: 1 } } },
]);
```

<br />

> ## $sort operator :-

```js
db.persons
  .aggregate([
    { $match: { gender: "female" } },
    {
      $group: { _id: { state: "$location.state" }, totalPersons: { $sum: 1 } },
    },
    { $sort: { totalPersons: -1 } },
  ])
  .pretty();
```

<br />

> ## $project :-

- ### Project operator is used to include or exclude the fields.
- ### Project is also used to transform the fields or form a new field in a document.

```js
db.persons
  .aggregate([
    {
      $project: {
        _id: 0,
        gender: 1,
        fullName: { $concat: ["$name.first", " ", "$name.last"] },
      },
    },
  ])
  .pretty();
```

- ### Drilling deep in query (Just for fun)
- ### Retrieving fullName with first letter of both firstname and lastname capital.

```js
db.persons.aggregate([
        $project: {
                _id:0,
                gender: 1,
                fullName:{ $concat: [
                        { $toUpper: { $substrCP: ["$name.first",0,1] } },
                        { $substrCP: ["$name.first",1,
                        { $subtract: [{ $strLenCP: "$name.first" },1] }] },
                        " ",
                        { $toUpper: { $substrCP: ["$name.last",0,1] } },
                        { $substrCP: ["$name.last",1,
                        { $subtract: [{ $strLenCP: "$name.last" },1] }] },
                ] }
        }
]).pretty()
```
