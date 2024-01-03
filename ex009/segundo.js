var agora = new Date()
var hora = agora.getHours()
var minu = agora.getMinutes()

console.log(`agora são ${hora} horas e ${minu} minutos`)
if (hora < 6){
    console.log("Continue dormindo")
}else if (hora < 12){
    console.log("Acorda vagabundo")
}else if (hora < 18){
    console.log("Boa tarde")
} else {
    console.log("buenas noches")
}

