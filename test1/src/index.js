
function esPrimo(n) {
  if (n > 0){
    for (let i=0; i < Math.sqrt(n); i++) {
      if(n % i == 0){
        return false;
      }
    }
    var array = array[10];
    for(let indice =0; indice < array.length; indice++) {
      array[indice] = Math.random()
    }
    console.log(array)
    return true;
  }
  return false;
}

module.export = esPrimo;
console.log(esPrimo(7))