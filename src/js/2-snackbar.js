// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";


const form = document.querySelector(".form")
form.addEventListener("submit", (event) => {
    event.preventDefault()
    const delay = event.currentTarget.elements.delay.value
    const value = event.currentTarget.elements.state.value


    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (value === "fulfilled") {
                resolve(delay)
            } else {
                reject(delay)
            }
        }, delay)
    })

    promise
        .then(delay => iziToast.success({ message: `✅ Fulfilled promise in ${delay}ms` })
        )
        .catch(value => iziToast.error({ message: `❌ Rejected promise in ${value}ms` }))
})

