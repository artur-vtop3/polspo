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
    element.classList.toggle('active')
  })
})

menuBtn.addEventListener('click', (e) => {
  const close = '/assets/img/close.svg'
  const open = '/assets/img/menu.svg'

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
