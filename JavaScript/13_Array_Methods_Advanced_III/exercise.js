function calculateAverageAge(persons) {
  let arrayEdades = [];
  persons.forEach(el => {
    arrayEdades.push(el.age);
  });
  const valorInicial = 0;
  const sumaEdad = arrayEdades.reduce((accumulador, valorActual) => accumulador + valorActual, valorInicial);
  let promedioEdad = sumaEdad / arrayEdades.length;
  return Math.round(promedioEdad);
}

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

const average = calculateAverageAge(persons);
console.log(persons);
console.log(average);