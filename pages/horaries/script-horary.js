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

//ARROW UP TO TOP

let section = document.querySelector('#ortopedia')
let arrowUpButton = document.querySelector('#arrowUpButton')
const sectionHeight = section.offsetHeight //434

function arrowUpAppear() {
  const checkpoint = window.pageYOffset
  if (checkpoint > sectionHeight) {
    arrowUpButton.classList.add('show')
  } else {
    arrowUpButton.classList.remove('show')
  }
}
document.addEventListener('scroll', arrowUpAppear)
