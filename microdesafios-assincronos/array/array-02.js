// Métodos para manipulação de arrays

let pessoas = ['Ana', 'Lúcia', 'Márcio', 'Tereza', 'Ana', 'Ana'];

console.log('O método indexOf retorna o ìndice de um elemento em um array.');
console.log(pessoas.indexOf("Márcio"));


console.log('O método lastIndexOf retorna o indice da últma ocorrência de determinado elemento em um array.');
console.log(pessoas.lastIndexOf('Ana'));

console.log('O método join recebe uma string como parametro.\nJunta os elementos do array usando o parâmetro como separador dos elementos.')
p = pessoas.join(',');
console.log(p);

cosnole.log('O método lengh retorna o comprimento de um array (total de elementos contidos).');
console.log(pessoas.length);