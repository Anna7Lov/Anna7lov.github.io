"use strict";

function getRandomGreeting() {

    const xhr = new XMLHttpRequest();

    xhr.open('GET', '/unstable?maxRandom=20&prob=50');

    xhr.send();

    xhr.addEventListener('load', () => {
        if (xhr.status != 200) {
            console.error(xhr.response);
        } else {
            for (let i = 0; i < +xhr.response; i++) {
                console.log('Hello World');
            }
        }
    });
}


function sendRequest(
    method,
    url,
    { body, headers = {} } = {},
    callback
) {

    const xhr = new XMLHttpRequest();

    xhr.open(method, url);

    Object.keys(headers).forEach((key) => {
        xhr.setRequestHeader(key, headers[key]);
    });

    xhr.send(body);

    xhr.addEventListener('load', () => {
        if (xhr.status != 200 && xhr.status != 201 && xhr.status != 204) {
            callback(xhr.response);
        } else {
            callback(null, xhr.response);
        }
    });
}

const user = {
    firstName: 'Vasya',
    lastName: 'Ivanov',
}

sendRequest('POST', 'https://async-demo.herokuapp.com/objects/?prob=20', {
    body: JSON.stringify(user),
    headers: {
        'Content-type': 'application/json; charset=utf-8',
    }
}, (err, response) => {
    if (err) {
        console.error(err);
        return;
    }    

    let received;
    try {
        received = JSON.parse(response);
    } catch (err) {
        console.error(err);
    }
    const { id } = received; 

    const extension = { age: 33 };

    sendRequest('PATCH', `https://async-demo.herokuapp.com/objects/${id}/?prob=20`, {
        body: JSON.stringify(extension),
        headers: {
            'Content-type': 'application/json; charset=utf-8',
        }
    }, (err) => {
        if (err) {
            console.error(err);
            return;
        }        

        sendRequest('DELETE', `https://async-demo.herokuapp.com/objects/${id}/?prob=20`, {},
            (err) => {
                if (err) {
                    console.error(err);
                } else {
                    console.log(`User with id ${id} was deleted`);
                }
            }
        );
    }
    );
}
);


const xhr = new XMLHttpRequest();

xhr.open('POST', 'https://async-demo.herokuapp.com/objects/?prob=5');

xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');

const body = JSON.stringify({
    firstName: 'Roman',
    lastName: 'Petrov',
});

xhr.send(body);

xhr.addEventListener('load', () => {
    if (xhr.status != 201) {
        console.error(xhr.response);
        return;
    }

    try {
        const received = JSON.parse(xhr.response);
        console.log(received);
    } catch (err) {
        console.error(err);
    }

});


const xhr2 = new XMLHttpRequest();

xhr2.open('POST', 'https://async-demo.herokuapp.com/objects/?prob=5');

xhr2.setRequestHeader('Content-type', 'application/json; charset=utf-8');

const body2 = JSON.stringify({
    firstName: 'Irina',
    lastName: 'Tarasova',
});

xhr2.send(body2);

xhr2.addEventListener('load', () => {
    if (xhr2.status != 201) {
        console.error(xhr2.response);
        return;
    }

    try {
        const received2 = JSON.parse(xhr2.response);
        console.log(received2);
    } catch (err) {
        console.error(err);
    }

});


const xhr3 = new XMLHttpRequest();

xhr3.open('POST', 'https://async-demo.herokuapp.com/objects/?prob=5');

xhr3.setRequestHeader('Content-type', 'application/json; charset=utf-8');

const body3 = JSON.stringify({
    firstName: 'Vladislav',
    lastName: 'Volkov',
});

xhr3.send(body3);

xhr3.addEventListener('load', () => {
    if (xhr3.status != 201) {
        console.error(xhr3.response);
        return;
    }

    try {
        const received3 = JSON.parse(xhr3.response);
        console.log(received3);
    } catch (err) {
        console.error(err);
    }

});


const xhr4 = new XMLHttpRequest();

xhr4.open('GET', '/stable?maxRandom=100&prob=5');

xhr4.send();

xhr4.addEventListener('load', () => {
    if (xhr4.status != 200) {
        console.error(xhr4.response);
    } else {
        console.log(xhr4.response);
    }
});


const xhr5 = new XMLHttpRequest();

xhr5.open('GET', '/stable?maxRandom=100&prob=5');

xhr5.send();

xhr5.addEventListener('load', () => {
    if (xhr5.status != 200) {
        console.error(xhr5.response);
    } else {
        console.log(xhr5.response);
    }
});


const xhr6 = new XMLHttpRequest();

xhr6.open('GET', '/stable?maxRandom=100&prob=5');

xhr6.send();

