const imagens = document.getElementById('imgs')
const leftBtn = document.getElementById('esq')
const rightBtn = document.getElementById('dir')

const img = document.querySelectorAll('#imgs img')

let index = 0

let intervalo = setInterval(run, 2000)

function run() {
    index++

    mudaImagem()
}

function mudaImagem() {
    if (index > img.length-1)     //se o index for maior do que o total de img.lenght -1 = ultimo index, se estivermos no fim
    {
        index = 0       //index 0
    } else if (index < 0) {//se estivermos no principio
        index = img.length -1//index é o fim
    }

    imagens.style.transform = `translateX(${-index * 500}px)`//move a imagem 500px translateX
}

function resetInterval(){
    clearInterval(intervalo)
    intervalo = setInterval(run,2000)
}

leftBtn.addEventListener('click', () => {
    index--
    mudaImagem()
    resetInterval()
})
rightBtn.addEventListener('click', () => {
    index++
    mudaImagem()
    resetInterval()
})