/* Recebe uma estação como parametro.
Imprime uma determinada frase para cada estação. */

function estacoes(estacao) {
    switch (estacao) {
        case "Verão" : console.log("Que calor hein?!");
        break
        case "Inverno" : console.log("Frio dms!");
        break
        case "Outono" : console.log("É a estação em que as folhas caem.");
        break
        case "Primavera" : console.log("O momento em que as folhas crescem.");
        default : console.log("Ops, estação inválida!")
    }
}

estacoes("Verão");