// Retorna o menor dentre uma lista de números.
function menorNum (...args) {
    return Math.min(...args);
}

console.log(menorNum(1, 2, 3, 4, 5, 6, -10))