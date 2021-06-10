// Compare elementos de um array com elementos de outro array.

let aprovados = ['Alana', 'Diego', 'Silvia', 'Alice'];

let reprovados = ['Dilma', 'Diego', 'Sandro', 'Alice'];

aprovados.forEach(elemX => {
    reprovados.forEach( elemY => {
        if(elemX == elemY) {
            console.log(`Há inconsistencia nos registros!\nO aluno ${elemX} está presente tanto na lista de aprovados como de reprovados\n`)
        }
    })
}) 
