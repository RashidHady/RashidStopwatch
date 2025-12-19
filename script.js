let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let timer = null;

function startTimer() {
    if (timer !== null) return;

    timer = setInterval(function () {
        milliseconds++;

        if (milliseconds === 100) {
            milliseconds = 0;
            seconds++;
        }

        if (seconds === 60) {
            seconds = 0;
            minutes++;
        }

        updateDisplay();
    }, 10);
}

function stopTimer() {
    if (timer !== null) {
        clearInterval(timer);
        timer = null;
    }
}

function resetTimer() {
    stopTimer();
    minutes = 0;
    seconds = 0;
    milliseconds = 0;
    updateDisplay();
}

function updateDisplay() {
    const minutesEl = document.getElementById("minutes");
    const secondsEl = document.getElementById("seconds");
    const millisecondsEl = document.getElementById("milliseconds");

    if (!minutesEl || !secondsEl || !millisecondsEl) {
        console.error("Stopwatch: missing DOM elements:", { minutesEl, secondsEl, millisecondsEl });
        return;
    }

    minutesEl.textContent = minutes < 10 ? "0" + minutes : String(minutes);
    secondsEl.textContent = seconds < 10 ? "0" + seconds : String(seconds);
    millisecondsEl.textContent = milliseconds < 10 ? "0" + milliseconds : String(milliseconds);
}
