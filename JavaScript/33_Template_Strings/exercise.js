class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

const developer = new Person("Mario", "Rossi");
//Using basic concat
console.log(developer.firstName + " " + developer.lastName);
//Using Template strings
console.log(`${developer.firstName} ${developer.lastName}`);
