function contar() {
    let txtini = document.getElementById('txtini')
    let txtfim = document.getElementById('txtfim')
    let txtpas = document.getElementById('txtpas')
    let res = document.getElementById('res')
    if (txtini.value.length == 0 || txtfim.value.length == 0 || txtpas.value.length == 0) {
        res.innerHTML = '<p>Impossível contar!</p>'
    } else {
        let ini = Number(txtini.value)
        let fim = Number(txtfim.value)
        let pas = Number(txtpas.value)
        if (pas == 0) {
            pas = 1
            alert('Passo inválido! Considerando PASSO 1.')
        }
        let c = ini
        let contagem = ''
        if (ini < fim) {
            while (c <= fim) {
                contagem += String(c + '\u{1F449} ') 
                c += pas
            }
        } else {
            while (c >= fim) {
                contagem += String(c + '\u{1F449} ')
                c -= pas
            }
        }
        contagem += '🏳️'
        res.innerHTML = (`<p>Contando:<br>${contagem}</p>`)
    }
}