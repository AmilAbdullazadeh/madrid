let startTime = null
let timerInterval = null
let endTime = null
let elapsedTime = null
let isPaused = false
const timerDisplay = document.getElementById('timer')

function startTimer() {
  if(!isPaused) {
      startTime = new Date().getTime() - elapsedTime
  }
  timerInterval = setInterval(() => {
      elapsedTime = new Date().getTime() - startTime
      timerDisplay.textContent = timeToString(elapsedTime)
  }, 1000)
  isPaused = false
}

function pauseTimer() {
  clearInterval(timerInterval)
  isPaused = true
}

function resetTimer() {
    clearInterval(timerInterval)
    elapsedTime = 0
    timerDisplay.textContent = '00:00:00'
    isPaused = false
}

function timeToString(time) {
    let date = new Date(time)
    return date.toISOString().substr(11, 8)
}
