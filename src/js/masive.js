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


// const word = "hello";

// Array.from(word)

// Array.of(10, 20, 30)



// const numbers = [15, 4, 22, 8, 31, 12, 7, 25];

// const result = numbers.filter(number => number > 10).map(number => number * 2).sort((a, b) => a - b)

// const numbers = [7, 14, 3, 22, 9, 18, 5, 26, 11];

// const result = numbers.findIndex(number => number > 10 && number % 3 === 0)



// const numbers = [12, 7, 24, 5, 18, 9, 30];

// const allPositive = numbers.every(number => number > 0)

// const hasLarge = numbers.some(number => number > 20)


// const fruits = ["apple", "banana", "orange", "banana", "kiwi"];

// const result = fruits.slice(0, 3).concat("mango", "peach").join(", ")


// const numbers = [3, 8, 3, 12, 8, 3, 15, 8];

// const hasEight = numbers.includes(8)
// const firstThree = numbers.indexOf(3)
// const lastEight = numbers.lastIndexOf(8)


// const numbers = [10, 20, 30, 40, 50];

// const reverse = numbers.toReversed()
// const sortedDesc = numbers.toSorted((a, b) => b - a)


// const numbers = [1, 2, 3, 4, 5];

// numbers.unshift(0)
// numbers.push(6)
// numbers.shift()
// numbers.pop()


// const numbers = [2, 4, 6, 8, 10, 12];
// numbers.slice(1, 4).splice(1, 1, 99).join("-")


// const values = [1, 2, 3];
// const text = "hello";

// Array.from(text).map((value, index) => value + index).join("")


// const numbers = [5, 12, 8, 21, 4, 17, 30];

// const result = numbers.filter(number => number > 10).join(" | ")



// const numbers = [3, 8, 12, 5, 20, 7, 15, 2];

// const result = numbers.filter(number => number < 15).toSorted((a, b) => b - a).slice(0, 3).reduce((total, number) => total + number, 0)


// const numbers = [4, 9, 12, 7, 18, 3, 25, 10];

// const result = numbers.some(number => number > 20) ? numbers.find(number => number > 15) : undefined

// const numbers = [5, 12, 8, 20, 3, 16, 7, 24];

// const result = numbers.filter(number => number > 10).reverse().join(", ")


// const numbers = [4, 11, 6, 19, 8, 23, 14, 2];

// const arr = numbers.slice(1, 6);

// arr.splice(0, 1, 100);

// const sorted = arr.toSorted((a, b) => a - b);

// const result = sorted.indexOf(100);


// const users = [
//     { name: "Андрій", age: 17, score: 75 },
//     { name: "Олена", age: 22, score: 91 },
//     { name: "Максим", age: 19, score: 64 },
//     { name: "Ірина", age: 25, score: 88 },
//     { name: "Денис", age: 16, score: 95 },
// ];

// const result = users.filter(user => user.age >= 18).toSorted((a, b) => a.score - b.score).map(user => user = `${user.name} : ${user.score}`).join(" | ")
