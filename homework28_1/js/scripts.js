"use strict";

fetch('/unstable?maxRandom=20&prob=50')
    .then((response) => {
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        return response.text();
    })
    .then((value) => {
        for (let i = 0; i < +value; i++) {
            console.log('Hello World');
        }
    })
    .catch((err) => {
        console.error(err);
    });


async function getRandomGreeting() {
    try {
        const response = await fetch('/unstable?maxRandom=20&prob=50');
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        const value = await response.text();

        for (let i = 0; i < +value; i++) {
            console.log('Hello World');
        }
    } catch (err) {
        console.error(err);
    }
}
getRandomGreeting();



const user = {
    firstName: 'Vasya',
    lastName: 'Ivanov',
};
let id;

userFetch('https://async-demo.herokuapp.com/objects/?prob=20', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(user)
})
    .then((response) => {
        return response.json();
    })

    .then((response) => {
        ({ id } = response);
        return userFetch(`https://async-demo.herokuapp.com/objects/${id}/?prob=20`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({ age: 33 })
        });
    })

    .then((response) => {
        return response.json();
    })

    .then(() => {
        return userFetch(`https://async-demo.herokuapp.com/objects/${id}/?prob=20`, {
            method: 'DELETE'            
        })
    })
   
    .then(() => {
        console.log(`User with id ${id} was deleted`);
    })

    .catch((err) => {
        console.log(err.message);
    });

function userFetch(...args) {
    return fetch(...args)
        .then(response => {
            if (!response.ok) {
                return response.text()
                    .then((errMessage) => {
                        throw new Error(errMessage);
                    });
            }
            return response;
        });
}


const user = {
    firstName: 'Vasya',
    lastName: 'Ivanov',
};

async function sendRequest() {
    try {
        const response = await userFetch('https://async-demo.herokuapp.com/objects/?prob=20', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(user)
        })

        const result = await response.json();

        const { id } = await result;

        const changeResponse = await userFetch(`https://async-demo.herokuapp.com/objects/${id}/?prob=20`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({ age: 33 })
        });

        const result2 = await changeResponse.json();

        const deleteResponse = await userFetch(`https://async-demo.herokuapp.com/objects/${id}/?prob=20`, {
            method: 'DELETE'
        })

        const deleted = await console.log(`User with id ${id} was deleted`);

    } catch (err) {
        console.log(err);
    }
}

function userFetch(...args) {
    return fetch(...args)
        .then(response => {
            if (!response.ok) {
                return response.text()
                    .then((errMessage) => {
                        throw new Error(errMessage);
                    });
            }
            return response;
        });
}
sendRequest();


  
Promise.all([
    fetch('https://async-demo.herokuapp.com/objects/?prob=5', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify({ firstName: 'Roman', lastName: 'Romanov' })
    }).then((response) => { if (!response.ok) {
        throw new Error(response.statusText);
    } return response.json()}),
    fetch('https://async-demo.herokuapp.com/objects/?prob=5', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify({ firstName: 'Irina', lastName: 'Tarasova' })
    }).then((response) => { if (!response.ok) {
        throw new Error(response.statusText);
    } return response.json()}),
    fetch('https://async-demo.herokuapp.com/objects/?prob=5', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify({ firstName: 'Vladislav', lastName: 'Volkov' })
    }).then((response) => { if (!response.ok) {
        throw new Error(response.statusText);
    } return response.json()})
]).then(() => { return Promise.all([
    fetch('/unstable?maxRandom=100&prob=5').then((response) => { if (!response.ok) {
        throw new Error(response.statusText);
    } return response.text()}).then((value) => +value),
    fetch('/unstable?maxRandom=100&prob=5').then((response) => { if (!response.ok) {
        throw new Error(response.statusText);
    } return response.text()}).then((value) => +value),
    fetch('/unstable?maxRandom=100&prob=5').then((response) => { if (!response.ok) {
        throw new Error(response.statusText);
    } return response.text()}).then((value) => +value),
])}).then((values) => {
    return Promise.all([
        fetch(`https://async-demo.herokuapp.com/objects/${0}/?prob=5`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({age: values[0]})
        }).then((response) => { if (!response.ok) {
            throw new Error(response.statusText);
        } return response.json()}),
        fetch(`https://async-demo.herokuapp.com/objects/${1}/?prob=5`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({age: values[1]})
        }).then((response) => { if (!response.ok) {
            throw new Error(response.statusText);
        } return response.json()}),
        fetch(`https://async-demo.herokuapp.com/objects/${2}/?prob=5`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({age: values[2]})
        }).then((response) => { if (!response.ok) {
            throw new Error(response.statusText);
        } return response.json()})
    ])
}).then(() => { return fetch('/unstable?maxRandom=2&prob=5').then((response) => { if (!response.ok) {
        throw new Error(response.statusText);
    } return response.text()}).then((value) => +value)    
}).then((value) => {  
    if (value === 0) {
        return Promise.all([
            fetch(`https://async-demo.herokuapp.com/objects/${1}/?prob=5`, {
                method: 'DELETE'              
            }),
            fetch(`https://async-demo.herokuapp.com/objects/${2}/?prob=5`, {
                method: 'DELETE'              
            })          
        ])        
    } else if (value === 1) {
        return Promise.all([
            fetch(`https://async-demo.herokuapp.com/objects/${0}/?prob=5`, {
                method: 'DELETE'              
            }),
            fetch(`https://async-demo.herokuapp.com/objects/${2}/?prob=5`, {
                method: 'DELETE'              
            })          
        ])  
    } else {
        return Promise.all([
            fetch(`https://async-demo.herokuapp.com/objects/${0}/?prob=5`, {
                method: 'DELETE'              
            }),
            fetch(`https://async-demo.herokuapp.com/objects/${1}/?prob=5`, {
                method: 'DELETE'              
            })          
        ])  
}
}).catch((err) => {
    console.error(err);
});


