// const title = document.querySelector("#title")
// const description = document.querySelector(".description")




// const heading = document.querySelector("#heading")
// const username = document.querySelector("#username")
// const message = document.querySelector("#message")

// heading.textContent = "Вітаю!"
// username.value = "Студент"
// message.textContent = "DOM вивчаємо"


// const task = document.querySelector("#tasks")
// const li = document.createElement("li")
// li.textContent = "Вивчити DOM"
// task.append(li)

// const li2 = document.createElement("li")
// li2.textContent = "Вивчити CSS"
// task.append(li2)


// const countBtn = document.querySelector("#countButton")
// const count = document.querySelector("#count")

// let counter = 0

// countBtn.addEventListener("click", () => {
//     counter++
//     count.textContent = `Кількість натискань: ${counter}`
// })

// const greetingForm = document.querySelector("#greetingForm")
// const input = document.querySelector("#nameInput")
// const greeting = document.querySelector("#greeting")

// greetingForm.addEventListener("submit", (event) => {
//     event.preventDefault()
//     greeting.textContent = `Привіт, ${input.value}!`
// })

// const title = document.querySelector("#title")
// const btn = document.querySelector("#addBtn")
// const task = document.querySelector("#taskList")
// const counterText = document.querySelector("#counter")

// let counter = 1

// btn.addEventListener("click", () => {
//     const li = document.createElement("li")
//     li.textContent = `Вивчити DOM`
//     task.append(li)
//     counter++
//     counterText.textContent = `Кількість завдань: ${counter}`
// })



// const input = document.querySelector("#searchInput")
// const product = document.querySelectorAll(".product")

// input.addEventListener("input", () => {
//     const searchText = input.value.toLowerCase()
//     product.forEach((item) => {
//         const isMatch = item.textContent.toLowerCase().includes(searchText)

//         item.style.display = isMatch ? "block" : "none"
//     })
// })


const form = document.querySelector("#shoppingForm")
const list = document.querySelector("#shoppingList")
const item = document.querySelector("#itemCount")
const input = document.querySelector("#shoppingInput")

let count = 0

form.addEventListener("submit", (event) => {
    event.preventDefault()

    if (input.value.trim() === "") {
        return
    }

    const element = document.createElement("li")
    element.textContent = input.value
    list.append(element)

    count++
    item.textContent = `Кількість товарів: ${count}`
    input.value = ""

})

