// Contador de visitas (localStorage)
let visitas = localStorage.getItem("visitas") || 0
visitas ++
localStorage.setItem("visitas", visitas)
document.getElementById("visitas").textContent = `Você visitou essa página ${visitas} vezes.`

// Boas vindas com sessionStorage
const nomeSessao = sessionStorage.getItem("nomeSessao")
if (!nomeSessao) {
    const nome = prompt('Qual é o seu nome?')
    if (nome) {
        sessionStorage.setItem("nomeSessao", nome)
        document.getElementById('boasVindas').textContent = `Olá, ${nome}!`
    }
} else {
    document.getElementById('boasVindas').textContent = `Olá, ${nomeSessao}!`
}

// Preenchimeto automático do campo nome (localStorage)
const nomeInput = document.getElementById('nome')
nomeInput.value = localStorage.getItem("nomeForm") || ""

nomeInput.addEventListener('input', (n) => {
    localStorage.setItem("nomeForm", n.target.value)
})

// Modo Escuro (localStorage)
const temaSalvo = localStorage.getItem("tema")
if (temaSalvo === "dark") {
    document.body.classList.add('dark')
}

document.getElementById('toggleTema').addEventListener('click', () => {
    document.body.classList.toggle('dark')
    const temaAtual = document.body.classList.contains('dark') ? 'dark' : 'light'
    localStorage.setItem("tema", temaAtual)
})