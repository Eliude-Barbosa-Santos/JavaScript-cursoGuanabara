function bora() {
    var msg = window.document.getElementById("msg")
    var agora = new Date()
    var hora = 19
    var minu = agora.getMinutes()
    var img = window.document.getElementById("imagem")
    var corpo = window.document.body

    msg.innerHTML = `Agora são ${hora} horas e ${minu} minutos`

    if (hora > 0 && hora < 12){
        img.src = 'dia.jpg'
    } else if (hora >= 12 && hora < 18){
        img.src = 'tarde.jpg'
        corpo.style.background = 'rgb(221, 121, 7)'
    } else {
        img.src = 'noite.jpg'
        corpo.style.backgroundColor = 'rgb(138, 53, 133)'
    }




}