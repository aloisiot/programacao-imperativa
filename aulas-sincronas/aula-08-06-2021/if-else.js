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