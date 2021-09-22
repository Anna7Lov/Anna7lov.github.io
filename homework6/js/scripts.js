"use strict";

let message;
const login = prompt('Введите логин', '');
if (login !== 'admin') {
    alert(message = 'Неправильный логин!');
} else {
    let password = prompt('Введите пароль', '');
    if (password === '123zxc') {
        alert(message = 'Рад тебя видеть!');
    } else {
        while (password !== '123zxc' && password !== null) {
            const doesWantEnterPassword = confirm('Вы ошиблись с паролем, хотите ввести еще раз?');
            if (doesWantEnterPassword) {
                password = prompt('Введите пароль', '');
            }
            else {
                break;
            }
        }
    }
    if (password === '123zxc') {
        alert(message = 'Рад тебя видеть!');
    } else {
        alert(message = 'Неправильный пароль, доступ запрещен!');
    }
}









