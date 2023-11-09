const number = 8;

let ourPromise = new Promise((resolve, reject) => {
    if (number > 10){
        resolve(`${number} > 10: True`);
    }else{
        reject(`${number} > 10: False`);
    }
})

ourPromise
    .then((res) => console.log(res))
    .catch((err) => console.error(err))

console.log(ourPromise);
