import { words } from '../dictionary/words';

const main = document.querySelector('#main');

export class Typing {
  constructor() {
    this.words = words;
    this.level = 1;
    this.matchString = '';
    this.matchContainer = null;
    this.userString = '';
    this.stringIndex = 0;
    this.setMatchString();
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

export const createTypingWindow = () => {
  const typingWindow = document.createElement('div');
  typingWindow.id = 'typing-window';
  typingWindow.classList.add('hidden');
  main.appendChild(typingWindow);
};

export const keydownListener = (t) => {
  const typing = t;
  document.addEventListener('keydown', (e) => {
    typing.userString += e.key;
    if (
      typing.userString[typing.stringIndex] ===
      typing.matchString[typing.stringIndex]
    ) {
      main.style.backgroundColor = 'white';
      typing.stringIndex += 1;
      if (typing.userString === typing.matchString) {
        main.style.backgroundColor = 'green';
        typing.level += 1;
        typing.setMatchString();
        main.innerHTML = typing.matchString;
        typing.reset();
      }
    } else {
      main.style.backgroundColor = 'red';
      typing.stringIndex = 0;
      typing.userString = '';
    }
  });
};
