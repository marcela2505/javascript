// Conversão JSON (string) -> array de objetos JavaScript
const usuariosJson = '[{"nome": "João", "idade": 32}, {"nome": "Maria", "idade": 28}]'

const usuarios = JSON.parse(usuariosJson)

console.log(usuarios)
for (let u in usuarios) {
    console.log(usuarios[u].nome)
    console.log(usuarios[u].idade)
}

// Conversão de array de objetos JavaScript -> JSON (string)
const outroJson = JSON.stringify(usuarios)
console.log(outroJson)