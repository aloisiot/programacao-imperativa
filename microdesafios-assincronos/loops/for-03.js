/* Crie uma tabuada utilizando o for. Dica:
Para essa tarefa você irá precisar utilizar dois loops (for). */

for(let x=2; x <10; x++) {
    console.log('\nTabuada do '+ x);
    for(let y=1; y<=10 ; y++) {
        console.log(x + 'x' + y + ' = ' + x*y);
    }
}