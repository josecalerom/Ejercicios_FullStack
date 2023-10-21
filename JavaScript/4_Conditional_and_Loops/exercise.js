function sumUntil(maxValue) {
  let contador = 0;
  for(let i=1; i<=maxValue; i++){
    contador += i;
  }
  return contador;
}

console.log(sumUntil(5));