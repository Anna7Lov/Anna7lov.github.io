"use strict";

const ordinalNumber = +prompt('Введите порядковый номер числа', '');
let t1 = 1;
let t2 = 1;
let nextTerm;
if (isNaN(ordinalNumber) || ordinalNumber < 1) {
    alert('Для корректного результата введите число от 1!');
} else if (ordinalNumber === 1 || ordinalNumber === 2) {
    alert(1);
} else {
    for (let i = 3; i <= ordinalNumber; i++) {
        nextTerm = t1 + t2;
        t1 = t2;
        t2 = nextTerm;
    }
    alert(nextTerm);
}


