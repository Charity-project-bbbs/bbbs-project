/* Задаем переменные */

const openButton = document.querySelector('.header__burger-btn');
const menu = document.querySelector('.header__burger');
let isClicked = false;

const loginAuthButton = document.querySelector('.header__button-login_authorized');

const changeLink = document.querySelector('.header__change')
const popupCity = document.querySelector('.popup_type_cities')


const popupVideo = document.querySelector('.popup_type_video');
const videoBlock = document.querySelector('.mainvideo__video');


/* Изменение внешнего вида хэдера на разрешениях менее 1024пкс при открытии и закрытии бургерного меню 
(показать меню, поменять иконку, скрыть/показать значок личного кабинета) */

openButton.addEventListener('click', () => {
    if (isClicked === false) {
        menu.classList.remove('header__burger_hidden');
        openButton.style.backgroundImage = 'url(../images/close.svg)';
        loginAuthButton.style.display = 'block';
        isClicked = true     
    } else {
        menu.classList.add('header__burger_hidden');
        openButton.style.backgroundImage = 'url(../images/burger-menu.svg)';
        loginAuthButton.style.display = 'none';
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
  
const openPopupCity = () => {
  openPopup(popupCity);
}

const openPopupVideo = () => {
    openPopup(popupVideo);
}

/* Обработчики для попапов */

videoBlock.addEventListener('click', openPopupVideo);
popupVideo.addEventListener('click', closeWithClick);
changeLink.addEventListener('click', openPopupCity);
popupCity.addEventListener('click', closeWithClick);

