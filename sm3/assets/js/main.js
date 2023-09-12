let a = Number(prompt ('Введите стоимость товара'))
let b = Number(prompt ('Введите кол-во денег'))

if(a==b){
    alert('Покупка совершена')
}
else{
    if(a>b){
        let c = a-b
        alert('Для покупки не хватает ' +c+ ' р.')
    }
    else{
        let k = b-a
        alert('Покупка совершена. Ваша сдача ' +k+ ' р.')
    }
}