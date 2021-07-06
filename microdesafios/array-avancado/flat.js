// Usado para desembrulhar subarrays dentro de arrays
// Recebe como parametro um nivel de profundidade dos possiveis subarrays. *opcional*
// Se o parâmetro for omitido o padrão é 1.

const nums = [1,34,4353,23,[23,45,1,34,[1,6]],55,5,63];
const result = nums.flat(2);
console.log(result);