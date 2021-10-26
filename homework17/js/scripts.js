"use strict";

const elem1 = document.getElementById('container');

const elem2 = document.querySelector('#container');

const elems1 = document.querySelectorAll('li.second');

const elem3 = document.querySelector('ol li.third');

const elem4 = document.querySelector('.header');
elem4.textContent = 'Hello';

const elem5 = document.querySelector('.footer');
elem5.classList.add('main');
elem5.classList.remove('main');

const elem6 = document.createElement('li');
elem6.textContent = 'four';

const elem7 = document.querySelector('ul');
elem7.append(elem6);

const elems2 = document.querySelectorAll('ol li');
for (let elem of elems2) {
    elem.style.backgroundColor = 'green';
}

const elem8 = document.querySelector('div.footer');
elem8.remove();