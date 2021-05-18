const popupVideo = document.querySelector('.popup_type_video');
const videoBlock = document.querySelector('.mainvideo__video');


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
  

const openPopupVideo = () => {
    openPopup(popupVideo);
}

/* Обработчики для попапов */

videoBlock.addEventListener('click', openPopupVideo);
popupVideo.addEventListener('click', closeWithClick);

