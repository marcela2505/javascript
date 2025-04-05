// Conversão JSON (string) -> objeto JavaScript
const jsonString = '{"nome": "Carlos", "idade": 30, "logado": true}'

const usuario = JSON.parse(jsonString) // JSON.parse() converte para objeto JavaScript

console.log(usuario)
console.log(usuario.nome)