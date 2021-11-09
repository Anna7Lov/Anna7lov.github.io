"use strict";

function createRangeFilter(min, max) {
    return function filter(num) {
        return num >= min && num <= max;
    };
}

function createKeyBy(propName) {

    return function keyBy(arr) {

        return arr.reduce((elementsByKey, element) => {
            if (!elementsByKey[element[propName]]) {
                elementsByKey[element[propName]] = [];
            }

            elementsByKey[element[propName]].push(element);

            return elementsByKey;
        }, {});
    };
}

function createCalcPercent(percent) {
    return function calcPercent(value) {
        return value * (percent / 100);
    }
}