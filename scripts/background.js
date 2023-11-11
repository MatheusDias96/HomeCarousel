const buttonPrev = document.querySelector('[data-js="btn"]')
const buttonNext = document.querySelector('[data-js="btn2"]')
const backgroundImage = document.querySelector('[data-js="background-image"]')
const colorElements = [
  document.querySelector('[data-js="active-color1"]'),
  document.querySelector('[data-js="active-color2"]'),
  document.querySelector('[data-js="active-color3"]'),
]
let counter = 1
let isTransitioning = false

const addBackgroundClass = () => {
  backgroundImage.className = `background${counter}`
}

const carouselControlColor = () => {
  colorElements.forEach((color, index) => {
    const isActive = counter === index + 1
    color.classList.toggle('active-color', isActive)
    color.classList.toggle('off-color', !isActive)
  })
}

const prevButtonClass = () => {
  if (isTransitioning) return
  counter = counter === 1 ? 3 : counter - 1
  updateTextandParagraph()
  carouselControlColor()
}

const nextButtonClass = () => {
  if (isTransitioning) return
  counter = counter === 3 ? 1 : counter + 1
  updateTextandParagraph()
  carouselControlColor()
}

const updateTextAndBackground = () => {
  isTransitioning = true
  addBackgroundClass()
  carouselControlColor()
  setTimeout(() => {
    isTransitioning = false
  }, 1000) // Tempo de transição em milissegundos, ajuste conforme necessário
}

buttonNext.addEventListener('click', nextButtonClass)
buttonPrev.addEventListener('click', prevButtonClass)
