"use strict";

function objectDeepCopying(object) {
    let copy;
    if (Array.isArray(object)) {
        copy = [];
        for (let i = 0; i < object.length; i++) {
            if (Array.isArray(object[i])) {
                copy[i] = objectDeepCopying(object[i]);
            } else if (typeof object[i] !== "object") {
                copy[i] = object[i];
            } else {
                for (let key in object) {
                    if (typeof object[key] === "object") {
                        copy[key] = objectDeepCopying(object[key]);
                    }
                }
            }
        }
    } else {
        copy = {};
        for (let key in object) {
            if (typeof object[key] === "object") {
                copy[key] = objectDeepCopying(object[key]);
            } else {
                copy[key] = object[key];
            }
        }
    }
    return copy;
}