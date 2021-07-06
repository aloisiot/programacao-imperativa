// Fatorial usando loop (for).

let fatorialFor = n => {
    let result=1;

    for(i = result; i<= n; i++) {
        result *=i;
    }

    return result;
}


// Fatorial com recursão.

let fatorialRecursivo = n => {
    let result = 1;
    let aux = result;
    
    let calc = _ =>{
        ++aux;
        result*=aux;
        
        // Chamada recursiva da função calc se determinada condição for atendida.
        aux!=n ? calc() : ''; 
    }
    
    calc()
    return result;
    
}


console.log(fatorialFor(10));
console.log(fatorialRecursivo(10));