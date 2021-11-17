"use strict";

function printNumbers(arr) {
    let index = 0;
    const timerId = setInterval(function () {
        console.log(arr[index++]);
        if (index === arr.length) {
            clearInterval(timerId);
        }
    }, 1000);
}

function printNumbers(arr) {
    let index = 0;
    setTimeout(function run() {
        console.log(arr[index++]);
        if (index < arr.length) {
            setTimeout(run, 1000);
        }
    }, 1000);
}

function debounce(func, timeout) {
    let timerId;

    return (...args) => {
        clearTimeout(timerId);
        timerId = setTimeout(() => func.apply(this, args), timeout);
    };
}

function throttle(func, timeout) {
    let isThrottled = false;
    let savedArgs;
    let savedThis;

    function wrapper() {

        if (isThrottled) {
            savedArgs = arguments;
            savedThis = this;
            return;
        }

        func.apply(this, arguments);

        isThrottled = true;

        setTimeout(function () {
            isThrottled = false;
            if (savedArgs) {
                wrapper.apply(savedThis, savedArgs);
                savedArgs = savedThis = null;
            }
        }, timeout);
    }

    return wrapper;
}