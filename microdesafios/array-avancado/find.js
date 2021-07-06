// Retorna o primeiro elemento que cumpra determinada condição especificada por uma callback.
// A callback retorna um valor boleano.
// Parâmetros:
//      elemento;
//      indice;
//      array a ser q esta sendo percorrido;

const moedas = [
    {nome: 'Bitcoin', simbolo: 'BTC'},
    {nome: 'Ethereum', simbolo: 'ETH'},
    {nome: 'Bitcoin', simbolo: 'BTC'},
    {nome: 'Cardano', simbolo: 'ADA'}
];

const firstBtc = moedas.find(e=>e.nome=='Bitcoin');
console.log(firstBtc);