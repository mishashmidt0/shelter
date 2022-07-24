const burger = document.querySelector('.burger')
const menu = document.querySelector('.menu_bar')
const body = document.querySelector('body')
const menu_logo = document.querySelector('.menu_logo')
const menu_navigation = document.querySelector('.menu_navigation')
const menu_navigation_logo = document.querySelector('.menu_navigation-logo')

const burger_menu = document.querySelector('.burger_menu ')
const house = document.querySelector('.house ')
const bg = document.querySelector('.dark-bg ')
const header_welcome = document.querySelector('.header_welcome ')

const clickBurger = () => {

    burger.classList.toggle('burger-active')
    body.classList.toggle('active_menu')
    burger_menu.classList.toggle('burger-active')
    bg.classList.toggle('dark-bg-active')
    header_welcome.classList.toggle('logo-active-none')
    menu.classList.toggle('menu_bar-active')
    menu_logo.classList.toggle('menu_logo-active')

}

burger.addEventListener('click', () => {
    clickBurger()
})
burger_menu.addEventListener('click', () => {
    clickBurger()
})

menu_navigation.addEventListener('click', () => {
    clickBurger()
})
bg.addEventListener('click', () => {
    clickBurger()
})
menu_navigation_logo.addEventListener('click', () => {
    clickBurger()
})
