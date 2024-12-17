let indexNow = 0
const images = ['img1', 'img2', 'img3', 'img4']

function showImages() {
    const imgNow = document.getElementById('img-home');

    imgNow.classList.remove(images[indexNow]);

    indexNow = (indexNow + 1) % images.length;

    imgNow.classList.add(images[indexNow]);
}

setInterval(showImages, 4000)

function toggleAccordion(accordion) {
    const body = accordion.querySelector('.accordion-body')
    const arrow = accordion.querySelector('.icon-arrow')

    body.classList.toggle('body-active')
    arrow.classList.toggle('icon-arrow-active')
}

let currentIndex = 0

function getAdjustedWidth() {
    return window.innerWidth / window.devicePixelRatio
}

function showSlides() {
    const items = document.querySelectorAll('.item')
    const totalItems = items.length
    let itemsToShow

    const adjustedWidth = getAdjustedWidth()

    if (adjustedWidth >= 1000) {
        itemsToShow = 3
    } else if (adjustedWidth > 500) {
        itemsToShow = 2
    } else {
        itemsToShow = 1
    }

    items.forEach((item, index) => {
        item.style.display = (index >= currentIndex && index < currentIndex + itemsToShow) ? 'block' : 'none'
    })

    document.querySelector('.next').classList.toggle('button-disabled', currentIndex >= totalItems - itemsToShow)
    document.querySelector('.prev').classList.toggle('button-disabled', currentIndex === 0)
}

window.addEventListener('DOMContentLoaded', showSlides)
window.addEventListener('resize', showSlides)


function nextSlide() {
    const items = document.querySelectorAll('.item')
    const totalItems = items.length
    
    if (currentIndex < totalItems - (window.innerWidth >= 1000 ? 3 : window.innerWidth >= 500 ? 2 : 1)) {
        currentIndex += 1
        showSlides()
    }
}

function prevSlide() {
    if (currentIndex > 0) {
        currentIndex -= 1
        showSlides()
    }
}

window.addEventListener('DOMContentLoaded', showSlides)
window.addEventListener('resize', showSlides)

function toggleClass(element) {
    const options = document.querySelectorAll('.options-form > div')
    options.forEach(opt => {
        opt.classList.remove('opt-selection')
    })
    element.classList.add('opt-selection')

    const form1 = document.querySelector('.form-contato')
    const form2 = document.querySelector('.form-orcamento')
    const form3 = document.querySelector('.form-locacao')
    const form4 = document.querySelector('.form-trabalhe-conosco')


    switch (element.id) {
        case 'contato':
            form1.classList.remove('form-selection')
            form2.classList.add('form-selection')
            form3.classList.add('form-selection')
            form4.classList.add('form-selection')
            break
        case 'orcamento':
            form1.classList.add('form-selection')
            form2.classList.remove('form-selection')
            form3.classList.add('form-selection')
            form4.classList.add('form-selection')
            break
        case 'locacao':
            form1.classList.add('form-selection')
            form2.classList.add('form-selection')
            form3.classList.remove('form-selection')
            form4.classList.add('form-selection')
            break
        case 'trabalhe-conosco':
            form1.classList.add('form-selection')
            form2.classList.add('form-selection')
            form3.classList.add('form-selection')
            form4.classList.remove('form-selection')
            break
    }
}

function smoothScroll(targetElement, duration) {
    const headerHeight = document.querySelector('header').offsetHeight + 20
    const targetPosition = targetElement.getBoundingClientRect().top - headerHeight
    const startPosition = window.pageYOffset
    let startTime = null

    function animation(currentTime) {
        if (startTime === null) startTime = currentTime
        const timeElapsed = currentTime - startTime
        const run = ease(timeElapsed, startPosition, targetPosition, duration)
        window.scrollTo(0, run)
        if (timeElapsed < duration) requestAnimationFrame(animation)
    }

    function ease(t, b, c, d) {
        t /= d / 2
        if (t < 1) return c / 2 * t * t + b
        t--
        return -c / 2 * (t * (t - 2) - 1) + b
    }

    requestAnimationFrame(animation)
}

function contato() {
    const options = document.querySelectorAll('.options-form > div')

    options.forEach(opt => {
      opt.classList.remove('opt-selection')
    })

    document.querySelector("#contato").classList.add('opt-selection')

    const form1 = document.querySelector('.form-contato')
    const form2 = document.querySelector('.form-orcamento')
    const form3 = document.querySelector('.form-locacao')
    const form4 = document.querySelector('.form-trabalhe-conosco')

    form1.classList.remove('form-selection')
    form2.classList.add('form-selection')
    form3.classList.add('form-selection')
    form4.classList.add('form-selection')

    smoothScroll(document.getElementById('contacts'), 2000)
}

function orcamento() {
    const options = document.querySelectorAll('.options-form > div')

    options.forEach(opt => {
      opt.classList.remove('opt-selection')
    })

    document.querySelector("#orcamento").classList.add('opt-selection')

    const form1 = document.querySelector('.form-contato')
    const form2 = document.querySelector('.form-orcamento')
    const form3 = document.querySelector('.form-locacao')
    const form4 = document.querySelector('.form-trabalhe-conosco')

    form1.classList.add('form-selection')
    form2.classList.remove('form-selection')
    form3.classList.add('form-selection')
    form4.classList.add('form-selection')
    smoothScroll(document.getElementById('contacts'), 2000)
}

function locacao() {
    const options = document.querySelectorAll('.options-form > div')

    options.forEach(opt => {
      opt.classList.remove('opt-selection')
    })

    document.querySelector("#locacao").classList.add('opt-selection')

    const form1 = document.querySelector('.form-contato')
    const form2 = document.querySelector('.form-orcamento')
    const form3 = document.querySelector('.form-locacao')
    const form4 = document.querySelector('.form-trabalhe-conosco')

    form1.classList.add('form-selection')
    form2.classList.add('form-selection')
    form3.classList.remove('form-selection')
    form4.classList.add('form-selection')

    smoothScroll(document.getElementById('contacts'), 2000)
}

function menuToggle() {
    const open = document.querySelector('#menu-open')
    const close = document.querySelector('#menu-close')
    const menu = document.querySelector('.list-header')

    open.classList.toggle('icon-menu-active')
    close.classList.toggle('icon-close-active')
    menu.classList.toggle('mobile-list')
}