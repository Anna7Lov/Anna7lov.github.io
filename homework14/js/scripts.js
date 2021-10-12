"use strict";

function sumNumbers(arr) {
    let sum = 0;
    for (let elem of arr) {
        sum += elem;
    }
    return sum;
}

function sumNumbers(arr) {
    return arr.reduce((result, elem) => result + elem, 0);
}

function mapToUpperCase(arr) {
    const arr2 = [...arr];
    for (let i = 0; i < arr2.length; i++) {
        arr2[i] = arr2[i].toUpperCase();
    }
    return arr2;
}

function mapToUpperCase(arr) {
    const arr2 = arr.map(elem => elem.toUpperCase());
    return arr2;
}