let cores = ['Azul', 'Branco', 'Verde'];

// Inserindo novo elemento à última posição do array.
cores.push('Lilas', 'Laranja');

/* 
O metodo pop() remove ultimo elemento do array.
Alem de remover o elemento retorna o valor do mesmo, podendo assim ser armazenado em uma variável. 
*/
let ultimaCor = cores.pop();
console.log(ultimaCor);
console.log(cores);

/*
O metodo shift() remove o elemento de indice 0 do array.
Também retorna o elemento removido, podendo assim ser armazenado em uma variável.
*/
let primeitoElemento = cores.shift();
console.log(primeitoElemento);
console.log(cores);

//O unshift() insere um ou mais elementos no inicio do array.
cores.unshift('Roxo');
console.log(cores);