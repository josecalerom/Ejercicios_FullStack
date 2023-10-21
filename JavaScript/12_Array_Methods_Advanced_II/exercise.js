//OPTION #1

function nicknameMap(persons) {
  let newArray = [];
  persons.forEach(el => {
    newArray.push(el.name + "-" + el.age);
  });
  return newArray;
}

//OPTION #2

// function nicknameMap(persons) {
//   let newArray = [];
//   persons.forEach(elemento => {
//     nick = elemento.name.concat("-" + elemento.age);
//     newArray.push(nick);
//   });
//   return newArray;
// };


const persons = [
  { name: 'Paul', age: 16 },
  { name: 'George', age: 17 },
  { name: 'Lucas', age: 21 },
  { name: 'Marco', age: 32 },
  { name: 'Peter', age: 18 },
  { name: 'Carl', age: 13 },
  { name: 'Simon', age: 24 },
  { name: 'Mark', age: 15 },
  { name: 'Sandra', age: 34 },
  { name: 'Alice', age: 28 }
];

const nicknames = nicknameMap(persons);
console.log(persons);
console.log(nicknames);