// Crie um array de objetos literais, onde cada objeto será um aluno e terá dois atributos:
// nome e nota. Crie duas funções que ordenam o array: uma ordenará os alunos em ordem alfabética
// e a outra o fará por nota, da mais alta para a mais baixa.

const alunos = [
    {nome: 'Josefa', nota: 7.5},
    {nome: 'Mario', nota: 8},
    {nome: 'Savio', nota: 7},
    {nome: 'Fernanda', nota: 9},
    {nome: 'Paulo', nota: 9.5},
    {nome: 'Silvia', nota: 8},
    {nome: 'Chris', nota: 8}
];

// Faz a ordenação por nome de um array de alunos:
function ordenaPorNome(alunos){
    const nomesOrdenados = alunos.map(aluno=>aluno.nome).sort();
    return nomesOrdenados.map(nome=> alunos.filter(aluno=> aluno.nome==nome));
}

// Faz a ordenação decrescente por nota de um array de alunos:
function ordenaPorNotaDec(alunos){
    return alunos.sort((alunoA, alunoB)=> alunoB.nota-alunoA.nota)
}
console.log(ordenaPorNotaDec(alunos));

// Faz a ordenação crescente por nota de um array de alunos:
function ordenaPorNotaCresc(alunos){
    return alunos.sort((alunoA, alunoB)=> alunoA.nota-alunoB.nota)
}
console.log(ordenaPorNotaCresc(alunos));
