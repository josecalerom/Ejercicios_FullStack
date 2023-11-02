const person = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25,
};

// Using an array as replacer
const json = JSON.stringify(person, ["id", "age"]);

console.log(json); // Should return: { id: 1, age: 25 }