// const sum = function (a, b) {
//   return a + b;
// }

// const subtract = function (a, b) {
//   return a - b;
// }

// const multiply = function (a, b) {
//   return a * b;
// }

// const divide = function (a, b) {
//   return a / b;
// }

// const log = function (value) {
//   console.log(value);
// }

//Arrow functions

const sum = (a, b) => a + b;

const subtract = (a, b) => a - b;

const multiply = (a, b) => a * b;

const divide = (a, b)  => a / b;

//((2 + 4) * (5 + 2) - 2) / 5

let result = divide ((subtract((multiply (sum (2, 4), sum (5, 2))), 2)), 5);

const log = value  => console.log(value);

log(result);
