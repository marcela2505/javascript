function carregar() {
    let msg = document.getElementById('msg')
    let img = document.getElementById('imagem')
    let hora = new Date().getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        // BOM DIA
        img.src = "imagens/fotomanha.jpg"
        document.body.style.backgroundColor = "#f4d8a4"
    } else if (hora >= 12 && hora < 18){
        // BOA TARDE
        img.src = "imagens/fototarde.jpg"
        document.body.style.backgroundColor = "#b9846f"
    } else {
        // BOA NOITE
        img.src = "imagens/fotonoite.jpg"
        document.body.style.backgroundColor = "#100E1A"
    }
}