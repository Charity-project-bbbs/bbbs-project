const form = document.querySelector('.questions__form')
const text = document.querySelector('.questions__result')

form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    form.classList.add('questions__form_hidden')
    text.classList.remove('questions__result_hidden')
})