"use strict";

const firstOperand = +prompt('Введите первое число', '10');
const operator = prompt('Введите один оператор из перечня: +, -, *, /, **, OMG', '+');
const secondOperand = +prompt('Введите второе число', '20');
if (isNaN(firstOperand) || isNaN(secondOperand) || operator !== '+' && operator !== '-' && operator !== '*' && operator !== '/' && operator !== '**' && operator !== 'OMG') {
  alert('Ошибка! Вы ввели неподдерживаемый оператор или невалидное число');
} else if (operator === '+') {
  alert(firstOperand + secondOperand);
} else if (operator === '-') {
  alert(firstOperand - secondOperand);
} else if (operator === '*') {
  alert(firstOperand * secondOperand);
} else if (operator === '/') {
  alert(firstOperand / secondOperand);
} else if (operator === '**') {
  alert(firstOperand ** secondOperand);
}
if (operator === 'OMG' && secondOperand >= 1 && firstOperand !== 0 && firstOperand > secondOperand) {
  alert(Math.round(Math.trunc(firstOperand) / Math.trunc(secondOperand)) * Math.trunc(secondOperand));
} else if (operator === 'OMG' && secondOperand >= 1 && firstOperand === 0) {
  alert(Math.trunc(secondOperand));
} else if (operator === 'OMG' && secondOperand >= 1 && firstOperand <= secondOperand) {
  alert(Math.trunc(secondOperand));
} else if (operator === 'OMG' && secondOperand < 1) {
  alert('Ошибка! Вы ввели невалидное число, второе число не может быть меньше 1');
}

