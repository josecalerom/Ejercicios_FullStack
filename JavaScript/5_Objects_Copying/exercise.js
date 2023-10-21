console.log("Changing person2 so person1 is affected:");

const person1 = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
};

const person2 = person1;

// Modify the property `firstName` of the `person2` in "Simon".

person2.firstName = "Simon";

// The original object is affected because objects are reference types.
//This means any value you store either in the clone or original object points to the same object.
console.log(person1);
console.log(person2);


//Let change `firstName` of the `person2` without changing 'person1' using the Spread operator
console.log("Changing person2 without changing person1:");

const person1copy = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
};

//We make a copy of the object to modify it without changing the original one
const person2copy = {...person1};
person2copy.firstName = "Simon";

console.log(person1copy);
console.log(person2copy);