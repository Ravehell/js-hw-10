import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const input = document.querySelector("#datetime-picker");
const btn = document.querySelector("[data-start]");

const days = document.querySelector("[data-days]");
const hours = document.querySelector("[data-hours]");
const minutes = document.querySelector("[data-minutes]");
const seconds = document.querySelector("[data-seconds]");

let userSelectedDate = null;
let timerId = null;

btn.disabled = true;

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,

    onClose(selectedDates) {
        const selectedDate = selectedDates[0];

        if (!selectedDate || selectedDate.getTime() <= Date.now()) {
            iziToast.error({
                message: "Please choose a date in the future",
            });

            btn.disabled = true;
            userSelectedDate = null;
            return;
        }

        userSelectedDate = selectedDate;
        btn.disabled = false;
    },
};

flatpickr(input, options);

function convertMs(ms) {
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const days = Math.floor(ms / day);
    const hours = Math.floor((ms % day) / hour);
    const minutes = Math.floor((ms % hour) / minute);
    const seconds = Math.floor((ms % minute) / second);

    return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
    return String(value).padStart(2, "0");
}

function updateTimer() {
    const timeDifference = userSelectedDate.getTime() - Date.now();

    if (timeDifference <= 0) {
        clearInterval(timerId);
        timerId = null;

        days.textContent = "00";
        hours.textContent = "00";
        minutes.textContent = "00";
        seconds.textContent = "00";

        input.disabled = false;
        btn.disabled = true;

        return;
    }

    const time = convertMs(timeDifference);

    days.textContent = addLeadingZero(time.days);
    hours.textContent = addLeadingZero(time.hours);
    minutes.textContent = addLeadingZero(time.minutes);
    seconds.textContent = addLeadingZero(time.seconds);
}

btn.addEventListener("click", () => {
    if (!userSelectedDate) {
        return;
    }

    input.disabled = true;
    btn.disabled = true;

    updateTimer();

    if (userSelectedDate.getTime() > Date.now()) {
        timerId = setInterval(updateTimer, 1000);
    }
});