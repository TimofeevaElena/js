let b = prompt('Введите число')

let box = '<div class="box"></div>'
let box_list = document.querySelector('.box_list')

for(let y=0; y<b; y++){
    box_list.insertAdjacentHTML('beforeend',box)
}