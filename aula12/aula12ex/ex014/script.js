
function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        //"Bom dia"
        img.src = "amanhecer.png"
    }else if (hora >= 13 && hora <= 18) {
        //"Boa Tarde"
        img.src = "meiodia.png"
    }else {
        //"Boa Noite"
        img.src = "anoitecer.png"
    }
        
}