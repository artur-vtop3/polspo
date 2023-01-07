const windowInnerWidth = window.innerWidth
if (windowInnerWidth <= 1280) {
  const swiper = new Swiper('.swiper', {
    speed: 400,
    autoplay: {
      delay: 5000,
    },
    slidesPerView: 1,
    spaceBetween: 0,
  })
  const swiper2 = new Swiper('.swiper-2', {
    speed: 400,
    autoplay: {
      delay: 5000,
    },
    wrapperClass: 'clients-images',
    slideClass: 'clients-img',
    slidesPerView: 1,
    spaceBetween: 20,
    // autoHeight: true,
    breakpoints: {
      640: {
        slidesPerView: 2,
        grid: {
          rows: 2,
          fill: 'row',
        },
      },
    },
  })
}
const bgTexts = document.querySelectorAll('.bg-text')
const callback = (entry) => {
  entry[0].target.classList.add('bg-text-anim')
}
const callbackAbout = (entry) => {}
const options = {
  threshold: 1,
}
const observer = new IntersectionObserver(callback, options)
const observerAbout = new IntersectionObserver(callbackAbout, {
  threshold: 0.5,
})
const menuBtn = document.querySelector('.header-menu-button img')
const menu = document.querySelector('.header-nav')
const body = document.body
const bannerH = document
  .querySelector('.banner-img')
  .getBoundingClientRect().height
const firstAnim = document
  .querySelector('.bg-text')
  .getBoundingClientRect().height
const aboutImg = document.querySelector('.about-img')
const aboutText = document.querySelector('.about-text')

body.addEventListener('scroll', () => {
  const banner = document.querySelector('.banner-img').getBoundingClientRect()
  if (banner.top < 0) {
    const open = '/assets/img/menu.svg'
    menuBtn.src = open
    menu.classList.add('hidden')
  }
  if (banner.top - firstAnim / 1.6 < -bannerH) {
    bgTexts.forEach((element) => {
      observer.observe(element)
    })
  }
  const aboutTop = aboutText.getBoundingClientRect().top
  const aboutHeight = aboutText.getBoundingClientRect().height
  if (aboutTop < aboutHeight && document.documentElement.clientWidth > 1280) {
    aboutImg.classList.add('about-img-anim')
    aboutText.classList.add('about-text-anim')
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

const aboutBtn = document.querySelector('.about-button')

aboutBtn.addEventListener('click', () => {
  aboutText.classList.toggle('flex')
  aboutBtn.querySelector('span').textContent == 'развернуть текст'
    ? (aboutBtn.querySelector('span').textContent = 'свернуть текст')
    : (aboutBtn.querySelector('span').textContent = 'развернуть текст')
})

const modal = document.querySelector('.modal')
const modalOpen = document.querySelector('.modal-open')
const modalClose = document.querySelector('.modal-close')

modalOpen.addEventListener('click', () => {
  modal.classList.toggle('hidden')
})
modalClose.addEventListener('click', () => {
  modal.classList.toggle('hidden')
})
