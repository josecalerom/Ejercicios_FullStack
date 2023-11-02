const person = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
};

// Initial Error:
// const { id, name, surname, old } = person;
// console.log(id, name, surname, old);

//Solution:
//We have to reasign the name of the destructuring properties to link them to
// the correct properties inside object -person- 
//in order to print them without errors

const { id, firstName: name, lastName: surname, age: old } = person;
console.log(id, name, surname, old);