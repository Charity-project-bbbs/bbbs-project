/* Задаем переменные */

const openButton = document.querySelector('.header__burger-btn');
const menu = document.querySelector('.header__burger');
let isClicked = false;

const popupLogin = document.querySelector('.popup_type_login');
const loginButton = document.querySelector('.header__button-login_unauthorized');

const calenderLinks = document.querySelectorAll('.calender-open');

const popupVideo = document.querySelector('.popup_type_video');
const videoBlock = document.querySelector('.mainvideo__video');

/* Изменение внешнего вида хэдера на разрешениях менее 1024пкс при открытии и закрытии бургерного меню 
(показать меню, поменять иконку, скрыть/показать значок личного кабинета) */

openButton.addEventListener('click', () => {
    if (isClicked === false) {
        menu.classList.remove('header__burger_hidden');
        openButton.style.backgroundImage = 'url(./images/close.svg)';
        loginButton.style.display = 'block';
        isClicked = true     
    } else {
        menu.classList.add('header__burger_hidden');
        openButton.style.backgroundImage = 'url(./images/burger-menu.svg)';
        loginButton.style.display = 'none';
        isClicked = false
    }
})

/* Функции открытий и закрытий попапов */

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

const openPopupVideo = () => {
    openPopup(popupVideo);
}

/* Обработчики для попапов */

loginButton.addEventListener('click', openPopupLogin);
popupLogin.addEventListener('click', closeWithClick);
videoBlock.addEventListener('click', openPopupVideo);
popupVideo.addEventListener('click', closeWithClick);

calenderLinks.forEach((item) => {
    item.addEventListener('click', openPopupLogin);
})

