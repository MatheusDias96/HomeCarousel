const textTransitionEffect = () => {
  title.style.transition = 'opacity 0.8s ease';
  paragraph.style.transition = 'opacity 0.8s ease';
};

const insertTextInBG = ({ h1, p }) => {
  textTransitionEffect();
  title.style.opacity = '0';
  paragraph.style.opacity = '0';

  setTimeout(() => {
    title.textContent = h1;
    paragraph.textContent = p;
    title.style.opacity = '1';
    paragraph.style.opacity = '1';
  }, 555);
};

const updateTextAndBackground = () => {
  const textObj = {
    1: textBG1,
    2: textBG2,
    3: textBG3,
  };

  insertTextInBG(textObj[counter]);
  addBackgroundClass();
};