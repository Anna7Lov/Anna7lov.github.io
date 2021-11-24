"use strict";

String.prototype.reverse = function () {
    return this.split('').reverse().join('');
}


Array.prototype.sorting = Array.prototype.sort;

Array.prototype.sort = function () {
    return [...this].sorting();
}


NodeList.prototype.map = Array.prototype.map;

NodeList.prototype.reduce = Array.prototype.reduce;

NodeList.prototype.find = Array.prototype.find;