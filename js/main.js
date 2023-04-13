let ul = document.querySelector('nav .ul');

function openMenu(){
    ul.classList.add('open');
}

function closeMenu(){
    ul.classList.remove('open');
}

var radio = document.querySelector('.manual-btn')

var cont = 1

document.getElementById('radio1').checked = true

setInterval(()=> {
    proximaImg()

}, 5000)

function proximaImg(){
    cont++

    if(cont>2){
        cont=1
    }

    document.getElementById('radio'+cont).checked = true   
}