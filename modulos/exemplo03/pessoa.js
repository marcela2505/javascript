// Exportando classe
export class Pessoa {
    constructor (nome, idade) {
        this.nome = nome
        this.idade = idade
    }

    apresentar() {
        return console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`)
    }
}