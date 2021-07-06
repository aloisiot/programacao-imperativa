// Juntando arrays

let primos = [1, 2, 3, 5, 7, 11, 13, 17, 19];

let naoPrimos = [2, 4, 6, 8, 9, 10, 12, 14, 15, 16];

let nums = [...primos, ...naoPrimos]

console.log(nums);