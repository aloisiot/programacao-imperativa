const Aluno=require('./aluno');

// Construtor para cursos.
function Curso(nome,notaAprovacao,maxFaltas){
    this.nome=nome;
    this.notaAprovacao=notaAprovacao;
    this.maxFaltas=maxFaltas;
    this.listaAlunos=[];
    
    // Adiciona um novo aluno à lista de alunos.
    this.cadastrarAluno=function(nome, sobrenome, nascimento){
        this.listaAlunos.push(new Aluno(nome, sobrenome, nascimento));
    }

    // Retorna um aluno que tenha determinado nome e sobrenome.
    this.buscarPorNome=function(nome, sobrenome){
        return this.listaAlunos.find(elem=>elem.nome==nome&&elem.sobrenome==sobrenome)
    };

    // Retorna a média geral da turma.
    this.mediaGeral=function(){
        const total=this.listaAlunos.reduce((acum,aluno)=>acum+aluno.calcularMedia(),0);
        return (total/this.listaAlunos.length).toFixed(2);
    }

    // Imprime a media de notas de determinado aluno, caso exista
    // params: nome, sobrenome
    this.pritMediaDoAlunoX=function(nome,sobrenome){
        const media=this.buscarPorNome(nome, sobrenome).calcularMedia();
        console.log(`A média do aluno ${nome} ${sobrenome} é ${media}`);
    }

    // Retorna true se aprovado e false e não.
    this.situacao=function(nome, sobrenome){
        const aluno = this.buscarPorNome(nome, sobrenome);
        const media = aluno.calcularMedia()
        let status;

        if(aluno.qtdFaltas < maxFaltas)
            media>this.notaAprovacao+this.notaAprovacao*0.1?status=true:status=false;
        else if (media >= this.notaAprovacao){
            status=true;
        }else{
            status=false;
        }

        return status;
    }
}

module.exports=Curso;