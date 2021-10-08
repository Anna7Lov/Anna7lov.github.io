"use strict";

const userStore = {
    q: '123q',
    w: '123w',
    a: '123a',
};

function getLogin() {
    const login = prompt('Введите логин', '');
    if (login === null) {
        alert('Вы отменили ввод логина');
    } else if (login in userStore) {
        checkPassword(login);
    } else {
        const doesWantRegister = confirm('Такого логина не существует. Вы хотите зарегистрироваться с указанным логином?');
        if (doesWantRegister) {
            newUserRegistration(login);
        } else {
            alert('Вы отменили регистрацию');
        }
    }
    return login;
}
getLogin();

function newUserRegistration(login) {
    const password = prompt('Введите пароль', '');
    if (password !== null) {
        userStore[login] = password;
        const doesWantLogin = confirm('Хотите войти на сайт?');
        if (doesWantLogin) {
            getLogin();
        } else {
            alert('Вы отказались');
        }
    } else {
        alert('Вы отказались');
    }
}

function checkPassword(login) {
    let isPasswordValid = false;
    let shouldRepeat = true;
    while (shouldRepeat) {
        const password = prompt('Введите пароль', '');
        for (let key in userStore) {
            if (key === login && password === userStore[key]) {
                isPasswordValid = true;
                alert(`Привет, ${login}!`);
            }
        }
        if (password === null) {
            alert('Вы отменили ввод пароля');
            break;
        }
        if (isPasswordValid) {
            break;
        }
        shouldRepeat = confirm('Вы ввели неправильный пароль. Хотите ввести еще раз?');
        if (!shouldRepeat) {
            alert('Вы отказались от повторного ввода пароля');
        }
    }
}
console.log(userStore);