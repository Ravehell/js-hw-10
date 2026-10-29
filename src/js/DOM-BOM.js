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


// const form = document.querySelector("#shoppingForm")
// const list = document.querySelector("#shoppingList")
// const item = document.querySelector("#itemCount")
// const input = document.querySelector("#shoppingInput")

// let count = 0

// form.addEventListener("submit", (event) => {
//     event.preventDefault()

//     if (input.value.trim() === "") {
//         return
//     }

//     const element = document.createElement("li")
//     const deleteBtn = document.createElement("button")
//     deleteBtn.textContent = "Видалити"
//     element.textContent = input.value
//     element.append(deleteBtn)
//     list.append(element)


//     deleteBtn.addEventListener("click", (event) => {
//         element.remove()
//         count--
//         item.textContent = `Кількість товарів: ${count}`
//     })

//     count++
//     item.textContent = `Кількість товарів: ${count}`
//     input.value = ""

// })


// const form = document.querySelector("#taskForm")
// const input = document.querySelector("#taskInput")
// const list = document.querySelector("#taskList")
// const task = document.querySelector("#taskCount")

// function updateCount() {
//     const items = Array.from(list.querySelectorAll("li"))

//     const unfinished = items.filter((item) => {
//         return !item.classList.contains("done")

//     })
//     task.textContent = `Невиконаних справ: ${unfinished.length}`
// }

// form.addEventListener("submit", (event) => {
//     event.preventDefault()

//     if (input.value.trim() === "") {
//         return
//     }

//     const li = document.createElement("li")

//     li.addEventListener("click", () => {
//         li.classList.toggle("done")
//         updateCount()
//     })

//     li.textContent = input.value
//     const btn = document.createElement("button")
//     btn.textContent = "Видалити"

//     btn.addEventListener("click", (event) => {
//         event.stopPropagation()
//         li.remove()
//         updateCount()
//     })

//     li.append(btn)
//     list.append(li)
//     input.value = ""
//     updateCount()


// })


// const deleteCompleteBtn = document.querySelector("#deleteCompletedBtn")

// deleteCompleteBtn.addEventListener("click", () => {
//     const completed = list.querySelectorAll(".done")

//     completed.forEach((item) => {
//         item.remove()
//     })

//     updateCount()
// })


// const doneCompleteBtn = document.querySelector("#doneCompleteBtn")


// doneCompleteBtn.addEventListener("click", () => {

//     const items = list.querySelectorAll("li")

//     items.forEach((item) => {
//         item.classList.add("done")
//     })

//     updateCount()
// })



// const categories = document.querySelector("#categories")
// const list = categories.querySelectorAll("li.item")

// console.log(list.length)

// list.forEach((item) => {
//     const h2 = item.querySelector("h2")
//     console.log(h2.textContent)

//     const ul = item.querySelector("ul")
//     const li = item.querySelector("li").length

//     console.log(li)

// })


