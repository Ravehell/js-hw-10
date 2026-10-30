// const user = {
//     name: "Alex",
//     age: 21,
//     city: "Zhytomyr"
// };

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


export default function divide(a, b) {
    return a / b;
}

import division from "./main.js"
console.log(division(20, 4))