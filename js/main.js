// Countdown Timer
// Task: Create a countdown timer that counts down from a specified number of seconds.
// When the countdown reaches zero, show a message like "Time's up!".

const startBtn = document.querySelector("#start-btn");
const timerDisplay = document.querySelector("#timer-display");

const secondsFromClient = prompt("Enter the number of seconds for the countdown timer: ");

let countdown = null;

function startTimer() {
    clearInterval(countdown);
    let timeLeft = parseInt(secondsFromClient)


    function updateTimer() {
        timerDisplay.textContent = convertSecondsToMinutes(timeLeft);

        if (timeLeft > 0) {
            timeLeft--;
        } else {
            clearInterval(countdown);
            timerDisplay.textContent = "Time's up!";
        }
    }

    countdown = setInterval(updateTimer, 1000)
    updateTimer()
}

function convertSecondsToMinutes(secondsTimeLeft) {
    let minutes = Math.floor(secondsTimeLeft / 60);
    let seconds = secondsTimeLeft % 60;
    return `Time left: ${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

startBtn.addEventListener("click", startTimer)
