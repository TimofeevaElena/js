let news = [
    {
        id: 1,
        name: 'Unity вводит с начала 2024 года комиссию Unity Runtime Fee для разработчиков популярных игр',
        text: 'Unity объявила о вводе с начала 2024 года комиссии Unity Runtime Fee, которая будет взиматься с разработчиков популярных при превышении определённого количества установок их игр.',
        autor: 'Den-24',
        date: '10.09.2023'
    },
    {
        id: 2,
        name: 'Apple представила iPhone 15 Pro и Pro Max',
        text: 'Apple на презентации показала iPhone 15 Pro и Pro Max в титановом корпусе и с настраиваемой кнопкой действия.',
        autor: 'Anna',
        date: '11.09.2023'
    },
    {
    id: 3,
    name: '«Лаборатория Касперского» представила трекер подписок SubsCrab',
    text: '«Лаборатория Касперского» представила приложение SubsCrab, с помощью которого можно вести список подписок, не забывать об оплатах и находить наиболее выгодные предложения, промокоды и скидки.',
    autor: 'Lizzzie',
    date: '11.09.2023'
    },
    {
    id: 4,
    name: 'Выявлена вредоносная кампания, нацеленная на Linux',
    text: 'Заражение происходит при попытке скачать софт с сайта Free Download Manager, что может говорить об атаке на цепочку поставок, отмечают эксперты «Лаборатории Касперского».',
    autor: 'User235',
    date: '12.09.2023'
    },
    {
    id: 5,
    name: 'Пять лучших ноутбуков для покупки в 2023 году',
    text: 'По словам эксперта, в первую очередь следует определиться, для каких целей нужен ноутбук, и отталкиваться от поставленных ему задач. Компьютер для повседневной работы и учебы должен быть легким и универсальным — с видеокартой хотя бы начального уровня, современным процессором и весом до 2,5 кг.',
    autor: 'Doni',
    date: '12.09.2023'
    }
]
let inputName =document.getElementById('inputName')
let inputText =document.getElementById('inputText')
let inputDate =document.getElementById('inputDate')
let inputId =document.getElementById('inputId')
let inputAutor =document.getElementById('inputAutor')
let btn =document.getElementById('btn')

let newsPlace = document.querySelector('.news')

news.forEach(x=>{
    newsPlace.insertAdjacentHTML('beforeend', `
    <div class="news-content">
    <div class="title-date">
        <div class="news-title">${x.name}</div>
        <div class="date">${x.date}</div>
    </div>
    <div class="text">${x.text}</div>
    <div class="autor-id">
        <div class="autor">${x.autor}</div>
        <div class="id">id: ${x.id}</div>
    </div>
    </div>
    `)
})

function showArray(arr){
    arr.forEach(y=>{
    newsPlace.insertAdjacentHTML('beforeend', `
    <div class="news-content">
    <div class="title-date">
        <div class="news-title">${y.name}</div>
        <div class="date">${y.date}</div>
    </div>
    <div class="text">${y.text}</div>
    <div class="autor-id">
        <div class="autor">${y.autor}</div>
        <div class="id">id: ${y.id}</div>
    </div>
    </div>
    `)
});
}

function addArray(){
    let object = {
        id: inputId.value,
        name: inputName.value,
        text: inputText.value,
        autor:inputAutor.value,
        date: inputDate.value
    }
    news.push(object)
    newsPlace.innerHTML =''
    inputId.value =''
    inputName.value = ''
    inputText.value =''
    inputDate.value = ''
    inputAutor.value =''
    showArray(news)
}
btn.addEventListener('click', addArray )