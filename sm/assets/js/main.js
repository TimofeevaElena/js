let titleAcc = document.querySelectorAll('.title')
let textAcc = document.querySelectorAll('.text')

for(let i=0; i<titleAcc.length; i++){
    titleAcc[i].addEventListener('click', showText)
}

function showText(event){
    let el = event.target.nextElementSibling
    el.style.heigth = 'initial'
    event.target.addEventListener('click', hideText)
    event.target.removeEventListener('click',showText )
}

function hideText(event){
    let el = event.target.nextElementSibling
    el.style.heigth = '0'
    event.target.addEventListener('click', showText)
    event.target.removeEventListener('click', hideText)
}
