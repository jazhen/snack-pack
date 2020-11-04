import { words } from './dictionary/words';
import './styles/index.scss';

const gameWindow = document.querySelector('#main');

class Typing {
  constructor() {
    this.words = words;
    this.level = 1;
    this.matchString = '';
    this.userString = '';
    this.stringIndex = 0;
  }

  reset() {
    this.userString = '';
    this.stringIndex = 0;
  }

  setMatchString() {
    const wordLevel = this.words[this.level + 2];
    const randWord = wordLevel[Math.floor(Math.random() * 100)];
    this.matchString = randWord;
  }
}

const typing = new Typing();
typing.setMatchString();
gameWindow.innerHTML = typing.matchString;

document.addEventListener('keydown', (e) => {
  typing.userString += e.key;
  if (
    typing.userString[typing.stringIndex] ===
    typing.matchString[typing.stringIndex]
  ) {
    gameWindow.style.backgroundColor = 'white';
    typing.stringIndex += 1;
    if (typing.userString === typing.matchString) {
      gameWindow.style.backgroundColor = 'green';
    }
  } else {
    gameWindow.style.backgroundColor = 'red';
    typing.stringIndex = 0;
    typing.userString = '';
  }
});
