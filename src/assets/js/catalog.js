const menuBtn = document.querySelector('.header-menu-button img')
const menu = document.querySelector('.header-nav')
const body = document.body
const bgTexts = document.querySelectorAll('.bg-text')
const callback = (entry) => {
  entry[0].target.classList.add('bg-text-anim')
}
const options = {
  threshold: 1,
}
const observer = new IntersectionObserver(callback, options)

const firstAnim = document
  .querySelector('.bg-text')
  .getBoundingClientRect().height
body.addEventListener('scroll', () => {
  const banner = document.querySelector('.main').getBoundingClientRect()
  if (banner.top < 0) {
    const open = '/assets/img/menu.svg'
    menuBtn.src = open
    menu.classList.add('hidden')
  }
  if (banner.top - firstAnim / 1.6 < -100) {
    bgTexts.forEach((element) => {
      observer.observe(element)
    })
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
const windowInnerWidth = window.innerWidth
if (windowInnerWidth <= 620) {
  const swiper = new Swiper('.products-slider', {
    wrapperClass: 'products-slider-wrapper',

    slideClass: 'products-item',

    speed: 400,
    autoplay: {
      delay: 5000,
    },
    slidesPerView: 1,
    spaceBetween: 20,
  })
}
const tabItems = document.querySelectorAll('.products-tab')
const blockItems = document.querySelectorAll('.block')
tabItems.forEach((element) => {
  element.addEventListener('click', (e) => {
    const block = element.dataset.block
    blockItems.forEach((b) => {
      if (b.dataset.block === block) {
        b.classList.remove('hidden')
        return
      }
      b.classList.add('hidden')
    })
    tabItems.forEach((element) => {
      element.classList.remove('active')
    })
    element.classList.toggle('active')
  })
})
const descBtn = document.querySelector('.products-desc-button')
descBtn.addEventListener('click', () => {
  if (descBtn.childNodes[2].textContent == 'Свернуть') {
    descBtn.previousElementSibling.setAttribute('style', '')
    descBtn.childNodes[2].textContent = 'Подробнее'
    return
  }
  descBtn.previousElementSibling.setAttribute('style', 'max-height: 100%')
  descBtn.childNodes[2].textContent = 'Свернуть'
})
