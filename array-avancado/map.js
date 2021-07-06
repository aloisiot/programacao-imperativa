/* Crie um array de números pares, e utilizando a função .map() nesse array,
crie um novo array com apenas números ímpares. */

let pares = [2, 4, 6, 8];

let impares = pares.map(e => e-1);

console.log(impares);