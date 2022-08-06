
function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        //"Bom dia"
        document.body.style.background = '#00fff6'
        img.src = "amanhecer.png"
    }else if (hora >= 13 && hora <= 18) {
        //"Boa Tarde"
        document.body.style.background = '#ff7838'
        img.src = "meiodia.png"
    }else {
        //"Boa Noite"
        document.body.style.background = '#49007c'
        img.src = "anoitecer.png"
    }
        
}