import './styles/index.scss';

import createSplash from './js/splash';
import { Typing, keydownListener } from './js/typing';

const gameWindow = document.querySelector('#main');
document.body.onload = createSplash;

const gameLoop = () => {
  const typing = new Typing();
  typing.setMatchString();
  gameWindow.innerHTML = typing.matchString;
  document.onkeydown = keydownListener(typing);
};

document.addEventListener('click', (e) => {
  if (e.target && e.target.id === 'play') {
    const splashButtons = document.querySelector('.splash-buttons');
    splashButtons.style.display = 'none';
    gameLoop();
  }
});
