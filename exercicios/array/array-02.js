let pessoas = ['Ana', 'Lúcia', 'Márcio', 'Tereza', 'Ana', 'Ana'];

// O método indexOf retorna o ìndice de um elemento em um array.
console.log(pessoas.indexOf("Márcio"));


// O métofo lastIndexOf retorna a últma ocorrência de determinado elemento em um array.
console.log(pessoas.lastIndexOf('Ana'));

// Recebe uma string como parametro.
// Junta os elementos do array usando o parâmetro como separador dos elementos.
p = pessoas.join(',');
console.log(p);

// O método lengh retorna o comprimento de um array (total de elementos contidos).
console.log(pessoas.length);