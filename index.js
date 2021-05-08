const openButton = document.querySelector('.header__burger-btn')
const menu = document.querySelector('.header__burger')
let isClicked = false

openButton.addEventListener('click', () => {
    if (isClicked === false) {
        menu.classList.remove('header__burger_hidden');
        openButton.style.backgroundImage = 'url(../images/burger-close.svg)'
        isClicked = true
    } else {
        menu.classList.add('header__burger_hidden');
        openButton.style.backgroundImage = 'url(../images/burger-menu.svg)'
        isClicked = false
    }
})

