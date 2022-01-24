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

//CurrentSectionLink

const sections = document.querySelectorAll('section[id]')

function activeCurrentSection() {
  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 3

  for (const section of sections) {
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionId = section.getAttribute('id')
    const checkStart = checkpoint >= sectionTop
    const checkEnd = checkpoint <= sectionTop + sectionHeight

    if (checkStart && checkEnd) {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.add('active-link')
    } else {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.remove('active-link')
    }
  }
}

document.addEventListener('scroll', () => {
  activeCurrentSection()
})
