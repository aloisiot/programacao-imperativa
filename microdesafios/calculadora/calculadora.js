const operacoes = require('./operacoes');
const tabuada = require('./tabuada');

function calcular(a, b, operacao) {
    if (typeof a == 'number' && typeof b == 'number') {
        switch (operacao) {
            case '+': console.log(operacoes.soma(a, b));
                break;
            case '-': console.log(operacoes.sub(a, b));
                break;
            case '/': console.log(operacoes.div(a, b));
                break;
            case '*': console.log(operacoes.mult(a, b));
                break;
            case 't': tabuada(a);
                break;
                default: 'Operação inválida!'
        }
    } else {
        console.log('Insira números válidos!');
    }
}

calcular(4, 8, '+');