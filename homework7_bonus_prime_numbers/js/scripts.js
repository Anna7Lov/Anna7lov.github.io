"use strict";

const number = +prompt('Введите число', '');
if (isNaN(number) || number < 3) {
  alert('Для корректного результата введите число от 3!');
} else {
  next:
  for (let i = 2; i < number; i++) {
    for (let m = 2; m < i; m++) {
      if (i % m === 0) continue next;
    }
    console.log(i);
  }
}