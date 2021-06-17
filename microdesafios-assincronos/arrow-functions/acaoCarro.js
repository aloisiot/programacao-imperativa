// ATENÇÃO ->  Para pleno funcionamento do programa execute pelo NODE, e nao por qualquer extenção
//             Antes de executar limpe o seu terminal


let andar = (time, acao2) => {
    console.log('O carro está andando...');
    
    function andando() {

        let n = 40;
        
        // Define um tempo para interronper o movimento do carrinho.
        let aux = time * n / 4 + 2000;
            
        let andando = setInterval( function (){
            
            console.clear()
            // Cria um array de n elementos preenchidos com espaços.
            let posicao = new Array(n).fill(' ');
            
            // Adiciona um carrinho ao final do array.
            posicao.push('🚗');
    
            // Imprime o carrinho na distância n do ponto 0. 
            console.log(posicao.join(''));
    
            // Diminui o comprimento do array para simular o movimento do carrinho.
            n -= 4;
    
            
        }, time)
    
        // Interrompe o movimento apos determinado tempo.
        setTimeout(() => {
            clearInterval(andando);
            acao2()
        },aux)
        
    }

    setTimeout(andando, 2000);

}

let parar = () => console.log('O carro parou.');

// recebe duas açoes e um espaço de tempo em SEGUNDOS.
function acaoCarro(time, acao1, acao2) {
    
    time *= 1000; 

    acao1(time, acao2);
}

acaoCarro(1,andar,parar);