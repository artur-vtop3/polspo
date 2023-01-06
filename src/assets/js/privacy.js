const menuBtn = document.querySelector('.header-menu-button img')
const menu = document.querySelector('.header-nav')
const body = document.body
body.addEventListener('scroll', () => {
  const banner = document.querySelector('.main').getBoundingClientRect()
  if (banner.top < 0) {
    const open = '/assets/img/menu.svg'
    menuBtn.src = open
    menu.classList.add('hidden')
  }
})

const menuItems = document.querySelectorAll('.menu-item-parent')
menuItems.forEach((element) => {
  const link = element.querySelector('a')
  link.addEventListener('click', (e) => {
    e.preventDefault()
    if (element.classList.contains('active')) {
      element.classList.toggle('active')
      return
    }

    const siblings = element.parentNode.childNodes
    siblings.forEach((sibling) => {
      sibling.classList.contains('active')
        ? sibling.classList.remove('active')
        : false
    })
    element.classList.add('active')
  })
})

menuBtn.addEventListener('click', (e) => {
  const close = '/assets/img/close.svg'
  const open = '/assets/img/menu.svg'
  console.log(e.target.src)
  e.target.src.includes(open) ? (e.target.src = close) : (e.target.src = open)
  menu.classList.toggle('hidden')
})