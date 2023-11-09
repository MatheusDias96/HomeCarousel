const buttonPrev = document.querySelector('[data-js="btn"]');
const buttonNext = document.querySelector('[data-js="btn2"]');
const backgroundImage = document.querySelector('[data-js="background-image"]');

const colorElements = [
  document.querySelector('[data-js="active-color1"]'),
  document.querySelector('[data-js="active-color2"]'),
  document.querySelector('[data-js="active-color3"]'),
];

let counter = 1;

const addBackgroundClass = () => {
  backgroundImage.className = `background${counter}`;
};

const carouselControlColor = () => {
  colorElements.forEach((color, index) => {
    const isActive = counter === index + 1;
    color.classList.toggle('active-color', isActive);
    color.classList.toggle('off-color', !isActive);
  });
};

const prevButtonClass = () => {
  counter = counter === 1 ? 3 : counter - 1;
  updateTextAndBackground();
  carouselControlColor();
};

const nextButtonClass = () => {
  counter = counter === 3 ? 1 : counter + 1;
  updateTextAndBackground();
  carouselControlColor();
};

buttonNext.addEventListener('click', nextButtonClass);
buttonPrev.addEventListener('click', prevButtonClass);