function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var nasc = window.document.getElementById('txtano')
    var res = window.document.getElementById('res')
    //Criando um tag dinamicamente pelo javascript
    var img = window.document.createElement('img')
    //Colocando atributos dentro da tag(elemento) criado
    img.setAttribute('id', 'foto')

    if (nasc.value < 0 || nasc.value > ano){

        window.alert('[ERRO] Data Invalida')
    } else {

        var idade = ano - nasc.value
        var genero = ''
        var sex = window.document.getElementsByName('radsex')

        if(sex[0].checked){
            genero = "Homem"

           if (idade >= 0 && idade < 18){
                img.setAttribute('src', 'menino.jpeg')
           } else if (idade >= 18 && idade < 65){
                img.setAttribute('src', 'adulto.jpeg')
           } else if (idade >= 65 && idade < 120){
                img.setAttribute('src', 'velho.jpeg')
           } else {
                img.setAttribute('src', 'mortemasc.jpg')
           }

           
        } else if (sex[1].checked){
            genero = "Mulher"

            if (idade >= 0 && idade < 18){
                img.setAttribute('src', 'menina.jpeg')
           } else if (idade >= 18 && idade < 65){
                img.setAttribute('src', 'adulta.jpeg')
           } else if (idade >= 65 && idade < 120){
                img.setAttribute('src', 'velha.jpeg')
           } else {
                img.setAttribute('src', 'mortefem.png')
           }



        }
        
        res.innerHTML = `${genero} de ${idade} anos de idade`
        
        
        
    }

    res.appendChild(img)

}