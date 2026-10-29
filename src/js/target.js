// const menu = document.querySelector("#menu")

const { default: iziToast } = require("izitoast");

// menu.addEventListener("click", (event) => {
//     console.log(event.target)

//     if (event.target.tagName === "BUTTON") {
//         event.target.textContent
//     }
// })


// menu.addEventListener("click", (event) => {
//     const list = menu.querySelectorAll("li")
//     if (event.target.tagName === "LI") {

//         list.forEach((item) => {
//             item.classList.remove("selected")

//         })
//         event.target.classList.add("selected")
//     }
// })


// import iziToast from "izitoast";
// import "izitoast/dist/css/iziToast.min.css";

// const btn = document.querySelector("#add-btn")
// btn.addEventListener("click", (event) => {
//     iziToast.success({
//         title: "успіх",
//         message: "Товар додано до кошика"
//     })
// })

// flatpickr("#birthday", {
//     dateFormat: "d-m-Y H:i",
//     enableTime: false
// });


// const username = "";

// if (username === "") {
//     iziToast.error({
//         message: "Введіть ім'я!"
//     })
// } else {
//     iziToast.success({
//         message: "Успіх"
//     })
// }

const button = document.querySelector("#delete-btn");

button.addEventListener("click", (event) => {
    iziToast.error({
        message: "Не вдалося видалити файл!"
    })
})