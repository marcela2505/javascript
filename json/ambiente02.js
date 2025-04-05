// Conversão objeto JavaScript -> JSON (string)
const novoUsuario = {
    nome: "Ana",
    idade: 25,
    logado: false
}

const novoJson = JSON.stringify(novoUsuario) // JSON.stringify() converte pra string JSON

console.log(novoJson)
console.log(typeof(novoJson))
console.log(novoUsuario)
console.log(typeof(novoUsuario))