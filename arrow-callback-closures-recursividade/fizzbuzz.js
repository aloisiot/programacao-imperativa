/* 
FizzBuzz

Imprimi os números de 1 a 100.
Se o número a ser impresso for um múltiplo de seu PRIMEIRO parâmetro imprime "Fizz".
Se for um múltiplo do seu SEGUNDO parâmetro, imprime "Buzz".
Se for multiplo de AMBOS, imprime "FizzBuzz".
*/



const fizzBuzz = (m, n) => {

    for(i=1;i <=100; i++) {
        if(Number.isInteger(i/m)) {
            Number.isInteger(i/n) ?
                console.log(`${i} FizzBuzz`) :
                console.log(`${i} Fizz`);
        } else if(Number.isInteger(i/n)) {
            console.log(`${i} Buzz`);
        } else {
            console.log(i);
        }
    }
}

fizzBuzz(2, 5);


