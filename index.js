const openButton = document.querySelector('.header__burger-btn')
const menu = document.querySelector('.header__burger')
const login = document.querySelector('.header__button-login')
let isClicked = false

const popupLogin = document.querySelector('.popup_type_login')
const loginButton = document.querySelector('.header__button-login')

const calendarLink = document.querySelector('.header__list-item_calender')

openButton.addEventListener('click', () => {
    if (isClicked === false) {
        menu.classList.remove('header__burger_hidden');
        openButton.style.backgroundImage = 'url(../images/close.svg)';
        login.style.display = 'block';
        isClicked = true     
    } else {
        menu.classList.add('header__burger_hidden');
        openButton.style.backgroundImage = 'url(../images/burger-menu.svg)';
        login.style.display = 'none';
        isClicked = false
    }
})


const closeWithClick = (evt) => {
    const popup = document.querySelector('.popup_opened');
    if (evt.target.classList.contains('popup') || evt.target.classList.contains('popup__button-close')) {
      closePopup(popup)
   }
  }
  
const openPopup = (popup) => {
  popup.classList.add('popup_opened');
}

const closePopup = (popup) => {
    popup.classList.remove('popup_opened');
}
  
const openPopupLogin = () => {
  openPopup(popupLogin);
}

const openPopupAdd = () => {
    openPopup(popupLogin);
  }

calendarLink.addEventListener('click', openPopupLogin);
loginButton.addEventListener('click', openPopupLogin);
popupLogin.addEventListener('click', closeWithClick);

