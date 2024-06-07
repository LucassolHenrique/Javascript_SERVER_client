class Conta {

    constructor(titular, conta) {

        this._titular = titular;
        this._conta = conta;
        this._saldo = 0.0
    }
    deposita(valor) {
        console.log('Valor depositado: ' + valor);
        this._saldo+=valor; 
    }

    get saldo() {
        return this._saldo;
    }

    get titular() {
        return this._titular;
    }

    get conta() {
        return this._conta;
    }
}

var conta = new Conta('Mingau', 171, 1);
conta.deposita(101);
conta.titular = 'Paco';
console.log(conta.titular); //  acessando como se fosse uma propriedade!
console.log(conta.conta); // 171
console.log(conta.saldo); //100