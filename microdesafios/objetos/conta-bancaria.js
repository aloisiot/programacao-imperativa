// Constructor conta Bancaria.
function ContaBancaria(numero, saldo, nomeDoTitular) {
    this.numero=numero;
    this.saldo=saldo;
    this.nomeDoTitular=nomeDoTitular;

    // Metodo para depositos
    this.depositar = function(valor) {
        this.saldo+=valor;
        console.log(`Depósito realizado com sucesso!\nNovo saldo: R$${this.saldo.toFixed(2)}\n`);
    }

    // Metodo para saques
    this.sacar = function(valor) {
        if(this.saldo<valor){
            console.log(`Saldo insuficiênte\nSeu saldo atual é: R$${this.saldo}\n`)
        } else {
            this.saldo-=valor;
            console.log(`Saque realizado com sucesso!\nNovo saldo: R$${this.saldo.toFixed(2)}\n`);
        }
    }
}

// Instanciando objeto contaBancaria
let conta1 = new ContaBancaria(123, 10000, 'José da Silva');

// Deposito
conta1.depositar(2500);

// Tentativa de saque com valor acima do saldo.
conta1.sacar(2600000);