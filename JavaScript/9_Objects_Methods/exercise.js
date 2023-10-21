const person = {
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
}

// Print values of person using Object.keys

function printKeyValue(objeto){
  const keysObj = Object.keys(objeto);
  const valuesObj = Object.values(objeto);
  for (i=0; i<keysObj.length; i++) {
    console.log(keysObj[i] + "/" + valuesObj[i]);
  }
}

printKeyValue(person);


