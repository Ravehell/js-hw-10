// const user = {
//     name: "Alex",
//     age: 21,
//     city: "Zhytomyr"
// };

const { use } = require("react");
const { jsx } = require("react/jsx-runtime");


// const json = JSON.stringify(user)
// console.log(json)



// const json = '{"product":"Laptop","price":25000,"available":true}';

// const product = JSON.parse(json)
// console.log(product.product);

// const user = {
//     name: "Alex",
//     age: 21
// };

// const data = localStorage.getItem("user")
// const users = JSON.parse(data)
// console.log(users.name, users.age);

// const data = localStorage.getItem("user")

// if (data === null) {
//     console.log("Користувача не знайдено");
// } else {
//     console.log("Користувач існує");
// }

// export function multiply(a, b) {
//     return a * b;
// }

// import { multiply } from "./helpers.js"
// console.log(multiply(4, 5));


// export default function divide(a, b) {
//     return a / b;
// }

// import division from "./main.js"
// console.log(division(20, 4))


// const json = '{"name":"Alex","age":21,"isStudent":true}';

// const product = JSON.parse(json)
// console.log(product.name, product.age)


// const car = {
//     brand: "Toyota",
//     model: "Corolla",
//     year: 2020
// };

// const carJson = JSON.stringify(car)
// console.log(carJson);


// const user = {
//     name: "Max",
//     age: 25
// };

// const product = JSON.stringify(user)
// localStorage.setItem("user", product)

// const users = localStorage.getItem("user",)
// const data = JSON.parse(users)


export function multiply(a, b) {
    return a * b;
}

export function sum(a, b) {
    return a + b;
}


import { multiply, sum } from "./main.js"
console.log(multiply(5, 4))
console.log(sum(10, 15))





