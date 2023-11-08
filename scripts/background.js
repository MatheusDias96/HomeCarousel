const buttonPrev = document.querySelector('[data-js="btn"]');
const buttonNext = document.querySelector('[data-js="btn2"]');
const backgroundImage = document.querySelector('[data-js="background-image"]');

let counter = 1;

const addBackgroundClass = () => {
  backgroundImage.className = `background${counter}`;
};

const prevButtonClass = () => {
  counter = counter === 1 ? 3 : counter - 1;
  addBackgroundClass();
};

const nextButtonClass = () => {
  counter = counter === 3 ? 1 : counter + 1;
  addBackgroundClass();
};

buttonNext.addEventListener('click', nextButtonClass);
buttonPrev.addEventListener('click', prevButtonClass);