import './styles/index.scss';

import { createSplashWindow, hideSplashWindow } from './js/splash';
import {
  Typing,
  createTypingWindow,
  showTypingWindow,
  keydownListener,
} from './js/typing';

window.addEventListener('load', () => {
  createSplashWindow();
  createTypingWindow();
});

const gameLoop = () => {
  const typingWindow = showTypingWindow();
  const typing = new Typing();
  typingWindow.onkeydown = keydownListener(typing);
};

document.addEventListener('click', (e) => {
  if (e.target && e.target.id === 'play') {
    hideSplashWindow();
    gameLoop();
  }
});
