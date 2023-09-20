function showLink(x){
    console.log('link' + x)
}


let inputName = document.querySelector('.inputname')
let error = document.querySelector('.error')
let error2 = document.querySelector('.error2')
let inputYear = document.querySelector('.inputyear')
let btn = document.querySelector('.btn')
let form = document.querySelector('.form')
let iserror = false
const currentyear = new Date().getFullYear()

form.addEventListener('submit', checkForm)
function checkForm(event){

    let iserror = false

    if(inputName.value === ''){
        inputName.style.border = '1px solid red'
        error.innerHTML = 'Заполните поле'
        iserror = true
    }
    else if(inputName.value.length <2){
        inputName.style.border = '1px solid red'
        error.innerHTML = 'Введите не менее 2 символов'
        iserror = true
    }
    if(inputYear.value === ''){
        inputYear.style.border = '1px solid red'
        error2.innerHTML = 'Заполните поле'
        iserror = true
    }
    else if(inputYear.value.length !== 4){
        inputYear.style.border = '1px solid red'
        error2.innerHTML = 'Поле должно содержать ровно 4 символа'
        iserror = true
    }
    else if (currentyear-Number(inputYear.value)<18){
            inputYear.style.border = '1px solid red'
            error2.innerHTML = 'Вам должно быть 18 лет'
            iserror = true
    }
    event.preventDefault()
        if(!iserror){
            document.querySelector('.href').style.display = 'flex'
        }else{
            document.querySelector('.href').style.display = 'none'
        }
}

    
    
    
    
    
    