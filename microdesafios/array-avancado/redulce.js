/*
Crie um array de números e utilize a função .reduce() para devolver uma string com os números formatados.

Exemplo [1,5,9,3,7] => “1 – 5 – 9 – 3 – 7”
 */

let nums = [1, 5, 9, 3, 7];

let formatNums = nums.reduce(
    (acum,elem,index) => {
        index == 0? acum+=`${elem}` : acum+=` - ${elem}`;
        return acum;
    }
)

console.log(formatNums);