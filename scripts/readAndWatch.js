const guideitems = document.querySelectorAll('.guide__item')
const movieitems = document.querySelectorAll('.movie__video')
const filmitems = document.querySelectorAll('.movie__film')
const bookitems = document.querySelectorAll('.book')
const articlesitems = document.querySelectorAll('.event-soon')


let documentWidth = document.documentElement.clientWidth //ширина экрана

/* Показывать количество карточек в зависимости от разрешения экрана  */

function render (arr, selector) {
    if (documentWidth < 1440 && documentWidth > 1024) {
        arr.forEach ((item, index) => {
            if (index > 2) {
                item.classList.add(selector)
            }
        })
    } else if (documentWidth < 1024 && documentWidth > 640) {
        arr.forEach ((item, index) => {
            if (index > 1) {
                item.classList.add(selector)
            }
        })
    } else if (documentWidth < 640) {
        arr.forEach ((item, index) => {
            if (index > 0) {
                item.classList.add(selector)
            }
        })
    }
}
   
render (guideitems, 'guide__item_hidden')
render (movieitems, 'movie__video_hidden')
render (filmitems, 'movie__film_hidden')
render (bookitems, 'book_hidden')
render (articlesitems, 'event-soon_hidden')

// изменение количества при ресайзе не прописано. Страницу необходимо обновлять при изменении ширины окна