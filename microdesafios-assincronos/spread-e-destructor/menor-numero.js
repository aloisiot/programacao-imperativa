// Retorna o menor dentre uma lista de números.
function menorNum (...nums) {
    menor = nums[0];
    nums.forEach(e => e < menor? menor = e:'')
    return menor;
}

console.log(menorNum(1, 2, 3, 4, 5, 6, -10));