
function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = 2//data.getHours()
    
    msg.innerHTML = `Agora são ${hora}:00 horas.`
    if (hora >= 0 && hora < 12) {
        //"Bom dia"
        document.body.style.background = '#e6fffc'
        img.src = "amanhecer.png"
    }else if (hora >= 13 && hora <= 18) {
        //"Boa Tarde"
        document.body.style.background = '#fffde3'
        img.src = "meiodia.png"
    }else {
        //"Boa Noite"
        document.body.style.background = '#ddddff'
        img.src = "anoitecer.png"
    }
        
}