// Definindo uma Classe

class Pessoa {
    constructor (nome, idade) { // 'constructor()' é o método chamado automaticamente na criação do objeto (instância)
        this.nome = nome  // 'this' se refere ao objeto atual da classe
        this.idade = idade // a primeira 'idade' é a propriedade/atributo e a segunda é o parâmetro
    }

    apresentar() { // Método
        return `Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`
    }
}

const maria = new Pessoa('Maria', 28) // Criando uma instância
console.log(maria.apresentar())
console.log(maria)