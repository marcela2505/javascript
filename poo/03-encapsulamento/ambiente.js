// Encapsulamento com Classes

class Conta {
    #saldo = 0
    depositar(valor) {
        this.#saldo += valor
    }

    verSaldo() {
        return this.#saldo
    }
}

const c = new Conta()
c.depositar(100)
console.log(c.verSaldo())