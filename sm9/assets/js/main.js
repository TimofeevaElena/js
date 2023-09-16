document.addEventListener('keydown', (event) => {
    if (event.key.toLowerCase() == 'r') document.body.style.background = 'red'
    else if (event.key.toLowerCase() == 'g') document.body.style.background = 'green'
    else if (event.key.toLowerCase() == 'b') document.body.style.background = 'blue'
})

document.addEventListener('keyup', () => document.body.style.background = '')

let block = document.querySelector('.block')

document.addEventListener('keydown', (event) => {

    // Получает координаты элемента
    const rect = block.getBoundingClientRect()

    switch (event.code) {
        case 'KeyW':
          block.style.top = (rect.top - 1) + 'px'
          break;
        case 'KeyA':
          block.style.left = (rect.left - 1) + 'px'
          break;
        case 'KeyS':
          block.style.top = (rect.top + 1) + 'px'
          break;
        case 'KeyD':
          block.style.left = (rect.left + 1) + 'px'
          break;
    }
})