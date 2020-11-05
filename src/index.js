import './styles/index.scss';

import { createSplashWindow, hideSplashWindow } from './js/splash';
import { Typing, createTypingWindow, keydownListener } from './js/typing';

window.addEventListener('load', () => {
  createSplashWindow();
  createTypingWindow();
});

const gameLoop = () => {
  const typingWindow = document.querySelector('#typing-window');
  typingWindow.classList.add('show');
  const typing = new Typing();
  typingWindow.innerHTML = typing.matchString;
  document.onkeydown = keydownListener(typing);
};

document.addEventListener('click', (e) => {
  if (e.target && e.target.id === 'play') {
    hideSplashWindow();
    gameLoop();
  }
});
