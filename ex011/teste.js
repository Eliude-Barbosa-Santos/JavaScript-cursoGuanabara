function teste(){
    var v = window.document.getElementById("koko")

    var vd = window.document.createElement("video")

    vd.setAttribute("src", "video")
    vd.setAttribute("controls")
    vd.setAttribute("poster", "imagem..")
    var ep = 3
   switch(ep){
        case 1:
            v.appendChild(vd)
            break
        case 2:
            v.appendChild(vd)
   }

    
}