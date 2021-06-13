let filmes = ["star wars", "clube da luta",  "o poderoso chefão", "top gun",  "interestelar"];

let cartoons = ["toy story", "Procurando Nemo", "kung-fu panda", "wally", "fortnite"];


// Adiciona cada elemento do array2 ao array1.
function adc(array1, array2) {
    for(i = 0; i < array2.length; i++) {
        array1.push(array2[i]);
    }
}

adc(filmes, cartoons);

console.log(filmes);