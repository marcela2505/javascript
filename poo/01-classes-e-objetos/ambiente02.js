// Manipulação de Objetos

class Pessoa { // Criando classe base
    constructor (nome, idade) {
        this.nome = nome
        this.idade = idade
    }

    apresentar() {
        return `Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`
    }
}

const pessoa1 = new Pessoa('João', 25) // Criando objeto

// Acessando propriedades (mostrando)
console.log(pessoa1.nome)
console.log(pessoa1['idade'])

// Adicionando ou modificando propriedades
pessoa1.profissao = 'Desenvolvedor'
pessoa1.idade = 26
console.log(pessoa1)

// Removendo propriedades
delete pessoa1.idade
console.log(pessoa1)

// Iterando sobre um objeto
for (let chave in pessoa1) {
    console.log(`${chave} : ${pessoa1[chave]}`)
}

// Convertendo para array
console.log(Object.keys(pessoa1))
console.log(Object.values(pessoa1))
console.log(Object.entries(pessoa1))