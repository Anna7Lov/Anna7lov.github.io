"use strict";

function Cat(name, breed) {
    this.name = name;
    this.breed = breed;
    this.meow = function () {
        alert('Мяу!');
    };
}
const kitten = new Cat('Basik', 'sphynx');
kitten.meow();

function User(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.greet = function () {
        alert(`Привет, ${this.firstName} ${this.lastName}!`);
    };
}
const manager = new User('Ivan', 'Ivanov', 20);
manager.greet();