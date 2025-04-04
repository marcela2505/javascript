// Exportando módulo com valor padrão/principal
export default function mostrarMensagem(nome) {
    console.log(`Olá, ${nome}.`)
}
export const config = {
    tema: 'dark',
    idioma: 'pt-BR'
}
// Cada módulo só pode ter um único default