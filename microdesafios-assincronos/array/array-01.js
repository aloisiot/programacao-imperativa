// Métodos para manipulação de arrays

let cores = ['Azul', 'Branco', 'Verde'];

console.log('O método push inserindo ou mais elementos ao fim.');
cores.push('Lilas', 'Laranja');


console.log('O metodo pop() remove ultimo elemento do array.\n Alem de remover o elemento retorna o valor do mesmo, podendo assim ser armazenado em uma variável.');
let ultimaCor = cores.pop();
console.log(ultimaCor);
console.log(cores);

console.log('Remove o primeiro elemento,\nTambém retorna o elemento removido, podendo assim ser armazenado em uma variável.\n');
let primeitoElemento = cores.shift();
console.log(primeitoElemento);
console.log(cores);

console.log('O unshift() insere um ou mais elementos no inicio do array.');
cores.unshift('Roxo');
console.log(cores);