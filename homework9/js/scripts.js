"use strict";

function guessNumber() {
    const randomNumber = Math.floor((Math.random() * 100) + 1);
    let isNumberGuessed = false;
    while (!isNumberGuessed) {
        const number = prompt('Введите число от 1 до 100', '');
        isNumberGuessed = +number === randomNumber;
        if (isNumberGuessed || number === null) {
            break;
        } else if (isNaN(+number) || +number < 1 || +number > 100) {
            alert('Вы ввели невалидное число. Вы угадываете число от 1 до 100');
        } else if (+number > randomNumber) {
            alert('Много!');
        } else {
            alert('Мало!');
        }
    }
    if (isNumberGuessed) {
        const doesWantNewGame = confirm('Вы угадали! Поздравляем! Хотите сыграть еще?');
        if (doesWantNewGame) {
            guessNumber();
        }
    }
}
guessNumber();