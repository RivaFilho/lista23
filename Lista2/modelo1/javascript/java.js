function carregar(){
    var msg = window.document.getElementById('msg');
    var img = window.document.getElementById('imagem');
    var data = new Date();
    var hora = data.getHours();
    msg.innerHTML = `agora são ${hora} horas.`;

    if(hora >= 0 && hora < 12){
        //Bom dia!
        img.src = './img/manha.jpg';
        document.body.style.background = '#C0B4A6';
    } else if (hora >= 12 && hora <= 18){
        //Boa tarde!
        img.src = './img/tarde.jpg';
        document.body.style.background = '#8A5734';
    }else{
        //boa noite!
        img.src = './img/noite.jpg';
        document.body.style.background = '#30454C';
    }
}
