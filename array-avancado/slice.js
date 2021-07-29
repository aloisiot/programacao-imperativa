// Este método retorna uma compia do array em questão.
// Para isso determinamos dois parâmetros, índice inicial e final (opcionais)

const nums = [1,34,4353,23,55,5,63];

const subNums = nums.slice(3,5);
console.log(subNums);

// Obs: ao contrário do que se pode pensar
//      a interação retorna como ultimo elemento o elemento de indice final-1.s
