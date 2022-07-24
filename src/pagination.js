let arrLists = []
let cards = document.querySelector('.block_pets')
let card = document.querySelectorAll('.pet')
let page = 1;
const first = document.querySelector('.first')
const active = document.querySelector('.active_number')
const left = document.querySelector('.left')
const right = document.querySelector('.right')
const last = document.querySelector('.last');

const createCardTemplate = (id) => {
    const pet = arrPets[id]
    const card = document.createElement('div')
    card.classList.add('pet')
    card.id = `${id}`
    const a = document.createElement('a')
    const img = document.createElement('img')
    img.src = `${pet.img}`
    img.alt = `${pet.name}`
    const p = document.createElement('p')
    p.innerText = `${pet.name}`
    const button = document.createElement('button')
    button.innerText = 'Learn more'

    a.appendChild(img)
    a.appendChild(p)
    a.appendChild(button)
    card.appendChild(a)
    return card
}
const createRandomList = () => {
    let arrList = []
    for (let i = 0; i < 8; i++) {
        let number = Math.floor(Math.random() * 8)
        while (arrList.includes(number)) {
            number = Math.floor(Math.random() * 8)
        }
        arrList.push(number)
    }
    arrList.reverse()
    return arrList
}
const hidden = (page) => {
    if (page >= maxPage + 1) {
        right.classList.add('grey')
        last.classList.add('grey')
        right.removeEventListener('click', rightClick)
        last.removeEventListener('click', lastClick)
    } else {
        right.classList.remove('grey')
        last.classList.remove('grey')
        right.addEventListener('click', rightClick)
        last.addEventListener('click', lastClick)
    }
    if (page === 1) {
        first.classList.add('grey')
        left.classList.add('grey')
        left.removeEventListener('click', leftClick)
        first.removeEventListener('click', firstClick)
    } else {
        first.classList.remove('grey')
        left.classList.remove('grey')
        left.addEventListener('click', leftClick)
        first.addEventListener('click', firstClick)
    }


}
const reRender = (localPage) => {
    active.textContent = `${localPage}`
    hidden(localPage)
    cards.innerHTML = "";

    let amountCards;
    document.documentElement.clientWidth < 1280 && document.documentElement.clientWidth >= 768 ? amountCards = 6 :
        document.documentElement.clientWidth < 768 ? amountCards = 3 : amountCards = 8

    for (let i = 0; i < amountCards; i++) {
        cards.appendChild(createCardTemplate(arrLists[localPage - 1][i]))
    }

    arrActive = document.querySelectorAll('.pet')
    arrActive.forEach((item) => {
        item.addEventListener('click', clickItem)
    })
    page = localPage;
}

function render() {
    cards.innerHTML = "";
    let arrList = createRandomList()
    arrLists.unshift(arrList)
    let amountCards;
    document.documentElement.clientWidth < 1280 && document.documentElement.clientWidth >= 768 ? amountCards = 6 :
        document.documentElement.clientWidth < 768 ? amountCards = 3 : amountCards = 8

    for (let i = 0; i < amountCards; i++) {
        cards.appendChild(createCardTemplate(arrList[i]))
    }

    arrActive = document.querySelectorAll('.pet')
    arrActive.forEach((item) => {
        item.addEventListener('click', clickItem)
    })
}

window.onload = function () {
    setTimeout(() => {
        render()
    }, 100)
};


let maxPage;

document.documentElement.clientWidth < 1280 && document.documentElement.clientWidth >= 768 ? maxPage = 7 :
    document.documentElement.clientWidth < 768 ? maxPage = 15 : maxPage = 5;

window.addEventListener('resize', (el) => {
    let width = el.path[0].innerWidth
    width < 1280 && width >= 768 ? maxPage = 7 :
        width < 768 ? maxPage = 15 : maxPage = 5

    hidden(page)

    if (page > maxPage + 1) {
        reRender(maxPage + 1)
    }
})

for (let i = 0; i < 15; i++) {
    arrLists.push(createRandomList())
}


const rightClick = () => {
    nextList('+')
}
const leftClick = () => {
    nextList('-')
}
const lastClick = () => {
    nextList('++')
}
const firstClick = () => {
    nextList('--')
}

const nextList = (props) => {
    let localPage
    localPage = page;
    props === '+' ? ++localPage :
        props === '-' ? --localPage :
            props === '--' ? localPage = 1 : localPage = maxPage + 1


    reRender(localPage)
}

right.addEventListener('click', rightClick)

last.addEventListener('click', lastClick)





