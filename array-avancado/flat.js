// Usado para desembrulhar subarrays dentro de arrays
// Recebe como parametro um nivel de profundidade dos possiveis subarrays. *opcional*
// Se o parâmetro for omitido o padrão é 1.

// De acordo com a MDN essa é uma tecnologia esperimental
// Por tanto não se assuste se não rodar no seu pc, caso o node esteja desatualizado, ou no browser.
// Vide: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/flat

const nums = [1,34,4353,23,[23,45,1,34,[1,6]],55,5,63];
const result = nums.flat(2);
console.log(result);