xhr6.addEventListener('load', () => {
    if (xhr6.status != 200) {
        console.error(xhr6.response);
    } else {
        console.log(xhr6.response);
    }


    const xhr7 = new XMLHttpRequest();

    xhr7.open('PATCH', `https://async-demo.herokuapp.com/objects/${0}/?prob=5`);

    xhr7.setRequestHeader('Content-type', 'application/json; charset=utf-8');

    const body4 = JSON.stringify({
        age: +xhr4.response,
    });

    xhr7.send(body4);

    xhr7.addEventListener('load', () => {
        if (xhr7.status != 200) {
            console.error(xhr7.response);
            return;
        }

        try {
            const received4 = JSON.parse(xhr7.response);
            console.log(received4);
        } catch (err) {
            console.error(err);
        }
    });


    const xhr8 = new XMLHttpRequest();

    xhr8.open('PATCH', `https://async-demo.herokuapp.com/objects/${1}/?prob=5`);

    xhr8.setRequestHeader('Content-type', 'application/json; charset=utf-8');

    const body5 = JSON.stringify({
        age: +xhr5.response,
    });

    xhr8.send(body5);

    xhr8.addEventListener('load', () => {
        if (xhr8.status != 200) {
            console.error(xhr8.response);
            return;
        }

        try {
            const received5 = JSON.parse(xhr8.response);
            console.log(received5);
        } catch (err) {
            console.error(err);
        }
    });


    const xhr9 = new XMLHttpRequest();

    xhr9.open('PATCH', `https://async-demo.herokuapp.com/objects/${2}/?prob=5`);

    xhr9.setRequestHeader('Content-type', 'application/json; charset=utf-8');

    const body6 = JSON.stringify({
        age: +xhr6.response,
    });

    xhr9.send(body6);

    xhr9.addEventListener('load', () => {
        if (xhr9.status != 200) {
            console.error(xhr9.response);
            return;
        }

        try {
            const received6 = JSON.parse(xhr9.response);
            console.log(received6);
        } catch (err) {
            console.error(err);
        }


        const xhr10 = new XMLHttpRequest();

        xhr10.open('GET', '/stable?maxRandom=2&prob=5');

        xhr10.send();

        xhr10.addEventListener('load', () => {
            if (xhr4.status != 200) {
                console.error(xhr10.response);
            } else {
                console.log(xhr10.response);
            }


            const xhr11 = new XMLHttpRequest();

            let i = xhr10.response;            

            if (i === '0') {
                xhr11.open('DELETE', `https://async-demo.herokuapp.com/objects/${1}/?prob=5`);
                xhr11.setRequestHeader('Content-type', 'application/json; charset=utf-8');

                xhr11.send();

                xhr11.addEventListener('load', () => {
                    if (xhr11.status != 204) {
                        console.error(xhr11.response);
                        return;
                    } else {
                        console.log("Removal was successful");
                    }


                    const xhr12 = new XMLHttpRequest();
                    xhr12.open('DELETE', `https://async-demo.herokuapp.com/objects/${2}/?prob=5`);
                    xhr12.setRequestHeader('Content-type', 'application/json; charset=utf-8');

                    xhr12.send();

                    xhr12.addEventListener('load', () => {
                        if (xhr12.status != 204) {
                            console.error(xhr12.response);
                            return;
                        } else {
                            console.log("Removal was successful");
                        }

                    });
                });
            } else if (i === '1') {
                xhr11.open('DELETE', `https://async-demo.herokuapp.com/objects/${0}/?prob=5`);
                xhr11.setRequestHeader('Content-type', 'application/json; charset=utf-8');

                xhr11.send();

                xhr11.addEventListener('load', () => {
                    if (xhr11.status != 204) {
                        console.error(xhr11.response);
                        return;
                    } else {
                        console.log("Removal was successful");
                    }

                    const xhr12 = new XMLHttpRequest();
                    xhr12.open('DELETE', `https://async-demo.herokuapp.com/objects/${2}/?prob=5`);
                    xhr12.setRequestHeader('Content-type', 'application/json; charset=utf-8');

                    xhr12.send();

                    xhr12.addEventListener('load', () => {
                        if (xhr12.status != 204) {
                            console.error(xhr12.response);
                            return;
                        } else {
                            console.log("Removal was successful");
                        }

                    });

                });
            } else {
                xhr11.open('DELETE', `https://async-demo.herokuapp.com/objects/${0}/?prob=5`);
                xhr11.setRequestHeader('Content-type', 'application/json; charset=utf-8');

                xhr11.send();

                xhr11.addEventListener('load', () => {
                    if (xhr11.status != 204) {
                        console.error(xhr11.response);
                        return;
                    } else {
                        console.log("Removal was successful");
                    }

                    const xhr12 = new XMLHttpRequest();
                    xhr12.open('DELETE', `https://async-demo.herokuapp.com/objects/${1}/?prob=5`);
                    xhr12.setRequestHeader('Content-type', 'application/json; charset=utf-8');

                    xhr12.send();

                    xhr12.addEventListener('load', () => {
                        if (xhr12.status != 204) {
                            console.error(xhr12.response);
                            return;
                        } else {
                            console.log("Removal was successful");
                        }
                    });
                });
            }
        });
    });
});
