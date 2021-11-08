"use strict";

function fibonacci(ordinalNumber) {
    let t1 = 1;
    let t2 = 1;
    let nextTerm;
    if (ordinalNumber === 1 || ordinalNumber === 2) {
        return 1;
    } else {
        for (let i = 3; i <= ordinalNumber; i++) {
            nextTerm = t1 + t2;
            t1 = t2;
            t2 = nextTerm;
        }
        return nextTerm;
    }
}

function fibonacciRecursive(ordinalNumber) {
    return ordinalNumber <= 1 ? ordinalNumber : fibonacciRecursive(ordinalNumber - 1) + fibonacciRecursive(ordinalNumber - 2);
}

function factorial(number) {
    let result = 1;
    for (let i = 1; i <= number; i++) {
        result *= i;
    }
    return result;
}

function factorialRecursive(number) {
    if (!number) return 1;
    return number * factorialRecursive(number - 1);
}