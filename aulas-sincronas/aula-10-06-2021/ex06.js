// Crie uma função que adiciona cada elemento do array de desenhos animados (cartoons)
// ao array de filmes.

let filmes = ["star wars", "clube da luta",  "o poderoso chefão", "top gun",  "interestelar"];

let cartoons = ["toy story", "Procurando Nemo", "kung-fu panda", "wally", "fortnite"]

function adc(array1, array2) {
    array1.forEach(element => {
        array2.push(element);
    });
}

adc(cartoons, filmes);
console.log(filmes);