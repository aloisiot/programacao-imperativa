const produtos = require('./produtos');

// Busca por nome:
function buscador(produtos, nome){
    return produtos.filter(element=>element.nome == nome)
}

// Calcular o lucro total de todos os produtos:
function calculaTotal(produtos) {
    return produtos.reduce((acum, elem)=> acum+elem.preco*elem.numVendas,0)
}

// Permitir pesquisar um produto pelo nome e calcular seu lucro total;
function totalDoElementoX(produtos, nome){
    return buscador(produtos,nome).reduce((acum,elem)=>acum+elem.preco*elem.numVendas,0)
}


// Permite receber um valor e indicar todos os produtos que venderam mais que esse valor;
function vendasAcimaDeX(produtos, x){
    return produtos.filter(produto=>produto.preco*produto.numVendas> x);
}

// Classifique todos os produtos pela quantidade de dinheiro que geraram.
// Ordenar pelos mais vendidos:

function maisVendidosAcima(produtos){
    result = produtos.sort((produtoA, produtoB)=> {
        return (produtoB.preco*produtoB.numVendas)-(produtoA.preco*produtoA.numVendas)
    });

    result.forEach(produto => produto.precoTotal = produto.preco*produto.numVendas);
    return result
}

// Encontre um produto e atribua a ele um novo valor 
// (reutilize o código que permite encontrar o produto pelo nome).
function aleatoria(produt, nome){
    result = produt.filter(element=>element.nome == nome)
    const index = produt.indexOf(result[0]);
    console.log(index);
    produt[index].nome = 'Melancia';
}

// Calcule o lucro total após pagar 45% do lucro em impostos.
function lucro(produtos){
    total = calculaTotal(produtos)
    return total- total*0.45;
}