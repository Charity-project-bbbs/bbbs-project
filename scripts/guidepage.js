const items = document.querySelectorAll('.guide__item')

let documentWidth = document.documentElement.clientWidth //ширина экрана

/* Показывать количество карточек в зависимости от разрешения экрана  */

function renderItems () {
    if (documentWidth < 1024) {
        items.forEach ((item, index) => {
            if (index > 3) {
                item.classList.add('guide__item_hidden')
            }
        })
    } 
}
   
renderItems ()

/* Изменять количество карточек при ресайзе  */

window.addEventListener("resize", () => {
    let documentWidth = document.documentElement.clientWidth

    if (documentWidth > 1024) {
        items.forEach ((item, index) => {
            if (index > 1) {
                item.classList.remove('guide__item_hidden')
            }
        })
    }

    if (documentWidth < 1024) {
        items.forEach ((item, index) => {
            if (index > 3) {
                item.classList.add('guide__item_hidden')
            }
        })
    }
})
