/*
Crie um array de números e utilize a função .reduce() para devolver uma string com os números formatados.

Exemplo [1,5,9,3,7] => “1 – 5 – 9 – 3 – 7”
 */

const nums = [1, 5, 9, 3, 7];

const formatNums = nums.reduce(
    (acum,elem,index) => {
        index == 0? acum+=`${elem}` : acum+=` - ${elem}`;
        return acum;
    }
)

console.log(formatNums);

// Imprime a soma dos elementos do array
console.log(nums.reduce((total,e)=>total=+e))