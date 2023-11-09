const isLogged = true;

function userLogged(isLogged){
    return new Promise((resolve, reject) => {
        if(isLogged){
            resolve(Math.random());
        }else {
            reject("User is not logged");
        }
    })
}

function checkNumber(val){
    return new Promise((resolve, reject) => {
        if(val > 0.5){
            resolve({name: "John", age: 24});
        }else {
            reject(`${val.toFixed(2)} must be bigger than 0.5`);
        }
    })
}



userLogged(isLogged)
    .then(checkNumber)
    .then((obj) => console.log(obj))
    .catch((err) => console.log(err))