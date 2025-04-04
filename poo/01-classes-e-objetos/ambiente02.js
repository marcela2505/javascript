// Criando Objetos em JS


// Objeto literal
const pessoa = {
    nome: 'João',   // Atributo/Propriedade
    idade: 25,
    saudacao: function() {   // Método
        return `Olá, meu nome é ${this.nome}.`
    }
}
console.log(pessoa)
console.log(pessoa.saudacao())


// Usando new Object()
const carro = new Object()  // 'new Object()' é a mesma coisa que '{}'
carro.marca = 'Toyota'
carro.modelo = 'Corolla'
carro.ano = 2023
console.log(carro)


// Criando uma função construtora (pouco usado)
function Animal(tipo, som) {
    this.tipo = tipo
    this.som = som
}

const cachorro = new Animal('Cachorro', 'Au Au')
console.log(cachorro.som)
console.log(cachorro)


// Usando classes (ES6+) (forma mais moderna e recomendada)
class Pessoa {
    constructor (nome, idade) {
        this.nome = nome
        this.idade = idade
    }

    apresentar() {
        return `Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`
    }
}

const maria = new Pessoa('Maria', 30)
console.log(maria.apresentar())
console.log(maria)