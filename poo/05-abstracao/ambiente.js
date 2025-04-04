// Abstração com Classes

class Animal {
    constructor(nome) {
        this.nome = nome
    }
   
    emitirSom() {
        throw new Error("Este método deve ser implementado pela subclasse.")
    }
}
   
class Gato extends Animal {
    emitirSom() {
        console.log(`${this.nome} diz: Miau!`)
    }
}

const meuGato = new Gato("Felix")
meuGato.emitirSom()