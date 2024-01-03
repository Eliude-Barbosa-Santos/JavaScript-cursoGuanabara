function bora() {
    var msg = window.document.getElementById("msg")
    var agora = new Date()
    var hora = 19
    var minu = agora.getMinutes()

    msg.innerHTML = `São ${hora} horas e ${minu} minutos`

    var img = window.document.getElementById("imagem")

    if (hora >= 0 && hora < 12){
        img.scr = 'dia.jpg'
    } else if (hora >= 12 && hora < 18){
        img.src = 'tarde.jpg'
    } else {
        img.src = 'noite.jpg'
    }

}