// Usando callback.

const soma = (a, b) => a + b;

const sub = (a, b) => a - b;

const mult = (a, b) => a * b;

const div = (a, b) => a / b;

const modulo = (a, b) => a % b;

const calcular=(n1, n2, callback)=>console.log(callback(n1, n2));

// Usando callback ja declarada.
calcular(19, 40, soma);

// Construindo callback dentro dos parâmetros.
calcular(19, 40, (x, y) => x + y );
