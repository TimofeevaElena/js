let btn = document.querySelector('.btn')
let btn2 = document.querySelector('.btn2')
let btn3 = document.querySelector('.btn3')
let btn4 = document.querySelector('.btn4')
let btn5 = document.querySelector('.btn5')
let btn6 = document.querySelector('.btn6')
let body = document.querySelector('body')


btn.addEventListener('mousedown', ()=>{
    btn.style.background = "#87CEEB"
})
btn2.addEventListener('mouseup', ()=>{
    btn2.style.background = "#ADD8E6"
})
btn3.addEventListener('mouseover', ()=>{
    btn3.style.background = "linear-gradient(45deg, #30cfd0, #330867)"
    btn3.style.color = "#F0FFFF"
})
btn4.addEventListener('mouseout', ()=>{
    btn4.style.background = "#AFEEEE"
})
btn5.addEventListener('mousemove', ()=>{
    btn5.style.background = "#87CEEB"
})
btn6.addEventListener('dblclick', ()=>{
    btn6.style.background = "#F0F8FF"
    btn6.style.border = "1px solid #87CEEB"
    body.style.background = "#F0F8FF"
})