// Mostrar os múltiplos de 8 até o valor 500. A tela deve mostrar 8 -16 -24;

let nums = [];

let multiplo = 0;

for(i = 1; multiplo < 500; i++) {
    multiplo = i * 8;
    nums.push(multiplo);
}

console.log(nums);