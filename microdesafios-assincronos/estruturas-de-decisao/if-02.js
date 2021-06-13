/* Num parque os clientes so podem usufruir de um brinquedo se atenderem a determinadas condiçõesa
01 - Se a altura for maior que 1,40m entrada permitida.
02 - Se a altura for menor ou igual a 1,40m e maior que 1,20m entrada permitida somente acompanhado.
03 - Se a altura for menor que 1,20 entrada proibida. */

function podeSubir(altura, acompanhante) {
    if (altura > 1.40 && altura < 2) {
        console.log('Acesso altorizado!');
    } else if (altura <= 1.40 && altura > 1.20 &&acompanhante) {
        console.log('Acesso altorizado somente com acompanhante!');
    } else if (altura <= 1.2) {
        console.log('Acesso negado mesmo com acompanhante!')
    }
}

podeSubir(1.70, true);