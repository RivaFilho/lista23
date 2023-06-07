function verificar(){
    var data = new Date();
    var ano = data.getFullYear();
    var fano = document.getElementById('txtano');
    var res = document.querySelector('div#res');

    if(fano.value.length == 0 || Number(fano.value) > ano){
        window.alert ('[Erro] Verifique os dados e tente novamente' )
    }else{
        var fsex = document.getElementsByName('radsex');
        var idade = ano - Number(fano.value);
        var genero = '';
        var img = document.createElement('img');
        img.setAttribute('id', 'foto');
        if(fsex[0].checked){
            genero = 'Homem';
            if(idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src', './img/bebeH.jpg')
            }else if(idade < 21){
                //Jovem
                img.setAttribute('src', './img/jovemH.jpg')
            }else if(idade < 50){
                //Adulto
                img.setAttribute('src', './img/adultoH.jpg')
            }else{
                //idoso
                img.setAttribute('src', './img/idosoH.jpg')
            }
        }else if(fsex[1].checked){
            genero = 'Mulher';
             if(idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src', './img/bebeM.jpg')
            }else if(idade < 21){
                //Jovem
                img.setAttribute('src', './img/jovemM.jpg')
            }else if(idade < 50){
                //Adulto
                img.setAttribute('src', './img/adultoM.jpg')
            }else{
                //idoso
                img.setAttribute('src', './img/idosaM.jpg')
            }
        }
       
        res.innerHTML = `Detectemos ${genero} com ${idade} anos`;
        res.appendChild(img);
    }

   
}
