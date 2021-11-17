'use strict';

let isCountdownEnded = false;
let timerId;
const startButton = document.querySelector(".start-button");
startButton.addEventListener('click', startTimer);
const timerMinutes = document.querySelector('.timer-minutes');
const timerSeconds = document.querySelector('.timer-seconds');

function startTimer() {
    if (!timerMinutes.value && !timerSeconds.value || timerMinutes.value < 0 || timerSeconds.value < 0 || (((+timerMinutes.value * 60) + (+timerSeconds.value)) === 0)) {
        alert('Please enter the correct value before starting the countdown!');
    } else {
        let numberOfSeconds = ((+timerMinutes.value * 60) + (+timerSeconds.value));       
        startCountdown(numberOfSeconds);       
        startButton.disabled = true;
        timerMinutes.disabled = true;
        timerSeconds.disabled = true;       
    }
}

function startCountdown(numberOfSeconds) {
    const startTime = Date.now();
    timerId = setInterval(() => {
        const currentTime = Date.now() - startTime;
        updateChanges(numberOfSeconds, currentTime);
    });
}

function updateChanges(numberOfSeconds, currentTime) {
    const timeChange = Math.floor(currentTime / 1000);
    updateTime(numberOfSeconds - timeChange);
}

function updateTime(numberOfSeconds) {
    const countdownCounter = document.querySelector(".countdown-counter");
    let minutes = Math.floor(numberOfSeconds / 60);
    let remainingSeconds = numberOfSeconds % 60;

    if (remainingSeconds < 10) {
        remainingSeconds = '0' + remainingSeconds;
    }

    if (minutes < 10) {
        minutes = '0' + minutes;
    }

    if (numberOfSeconds > 0) {
        numberOfSeconds = numberOfSeconds - 1;
        countdownCounter.innerHTML = ''; 
        timerMinutes.value = minutes;
        timerSeconds.value = remainingSeconds;        
    } else {
        clearInterval(timerId);
        isCountdownEnded = true;
        countdownCounter.innerHTML = 'Countdown is over!';
        timerMinutes.value = '';
        timerSeconds.value = '';
        startButton.disabled = false;    
        timerMinutes.disabled = false;    
        timerSeconds.disabled = false;         
    }
}
