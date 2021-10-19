"use strict";

function capitalize(string) {
    return string
        .split(' ')
        .map((elem) =>
            elem[0].toUpperCase() + elem.slice(1)
        )
        .join(' ');
}

function checkSubstring(string, substring) {
    const newString = string.toLowerCase();
    const newSubstring = substring.toLowerCase();
    return newString.includes(newSubstring);
}