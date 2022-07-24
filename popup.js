const modal = document.querySelector('.modal ')
let arrActive = document.querySelectorAll('#item_active .block_pets')


let arrPets = []

function getData() {
    const url = './pets.json'
    fetch(url)
        .then((res) => res.json())
        .then((data) => arrPets = [...data])
}

getData()


const createModalWindow = async (pet) => {

    await pet

    const div = document.createElement('div');
    div.classList.add('modal-window');

    const button = document.createElement('button');
    button.classList.add('close');

    const block2 = document.createElement('div')
    block2.classList.add('wrapper')

    const img = document.createElement('img')
    img.src = `${pet.img}`

    const h3 = document.createElement('h3')
    h3.classList.add('title')
    h3.innerText = pet.name

    const p = document.createElement('p')
    p.classList.add('sub-title')
    p.innerText = `${pet.type} - ${pet.breed}`

    const p2 = document.createElement('p')
    p2.classList.add('text')
    p2.innerText = pet.description

    const divSpan = document.createElement('div')

    const span = document.createElement('span')
    span.innerText = `Age: ${pet.age}`

    const span1 = document.createElement('span')
    span1.innerText = `Inoculations: ${pet.inoculations[0]}`

    const span2 = document.createElement('span')
    span2.innerText = `Diseases: ${pet.diseases[0]}`

    const span3 = document.createElement('span')
    span3.innerText = `Parasites: ${pet.parasites[0]}`


    block2.appendChild(h3)
    block2.appendChild(p)
    block2.appendChild(p2)
    divSpan.appendChild(span)
    divSpan.appendChild(span1)
    divSpan.appendChild(span2)
    divSpan.appendChild(span3)
    block2.appendChild(divSpan)
    div.appendChild(img)
    div.appendChild(block2)
    div.appendChild(button)
    modal.appendChild(div);

}


const closeOpenPopup = (el) => {
    if (el.target.classList[0] === 'modal') {
        modal.innerHTML = ""
        modal.classList.toggle('modal_active')
        body.classList.toggle('active_menu')
    }
    if (el.target.classList[0] === 'close') {
        modal.innerHTML = ""
        modal.classList.remove('modal_active')
        body.classList.remove('active_menu')
        close.classList.remove('active_button_close')
    }
}

const clickItem = (el) => {
    let id = el.path[2].id
    if (arrPets[id] === undefined) {
        id = el.path[1].id
    }

    modal.classList.add('modal_active')
    body.classList.add('active_menu')


    createModalWindow(arrPets[id]).catch(err => console.log(`ERROR: ` + err))
}

carusel.addEventListener('animationend', () => {
    arrActive = document.querySelectorAll('#item_active .block_pets')
    arrActive.forEach((item) => {
        item.addEventListener('click', clickItem)
    })
})

arrActive.forEach((card) => {
    card.addEventListener('click', clickItem)
})

modal.addEventListener('click', closeOpenPopup)


let close = document.querySelector('.close')

setInterval(() => {
    close = document.querySelector('.close')
    if (!!close) {
        close.addEventListener('click', closeOpenPopup)

    }
}, 1000)

modal.addEventListener('mousemove', (el) => {
    if (el.target.classList[0] === 'modal') {
        close = document.querySelector('.close')
        close.classList.add('active_button_close')
    } else {
        close.classList.remove('active_button_close')
    }
})
