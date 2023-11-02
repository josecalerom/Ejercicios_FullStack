// function sum(num1, num2, num3) {
//   return num1 + num2 + num3;
// }

// const numbers = [1, 2, 3];
// console.log(sum(numbers[0], numbers[1], numbers[2]));

//Using the Spread operator


function sum(...arr) {
  return arr.reduce((total, numero) => total + numero);
}

const numbers = [1, 2, 3];
console.log(sum(...numbers));