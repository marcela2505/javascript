// Declarando objetos em JS
let amigo = {
    nome: 'José', // Atributo
    sexo: 'M',
    peso: 85.4,
    engordar(p=0) { // Método
        console.log('Engordou')
        this.peso += p // this é uma referência ao própio objeto
    }
    /* Outra forma de criar um método
    
    engordar: function (p=0) {
        console.log('Engordou')
        this.peso += p
    }
    */
}

amigo.engordar(2)
console.log(`${amigo.nome} pesa ${amigo.peso}Kg`)