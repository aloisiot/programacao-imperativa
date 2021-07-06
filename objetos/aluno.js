// Constructor Aluno
function Aluno(numeroArquivo, nome, ...notas) {
    this.numeroArquivo=numeroArquivo;
    this.nome=nome;
    this.notas=notas;

    // Calcula a média das notas do aluno.
    this.media=function(){
        media=0;

        for(nota of notas){
            media+=nota;
        }

        // Retorna a média das notas do aluno.
        return media/this.notas.length;
    }
}
//                                  ...notas
let aluno1 = new Aluno( 113,'Alan', 10,9,7,9);


console.log(`Nome: ${aluno1.nome}\n`+
            `Notas: ${aluno1.notas.join(", ")}\n`+
            `Média: ${aluno1.media()}`);