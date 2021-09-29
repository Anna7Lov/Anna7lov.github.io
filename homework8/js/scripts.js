"use strict";

function pow(a, b) {
    let result = a;
    for (let i = 1; i < b; i++) {
        result *= a;
    }
    return result;
}

function createUser(firstName = null, lastName = null, age = null) {
    const object = {
        firstName,
        lastName,
        age,
    };
    return object;
}

function lessOrMoreThan100(number, numberLessThan100, numberMoreThan100) {
    if (number < 100) {
        numberLessThan100();
    } else if (number > 100) {
        numberMoreThan100();
    }
}