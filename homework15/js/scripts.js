"use strict";

function keyBy(arr, key) {
    const usersByKey = arr.reduce((usersByKey, user) => {
        if (!usersByKey[user[key]]) {
            usersByKey[user[key]] = [];
        }
        usersByKey[user[key]].push(user);
        return usersByKey;
    }, {});
    return usersByKey;
}