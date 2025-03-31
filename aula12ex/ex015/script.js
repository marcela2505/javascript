function verificar() {
    var ano = new Date().getFullYear()
    var txtano = document.querySelector('input#txtano')
    var res = document.querySelector('div#res')
    if (txtano.value.length == 0 || txtano.value > ano || txtano.value < 1900) {
        alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var radsexo = document.getElementsByName('radsex')
        var idade = ano - Number(txtano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (radsexo[0].checked) {
            genero = 'homem'
            if (idade >=0 && idade < 10) {
                img.setAttribute('src', 'imagens/crianca-homem.jpg')
            } else if (idade < 21) {
                img.setAttribute('src', 'imagens/jovem-homem.jpg')
            } else if (idade < 50) {
                img.setAttribute('src', 'imagens/adulto-homem.jpg')
            } else {
                img.setAttribute('src', 'imagens/idoso-homem.jpg')
            }
        } else if (radsexo[1].checked) {
            genero = 'mulher'
            if (idade >=0 && idade < 10) {
                img.setAttribute('src', 'imagens/crianca-mulher.jpg')
            } else if (idade < 21) {
                img.setAttribute('src', 'imagens/jovem-mulher.jpg')
            } else if (idade < 50) {
                img.setAttribute('src', 'imagens/adulto-mulher.jpg')
            } else {
                img.setAttribute('src', 'imagens/idoso-mulher.jpg')
            }
        }
        res.innerHTML = `<p>Detectamos ${genero} com ${idade} anos.</p>`
        res.appendChild(img)
    }
}