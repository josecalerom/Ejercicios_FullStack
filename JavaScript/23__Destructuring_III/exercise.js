function isAdult(person) {
  return person.age >= 18;
}

const person = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
};

//Using Destructuring:

function isAdultDestructuring({age}){
  return age >=18;
}

console.log("Original result: " + isAdult(person));
console.log("Destructuring result: " + isAdultDestructuring(person));