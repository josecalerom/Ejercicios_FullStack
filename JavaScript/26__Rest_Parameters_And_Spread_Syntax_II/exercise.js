// function sum(num1, num2, num3, num4, num5) {
//     return num1 + num2 + num3 + num4 + num5;
// }

//Using Rest operator
function sum(...numeros){
    return numeros.reduce((total, numero) => total + numero);
}

console.log(sum(1, 2, 3, 4, 5));