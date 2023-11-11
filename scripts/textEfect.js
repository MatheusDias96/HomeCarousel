const title = document.querySelector('h1')
const paragraph = document.querySelector('p')
const span = document.querySelector('span')

const textBG1 = {
  h1: 'DESIGN',
  p: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum.',
}

const textBG2 = {
  h1: 'MOTION',
  p: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum.',
}

const textBG3 = {
  h1: 'ENGINE',
  p: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum..',
}

const textTransitionEffect = () => {
  title.style.transition = 'opacity 0.8s ease'
  paragraph.style.transition = 'opacity 0.8s ease'
}

const insertTextInBG = ({ h1, p }) => {
  textTransitionEffect()
  title.style.opacity = '0'
  paragraph.style.opacity = '0'
  span.style.opacity = '0'

  setTimeout(() => {
    title.textContent = h1
    paragraph.textContent = p
    title.style.opacity = '1'
    paragraph.style.opacity = '1'
    span.style.opacity = '1'
  }, 555)
}

const updateTextandParagraph = () => {
  const textObj = {
    1: textBG1,
    2: textBG2,
    3: textBG3,
  }

  insertTextInBG(textObj[counter])
  addBackgroundClass()
}
