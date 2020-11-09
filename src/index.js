import './styles/index.scss';

import { createSplashWindow, hideSplashWindow } from './js/splash';
import {
  createTypingWindow,
  showTypingWindow,
  keyDownListener,
} from './js/typing';
import {
  createRepeatWindow,
  // showRepeatWindow,
  // keyUpListener,
} from './js/repeat';

window.addEventListener('load', () => {
  createSplashWindow();
  createTypingWindow();
  createRepeatWindow();
});

const gameLoop = () => {
  const typingWindow = showTypingWindow();
  typingWindow.onkeydown = keyDownListener();
  // const repeatWindow = showRepeatWindow();
  // repeatWindow.onkeydown = keyUpListener();
};

document.addEventListener('click', (e) => {
  if (e.target && e.target.id === 'play') {
    hideSplashWindow();
    gameLoop();
  }
});
