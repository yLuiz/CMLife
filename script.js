let btnMenu = document.querySelector('#btn-menu')
let menu = document.querySelector('#menu')
btnMenu.addEventListener('click', () => {
  menu.classList.toggle('active')
})

window.addEventListener('click', () => {
  menu.classList.remove('active')
})

btnMenu.addEventListener('click', event => {
  event.stopPropagation()
})
