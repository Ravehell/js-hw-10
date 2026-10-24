// class Car {
//     constructor(mark, model, year) {
//         this.mark = mark
//         this.model = model
//         this.year = year

const { transformWithEsbuild } = require("vite")

//     }
//     getInfo() {
//         return `${this.mark} ${this.model} ${this.year}`
//     }

//     changeYear(newYear) {
//         this.year = newYear
//     }
// }
// const car1 = new Car("Toyota", "Corolla", 2020);
// const car2 = new Car("BMW", "X5", 2023);

// console.log(car1);
// console.log(car2);


// class BankAccount {
//     constructor(name, balance) {
//         this.name = name
//         this.balance = balance
//     }

//     deposit(amount) {
//         this.balance += amount
//     }

//     getBalance() {
//         return this.balance
//     }
// }

// class BankAccount {
//     constructor(name, balance) {
//         this.name = name
//         this.balance = balance
//     }

//     withdraw(amount) {
//         if (amount <= this.balance) {
//             this.balance -= amount
//         }
//     }

//     getBalance() {
//         return this.balance
//     }
// }


// class User {
//     constructor(name, age) {
//         this.name = name
//         this.age = age
//     }

//     introduce() {
//         return `Привіт, мене звати ${this.name}, мені ${this.age} років.`
//     }

//     // isAdult() {
//     //     if (this.age >= 18) {
//     //         return true
//     //     } else {
//     //         return false
//     //     }
//     // }

//     isAdult() {
//         return this.age >= 18
//     }
// }

// class Product {
//     constructor(name, price, quantity) {
//         this.name = name
//         this.price = price
//         this.quantity = quantity
//     }

//     getTotalPrice() {
//         return this.price * this.quantity
//     }

//     sell(amount) {
//         if (amount <= this.quantity) {
//             this.quantity -= amount
//         }
//     }

//     restock(amount) {
//         this.quantity += amount
//     }
// }

// class Counter {
//     constructor(quantity) {
//         this.quantity = quantity
//     }

//     increment() {
//         this.quantity++
//     }

//     decrement() {
//         this.quantity--
//     }

//     getValue() {
//         return this.quantity
//     }
// }


// class Rectangle {
//     constructor(width, height) {
//         this.width = width
//         this.height = height
//     }

//     getArea() {
//         return this.width * this.height
//     }
//     getPerimeter() {
//         return 2 * (this.width + this.height)
//     }

//     isSquare() {
//         return this.width === this.height
//     }

// }


// class Temperature {
//     constructor(celsius) {
//         this.celsius = celsius
//     }

//     toFahrenheit() {
//         return this.celsius * 9 / 5 + 32
//     }
// }