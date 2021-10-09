"use strict";

const fruits = ['Apple', 'Banana', 'Pineapple'];
fruits.push('Orange', 'Grapes');
fruits[1] = 'Peer';
const value1 = fruits.pop();
console.log(value1);
fruits.unshift('Watermelon');