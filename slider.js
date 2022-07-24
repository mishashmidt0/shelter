let arrData = []

function getData() {  // получение карточки
    const url = './pets.json'
    fetch(url)
        .then((res) => res.json())
        .then((data) => arrData = [...data])
}

getData()

const carusel = document.querySelector('.carusel')
const btnLeft = document.querySelector('.arrow_left')
const btnRight = document.querySelector('.arrow_right')
const ItemLeft = document.querySelector('#item_left')  // 3 карты с лева
const ItemRight = document.querySelector('#item_right') // 3 карты с право


const generateNumberRandom = () => {  // создание массива 3 чисел не совпадающих с карточками которые показываються
    const active = document.querySelectorAll('#item_active .block_pets')
    const arr = [...active]
    const arrIdActiveCard = arr.map((el) => Number(el.id))
    const arrayRandomNumber = []

    for (let i = 0; i < 3; i++) {
        let number = Math.floor(Math.random() * 8)
        while (arrIdActiveCard.includes(number)) {
            number = Math.floor(Math.random() * 8)
        }
        arrIdActiveCard.push(number)
        arrayRandomNumber.push(number)
    }


    return arrayRandomNumber
}

const createCardTemplate = (id) => {

    const pet = arrData[id]

    const card = document.createElement('div')
    card.classList.add('block_pets')
    card.id = `${id}`
    const a = document.createElement('a')
    const img = document.createElement('img')
    img.src = `${pet.img}`
    img.alt = `${pet.name}`
    const h3 = document.createElement('h3')
    h3.innerText = `${pet.name}`
    const button = document.createElement('button')
    button.innerText = 'Learn more'

    a.appendChild(img)
    a.appendChild(h3)
    a.appendChild(button)
    card.appendChild(a)
    return card
}


carusel.addEventListener('animationend', (animation) => {
    if (animation.animationName === 'move-left' || animation.animationName === 'move-left_1279' || animation.animationName === 'move-left_768') {
        carusel.classList.remove('transition_left')
        document.querySelector('#item_active').innerHTML = ItemLeft.innerHTML;
    } else {
        carusel.classList.remove('transition_right')
        document.querySelector('#item_active').innerHTML = ItemRight.innerHTML;
    }

    btnRight.addEventListener('click', moveRight)
    btnLeft.addEventListener('click', moveLeft)
})

const moveLeft = () => {
    carusel.classList.add('transition_left')
    btnLeft.removeEventListener('click', moveLeft)
    btnRight.removeEventListener('click', moveRight)
    const arrRandom = generateNumberRandom()
    ItemLeft.innerHTML = ''

    let amountCards;
    document.documentElement.clientWidth < 1280 && document.documentElement.clientWidth >= 768 ? amountCards = 2 :
        document.documentElement.clientWidth < 768 ? amountCards = 1 : amountCards = 3

    for (let i = 0; i < amountCards; i++) {
        const card = createCardTemplate(arrRandom[i]);
        ItemLeft.appendChild(card)
    }
}

const moveRight = () => {
    carusel.classList.add('transition_right')
    btnRight.removeEventListener('click', moveRight)
    btnLeft.removeEventListener('click', moveLeft)
    const arrRandom = generateNumberRandom()
    ItemRight.innerHTML = ''


    let amountCards;
    document.documentElement.clientWidth < 1280 && document.documentElement.clientWidth >= 768 ? amountCards = 2 :
        document.documentElement.clientWidth < 768 ? amountCards = 1 : amountCards = 3
    for (let i = 0; i < amountCards; i++) {
        const card = createCardTemplate(arrRandom[i]);
        ItemRight.appendChild(card)
    }

}

btnRight.addEventListener('click', moveRight)
btnLeft.addEventListener('click', moveLeft)


