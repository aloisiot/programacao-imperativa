// Crie uma variável produtos, que contenha um array de objetos, com no
// mínimo 3 itens. Dentro da variável, liste produtos disponíveis, informando os
// seguintes detalhes: Nome do Produto, Valor do Produto, Qualidade do
// Produto e Status.

// A informação Qualidade do Produto deve ser um número que irá de 0 a 10.
// A informação Status deve ser um Booleano, indicando se o produto está
// disponível em estoque.

const produtos = [
    {nome:'notebook',preco:3500,qualidade:7,disponibilidade:true},
    {nome:'tablet',preco:1200,qualidade:6,disponibilidade:true},
    {nome:'iPhone7',preco:3500,qualidade:8,disponibilidade:false},
    {nome:'Redmi note 9',preco:1800,qualidade:8,disponibilidade:true},
    {nome:'Galaxy A10',preco:950,qualidade:7,disponibilidade:true},
    {nome:'macbook',preco:8200,qualidade:9,disponibilidade:false},
    {nome:'memoria DDR4',preco:530,qualidade:7,disponibilidade:true},
    {nome:'ssd 1T',preco:760,qualidade:7,disponibilidade:true}
];

const carrinho=produtos.filter(produto=>produto.preco>=438&&produto.preco<=1600&&produto.qualidade>6&&produto.disponibilidade==true)

function printInfoCarrinho(){
    console.log('Produtos no carrinho:\n');
    carrinho.forEach(produto=>{
        console.log(`Produto: ${produto.nome}`)
        console.log(`Preço: R$${produto.preco.toFixed(2)}\n`)
    });
    console.log(`Total: RS${carrinho.reduce((acum,produto)=>acum+produto.preco,0).toFixed(2)}\n`);
}

printInfoCarrinho();