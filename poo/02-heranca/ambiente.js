// Herança com Classes
class Pessoa {
    constructor (nome, idade) {
        this.nome = nome
        this.idade = idade
    }

    apresentar() {
        return `Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`
    }
}

class Funcionario extends Pessoa { // 'extends' permite herdar de outra classe
    constructor(nome, idade, cargo) {
        super(nome, idade) // Chama o construtor da classe pai (Pessoa)
        this.cargo = cargo
    }

    apresentacao() {
        return `${super.apresentar()} Eu sou ${this.cargo}.` // Chama o método 'apresentar()' da classe pai
    }
}

const pessoa1 = new Funcionario('João', 35, 'Desenvolvedor')
console.log(pessoa1.apresentacao())