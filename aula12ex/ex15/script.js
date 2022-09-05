function verificar(){
   var data = new Date()
   var ano = data.getFullYear()
   var fano = document.getElementById('txtano')
   var res = document.querySelector('div#res')

   if(fano.value.length == 0 || fano.value > ano){
    window.alert('[ERRO] Verifique os dados e tente novamente!')
   }else{
    var fsex = document.getElementsByName('radsex')
    idade = ano - Number(fano.value)
    var gênero = ''
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')


    if(fsex[0].checked){
        gênero = 'Homem'

        if(idade >= 0 && idade <= 12){
            img.setAttribute('src', './img/foto-bebe-m.jpg')
            //Criança
        }else if (idade < 18){
            img.setAttribute('src', './img/foto-jovem-m.jpg')
            //Jovem
        }else if(idade < 60){
            img.setAttribute('src', './img/foto-adulto-m.jpg')
            //Adulto
        }else{
            img.setAttribute('src','./img/foto-idoso-m.jpg')
            //Idoso
        }

    }else if (fsex[1].checked){
        gênero = 'Mulher'

        if(idade >= 0 && idade <= 12){
            img.setAttribute('src', './img/foto-bebe-f.jpg')
            //Criança
        }else if (idade < 18){
            img.setAttribute('src', './img/foto-jovem-f.jpg')
            //Jovem
        }else if(idade < 60){
            img.setAttribute('src', './img/foto-adulto-f.jpg')
            //Adulta
        }else{
            img.setAttribute('src','./img/foto-idoso-f.jpg')
            //Idosa
        }
    }
   }
   res.style.textAlign =  'center'
   res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
   res.appendChild(img)
}





