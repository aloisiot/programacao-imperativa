/* Crie um array de nomes, que possua dois índices com o nome Maria. Utilize o .filter()
 para obter apenas esses dois índices com o nome Maria. */

let nomes = ['Maria', 'Ana', 'José', 'Maria', 'Davi'];

let marias = nomes.filter(nome => nome == 'Maria');

console.log(marias);