// Esse método nos ajuda a remover ou adicionar elemetos.
// Recebe três parâmetros:
//     índice inicial;
//     quantidade de elementos a eliminar; *opcional*
//     elementos a serem adicionados; *opcional (caso seja omitido apenas remove)*

const nums = [1,34,4353,23,55,5,63];

// A partir do indice 0 remove 0 elementos e add o interio '2':
nums.splice(0,0,2);
console.log(nums);

//  A partir do indice 1 remove 2 elementos:
nums.splice(1,2);
console.log(nums);

//  A partir do indice 3 remove 1 elemento e insere todos os elementos de outro array: 
const intrusos = ['i','i','i','i'];
nums.splice(3,1, ...intrusos);
console.log(nums);