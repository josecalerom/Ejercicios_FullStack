//People in ascending order by age

function sortPeopleByAge(arr) {
  let sortedArr = arr.sort((a, b) => a.age - b.age)
  return sortedArr;
}

//People in descending order by age

// function sortPeopleByAge(arr) {
//   let sortedArr = arr.sort((a, b) => b.age - a.age)
//   return sortedArr;
// }


const people = [
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

const sortingByAge = sortPeopleByAge(people)
console.log(sortingByAge)