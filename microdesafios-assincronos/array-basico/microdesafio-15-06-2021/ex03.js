const nomes = ['Murilo', 'Caio', 'Aloisio', 'Ricardo', 'Silvano'];

function modify(array) {
    for(let i = 0; i < array.length ;i++) {
        array[i] = array[i] + ' é legal';
    }
}

modify(nomes);
console.log(nomes.join(', '));