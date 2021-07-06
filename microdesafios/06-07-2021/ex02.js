// Crie uma função que receba um array de palavras e um número,
// e que retorna uma matriz (array) com apenas as palavras que têm
// mais do que uma quantidade de letras maior do que o número informado.
// (verifique como funciona o método filter ())

function comprimentoMaiorQueX(wordsList, x){
    return wordsList.filter(e=>e.length>x);
}

console.log(comprimentoMaiorQueX(['Joana', 'Marcos', 'as', 'gth', 's'], 3));