class Person {
  _firstName = "";
  _lastName = "";
  _age = 0;
  constructor(firstName, lastName, age){
    if (typeof(firstName) === "string"){
      this._firstName = firstName;
    } else {
      this._firstName = "Invalid first name";
    }
    if (typeof(lastName) === "string"){
      this._lastName = lastName;
    } else {
      this._lastName = "Invalid last name";
    }
    if (typeof(age) === "number"){
      if(age < 1){
       this._age = 1;
      }else if(age > 110){
       this._age = 110;
      }else {
       this._age = age;
      }
    } else {
      if(Number(age) < 1){
        this._age = 1;
      }else if(Number(age) > 110){
        this._age = 110;
      }else {
        this._age = Number(age);
      }
    }
  }
  set firstName(newFirst){
    if(typeof newFirst !== "string"){
      this._firstName = "Invalid first name";
    }else {
      this._firstName = newFirst;
    }
  }
  get firstName(){
   return this._firstName;
  }
  set lastName(newLast){
    if(typeof newLast !== "string"){
      this._lastName = "Invalid last name";
    }else {
      this._lastName = newLast;
    }
  }
  get lastName(){
    return this._lastName;
  }
  set age(newAge){
    if(newAge < 1){
      this._age = 1;
    }else if(newAge > 110){
      this._age = 110;
    }else {
      this._age = newAge;
    }
  }
  get age(){
   return this._age;
  }
  get fullName() {
    return this._firstName + " " + this._lastName;
  }
}

const person = new Person('Mario', 'Rossi', 25);
console.log(person.fullName);

person.firstName = 'Maria';
person.lastName = 'Verdi';
console.log(person.fullName);