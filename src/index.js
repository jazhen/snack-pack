import './styles/index.scss';

import { createSplashWindow, hideSplashWindow } from './js/splash';
import {
  createTypingWindow,
  // showTypingWindow,
  // keydownListener,
} from './js/typing';
import {
  createRepeatWindow,
  showRepeatWindow,
  repeatKeydownListener,
} from './js/repeat';

window.addEventListener('load', () => {
  createSplashWindow();
  createTypingWindow();
  createRepeatWindow();
});

const gameLoop = () => {
  // const typingWindow = showTypingWindow();
  // typingWindow.onkeydown = keydownListener();

  const repeatWindow = showRepeatWindow();
  repeatWindow.onkeydown = repeatKeydownListener();
};

document.addEventListener('click', (e) => {
  if (e.target && e.target.id === 'play') {
    hideSplashWindow();
    gameLoop();
  }
});
