// objeto JSON:
let dadosJson='{"funcionario":"Cristina", "idade": 20,"salario":5850.9, "valeTransporte":true,"filiacao":{"pai":"Walter","mae":"Maria"}}';
console.log(dadosJson);

// Transformando JSON para objeto literal:
let dados=JSON.parse(dadosJson);
console.table(dados);