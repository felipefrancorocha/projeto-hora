
function carregar() {
    let msg = document.getElementById('msg')
    let img = document.getElementById('imagem')
    let data = new Date()
    let hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`
    if(hora >= 0 && hora < 12) {
        img.src = 'imagens/fotomanha.jpg'
        document.body.style.background = 'rgb(230, 218, 111)'
    } else if(hora >= 12 && hora < 19) {
            img.src = 'imagens/fototarde.jpg'
            document.body.style.background = 'rgb(230, 165, 111)'
    } else {
        img.src = 'imagens/fotonoite.jpg'
        document.body.style.background = 'rgb(40, 43, 48)'
        document.body.style.color = 'white'
        msg.style.color = 'black'
    }
}