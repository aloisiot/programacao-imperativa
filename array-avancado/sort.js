// O método sort nos ajuda a ordenar os elementos de um Array.
// Recebe uma callback como parâmetro, que especifica o metodo de classificação. *opcional*
// Se form omitido o array é ordenado com o valor da string(Unicode) e cada elemento é convertido em string.

const nums = [1,34,4353,23,55,5,63];
// Ordenação crescente:
nums.sort();
console.log(nums);

// Ordenação decrescente:
nums.sort((a,b)=>b-a);
console.log(nums);

const nomes = ['Livia', 'Sandra', 'Deise', 'Marcos', 'Sandro'];
nomes.sort();
console.log(nomes);