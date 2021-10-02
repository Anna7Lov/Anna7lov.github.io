"use strict";

function isEmpty(object) {
    for (let key in object) {
        return false;
    }
    return true;
}

function isNumericKey(object) {
    for (let key in object) {
        if (!isNaN(key) && key !== '' && key !== ' ') {
            console.log(object[key]);
        }
    }
}

function doubleSalaries(salaries) {
    let salaries2 = {};
    for (let key in salaries) {
        salaries2[key] = Object.assign({}, salaries[key]);
        for (let i in salaries2[key]) {
            salaries2[key][i] *= 2;            
        }
    }
    return salaries2;
}