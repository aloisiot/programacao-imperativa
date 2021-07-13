// objeto JSON:
let dadosJson = '{"funcionario":"Cristina", "idade": 20,"salario":5850.9, "valeTransporte":true,"filiacao":{"pai":"Walter","mae":"Maria"}}';
// console.log(typeof dadosJson);
// console.log(dadosJson);

console.log('\n');

// Transformando JSON para objeto literal:
let dados = JSON.parse(dadosJson);
// console.table(typeof dados);
// console.table(dados);

// Transformando objeto literal para JSON:
let jsonDeNovo = JSON.stringify(dados);
// console.log(jsonDeNovo);

// Gerando arquivo a partir de um JSON:
const fs = require('fs');
// Com o metodo writeFileSync, se o arquivo existir ele será sobrescrito.
// fs.writeFileSync('./json/dados.json',jsonDeNovo);

// O método appendFileSync, se o arquivo existir ele será acrescentado.
// fs.appendFileSync('./json/dados.json',jsonDeNovo);

// Lendo arquivo JSON
let lendoJson = fs.readFileSync('./json/dados.json', 'utf-8');

// Transformando JSON para objeto literal:
let dados_ = JSON.parse(lendoJson);
console.log(dados_[1]);