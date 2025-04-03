let numeros = []
let soma = 0
let res = document.getElementById('res')

function adicionar() {
    let txtnum = document.getElementById('txtnum')
    let n = Number(txtnum.value)
    let sellista = document.getElementById('sellista')
    if (n > 100 || n < 1 || txtnum.value.length == 0 || numeros.includes(n)) {
        alert('Valor inválido ou já encontrado na lista.')
    } else {
        numeros.push(n)
        let item = document.createElement('option')
        item.text = `Valor ${n} adicionado.`
        item.value = `item${numeros.indexOf(n)}`
        sellista.appendChild(item)
        soma += n
        res.innerHTML = ''
    }
    txtnum.value = '' // Esvazia a caixa do input
    txtnum.focus() // Faz com que o elemento focado receba eventos de teclado e similares por padrão.
    
}

function finalizar() {
    if (numeros.length == 0) {
        alert('Adicione valores antes de finalizar')
    } else {
        res.innerHTML = `<p>Ao todo, temos ${numeros.length} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${Math.max(...numeros)}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${Math.min(...numeros)}.</p>`
        res.innerHTML += `<p>Somando todos os valores temos ${soma}.</p>`
        res.innerHTML += `<p>A média dos valores digitados é ${soma / numeros.length}.</p>`
    }
    
}