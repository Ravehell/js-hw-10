// const richProducts = products.filter(product => product.price >= 10000)
// console.log(richProducts)



// const scores = [45, 82, 67, 91, 38, 74, 100, 59];
// const passedScores = scores.filter(score => score >= 70)


// const numbers = [4, 15, 22, 7, 30, 11, 18, 9];
// const numberScores = numbers.filter(result => result > 10 && result % 2 === 0)



// const users = [
//     { name: "Олег", age: 17 },
//     { name: "Марія", age: 22 },
//     { name: "Іван", age: 16 },
//     { name: "Анна", age: 19 },
//     { name: "Максим", age: 30 },
// ];


// const ageUser = users.filter(user => user.age >= 18)


// const prices = [120, 350, 80, 500, 240];
// const result = prices.map(price => price * 0.8)


// const numbers = [5, 12, 8, 21, 16, 3, 30];
// const result = numbers.filter(number => number > 10).map(number => number * 2)

// const numbers = [4, 9, 12, 15, 20];
// const result = numbers.filter(number => number > 10).map(number => number * 2)

// const products = [
//     { name: "Laptop", price: 25000 },
//     { name: "Phone", price: 15000 },
//     { name: "Headphones", price: 2000 },
//     { name: "Monitor", price: 8000 },
// ];

// const result = products.filter(product => product.price < 20000).map(product => product.name)


// const users = [
//     { name: "Олег", age: 17 },
//     { name: "Марія", age: 22 },
//     { name: "Іван", age: 16 },
//     { name: "Анна", age: 19 },
//     { name: "Максим", age: 30 },
// ];

// const getNames = users.filter(user => user.age >= 18).map(user => user.name)


// const transactions = [120, -50, 300, -20, 80, -100];
// const result = transactions.filter(transaction => transaction > 0).map(transaction => transaction + 10)


// const prices = [100, 250, 50, 300];
// const result = prices.reduce((total, price) => total + price, 0)


// const products = [
//     { name: "Ноутбук", price: 25000 },
//     { name: "Телефон", price: 15000 },
//     { name: "Навушники", price: 2000 },
// ];

// const result = products.reduce((total, product) => total + product.price, 0)


// const scores = [80, 65, 90, 75];
// const result = scores.reduce((total, score) => (total + score), 0)
// const average = sum / scores.length



// const numbers = [5, 12, 8, 20, 3, 16];

// const result = numbers.filter(number => number > 10).reduce((total, number) => total + number, 0)


// const users = [
//     { name: "Олег", age: 17, balance: 500 },
//     { name: "Анна", age: 22, balance: 1200 },
//     { name: "Іван", age: 19, balance: 800 },
//     { name: "Марія", age: 16, balance: 300 },
// ];

// const result = users.filter(user => user.age >= 18).reduce((total, user) => total + user.balance, 0)


// const products = [
//     { name: "Ноутбук", price: 25000 },
//     { name: "Телефон", price: 15000 },
//     { name: "Навушники", price: 2000 },
//     { name: "Мишка", price: 800 },
// ];

// const result = products.filter(product => product.price < 20000).map(product => product.price * 0.9).reduce((total, product) => total + product)


// const numbers = [10, 20, 30, 40];

// numbers.forEach(number => console.log(number * 2))
// const result = numbers.map(number => number * 2)


// const numbers = [5, 12, 8, 21, 30, 3, 16];

// const result = numbers.filter(number => number > 10)

// const result = numbers.find(number => number > 10)
// const result = numbers.findIndex(number => number > 10)
// const result = numbers.some(number => number > 10)
// const result = numbers.every(number => number > 10)


// const numbers = [5, 12, 18, 21, 24];

// numbers.includes(18)


// const fruits = ["apple", "banana", "orange", "banana"];

// // fruits.indexOf("banana")
// fruits.lastIndexOf("banana")
// fruits.splice(1, 1)


// const numbers = [10, 20, 30, 40, 50, 60];

// numbers.slice(1, 4)


// const first = [1, 2, 3];
// const second = [4, 5, 6];

// first.concat(second)


// const words = ["Я", "вивчаю", "JavaScript"];

// words.join(" ")


// const fruits = ["apple", "banana"];
// fruits.push("orange")
// fruits.pop()
// fruits.unshift("apple")
// fruits.shift()


// const numbers = [1, 2, 3, 4, 5];
// numbers.reverse()


// const numbers = [40, 5, 100, 12, 3];

// // const result = numbers.toSorted((a, b) => a - b)
// const result = numbers.sort((a, b) => a - b)


// const numbers = [1, 2, 3];

// const result = numbers.flatMap(number => number * 2)


// const numbers = [1, 2, [3, 4], [5, 6]];
// numbers.flat()

// const fruits = ["apple", "banana", "orange"];

// Array.isArray(fruits)


const word = "hello";

Array.from(word)

Array.of(10, 20, 30)