async function randomUserRemove() {
    try {
        const values1 = await Promise.all([
    fetch('https://async-demo.herokuapp.com/objects/?prob=5', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify({ firstName: 'Roman', lastName: 'Romanov' })
    }).then((response) => { if (!response.ok) {
        throw new Error(response.statusText);
    } return response.json()}),
    fetch('https://async-demo.herokuapp.com/objects/?prob=5', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify({ firstName: 'Irina', lastName: 'Tarasova' })
    }).then((response) => { if (!response.ok) {
        throw new Error(response.statusText);
    } return response.json()}),
    fetch('https://async-demo.herokuapp.com/objects/?prob=5', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify({ firstName: 'Vladislav', lastName: 'Volkov' })
    }).then((response) => { if (!response.ok) {
        throw new Error(response.statusText);
    } return response.json()})
]);

const values2 = await Promise.all([
    fetch('/unstable?maxRandom=100&prob=5').then((response) => { if (!response.ok) {
        throw new Error(response.statusText);
    } return response.text()}).then((value) => +value),
    fetch('/unstable?maxRandom=100&prob=5').then((response) => { if (!response.ok) {
        throw new Error(response.statusText);
    } return response.text()}).then((value) => +value),
    fetch('/unstable?maxRandom=100&prob=5').then((response) => { if (!response.ok) {
        throw new Error(response.statusText);
    } return response.text()}).then((value) => +value),
]);

const values3 = await Promise.all([
        fetch(`https://async-demo.herokuapp.com/objects/${0}/?prob=5`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({age: values2[0]})
        }).then((response) => { if (!response.ok) {
            throw new Error(response.statusText);
        } return response.json()}),
        fetch(`https://async-demo.herokuapp.com/objects/${1}/?prob=5`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({age: values2[1]})
        }).then((response) => { if (!response.ok) {
            throw new Error(response.statusText);
        } return response.json()}),
        fetch(`https://async-demo.herokuapp.com/objects/${2}/?prob=5`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({age: values2[2]})
        }).then((response) => { if (!response.ok) {
            throw new Error(response.statusText);
        } return response.json()})
    ]) 

const value = await fetch('/unstable?maxRandom=2&prob=5').then((response) => { if (!response.ok) {
        throw new Error(response.statusText);
    } return response.text()}).then((value) => +value); 
    if (value === 0) {
        const values4 = await Promise.all([
            fetch(`https://async-demo.herokuapp.com/objects/${1}/?prob=5`, {
                method: 'DELETE'               
            }),
            fetch(`https://async-demo.herokuapp.com/objects/${2}/?prob=5`, {
                method: 'DELETE'               
            })           
        ])        
    } else if (value === 1) {
        const values5 = await Promise.all([
            fetch(`https://async-demo.herokuapp.com/objects/${0}/?prob=5`, {
                method: 'DELETE'               
            }),
            fetch(`https://async-demo.herokuapp.com/objects/${2}/?prob=5`, {
                method: 'DELETE'               
            })           
        ])  
    } else {
        const values6 = await Promise.all([
            fetch(`https://async-demo.herokuapp.com/objects/${0}/?prob=5`, {
                method: 'DELETE'               
            }),
            fetch(`https://async-demo.herokuapp.com/objects/${1}/?prob=5`, {
                method: 'DELETE'               
            })           
        ]);  
}
} catch(err) {
    console.error(err);
    }
}
randomUserRemove();