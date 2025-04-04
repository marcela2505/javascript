// Polimorfismo com Classes

class Animal {
    falar() {
        console.log("O animal faz um som.")
    }
}

class Cachorro extends Animal {
    falar() {
        console.log("O cachorro late.")
    }
}

const animal = new Animal
animal.falar()
const cachorro = new Cachorro
cachorro.falar()