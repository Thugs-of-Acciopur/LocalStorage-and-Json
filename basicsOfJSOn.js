let jsobj = {
    "name": "John",
    age: 30,
    city: ['New York', "Paris", "London"],
    isStudent: true,
    address: {
        street: "123 Main St",
        zip: "12345"
    }
}

let jsonObj = JSON.stringify(jsobj)

console.log(jsonObj, typeof jsonObj)


// convert json string back to js object

let jsobj1 = JSON.parse(jsonObj)

console.log(jsobj1, typeof jsobj1)





// {
//     "name": "John",
//     "age": 30,
//     "city": ["New York", "Paris", "London"],
//     "isStudent": true,
//     "address": {
//         street: "123 Main St",
//         zip: "12345"
//     },
// }