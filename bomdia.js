function carregar(){
    var titulo = document.getElementById('titulo')
    var corpo = document.getElementById('body')
    var sect = document.getElementById('section')
    var txt = document.getElementById('texto')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()

    if(hora > 0 && hora <= 11){

        titulo.innerHTML = 'Bom dia'
        txt.style.color = 'white'
        corpo.style.background = '#8faec2'
        sect.style.background = '#e4c47e'
        txt.innerHTML = `São exatamente ${hora}:${minuto} daqui a pouco almoçar?`
        img.src = 'manha.jpg'

    }else if(hora >= 12 && hora <= 17){

        titulo.innerHTML = 'Boa tarde'
        txt.style.color = 'white'
        corpo.style.background = '#c55f0e'
        sect.style.background = '#e98419'
        txt.innerHTML = `São exatamente ${hora}:${minuto} ja bateu o almoço?`
        img.src = 'tarde.jpg'
    }else{
        titulo.innerHTML = 'Boa noite'
        txt.style.color = 'white'
        corpo.style.background = '#04284a'
        txt.innerHTML = `São exatamente ${hora}:${minuto} recomendo vc dormir`
        sect.style.background = '#074777'
        img.src = 'noite.jpg'
    }
}

