function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora < 12) {
        //Bom Dia!
        img.src = 'img/manha-pp.png'
        document.body.style.background = '#bdb2ff'
    }else if( hora >= 12 && hora <+ 18) {
        //Boa Tarde!
        img.src = 'img/tarde-pp.png'
        document.body.style.background = '#fe8501'
    } else {
        //Boa noite!
        img.src = 'img/noite-pp.png'
        document.body.style.background = '#033471'
    }
}




