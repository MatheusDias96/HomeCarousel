const buttonPrev = document.querySelector('[data-js="btn"]');
const buttonNext = document.querySelector('[data-js="btn2"]');
const backgroundImage = document.querySelector('[data-js="background-image"]');
const title = document.querySelector('h1')
const paragraph = document.querySelector('p')

let counter = 1;

const addBackgroundClass = () => {
  backgroundImage.className = `background${counter}`;
};

const prevButtonClass = () => {
  counter = counter === 1 ? 3 : counter - 1;
  updateTextAndBackground();
};

const nextButtonClass = () => {
  counter = counter === 3 ? 1 : counter + 1;
  updateTextAndBackground();
};

buttonNext.addEventListener('click', nextButtonClass);
buttonPrev.addEventListener('click', prevButtonClass);