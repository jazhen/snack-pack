/* eslint-disable no-void */
import { words } from '../dictionary/words';

export class Typing {
  constructor() {
    this.level = 1;
    this.currentIndex = 0;
    this.inputString = '';
    this.setMatchContainer();
  }

  reset() {
    this.inputString = '';
    this.currentIndex = 0;

    const matchContainer = document.querySelector('#match-container');
    [...matchContainer.children].forEach((child) => {
      child.style.color = 'gray';
    });
  }

  setMatchString() {
    const wordsArrayAtLevel = words[this.level + 2];
    const randomWord = wordsArrayAtLevel[Math.floor(Math.random() * 100)];
    this.matchString = randomWord;
  }

  setMatchContainer() {
    this.setMatchString();

    const matchContainer = document.querySelector('#match-container');
    matchContainer.innerHTML = '';

    this.matchString.split('').forEach((char) => {
      const charSpan = document.createElement('span');
      charSpan.innerText = char;
      matchContainer.appendChild(charSpan);
    });

    const typingWindow = document.querySelector('#typing-window');
    typingWindow.innerHTML = matchContainer.outerHTML;
  }

  correctLetter() {
    return (
      this.inputString[this.currentIndex] ===
      this.matchString[this.currentIndex]
    );
  }

  match() {
    return this.inputString === this.matchString;
  }
}

export const createTypingWindow = () => {
  const typingWindow = document.createElement('div');
  typingWindow.id = 'typing-window';
  typingWindow.classList.add('hidden');

  const matchContainer = document.createElement('div');
  matchContainer.id = 'match-container';
  typingWindow.appendChild(matchContainer);

  const main = document.querySelector('#main');
  main.appendChild(typingWindow);
};

export const showTypingWindow = () => {
  const typingWindow = document.querySelector('#typing-window');
  typingWindow.classList.remove('hidden');
  typingWindow.classList.add('visible');
  return typingWindow;
};

const errorAnimation = () => {
  const matchContainer = document.querySelector('#match-container');

  // reset animation for word shake
  matchContainer.classList.remove('animate-shake');
  void matchContainer.offsetWidth;
  matchContainer.classList.add('animate-shake');

  // reset animation for word highlight
  [...matchContainer.children].forEach((child) => {
    child.classList.remove('animate-highlight');
    void child.offsetWidth;
    child.classList.add('animate-highlight');
  });
};

export const keyDownListener = () => {
  const typing = new Typing();
  const matchContainer = document.querySelector('#match-container');

  document.addEventListener('keydown', ({ key }) => {
    const currentLetter = matchContainer.children[typing.currentIndex];
    typing.inputString += key;

    if (typing.correctLetter()) {
      currentLetter.style.color = 'black';
      typing.currentIndex += 1;

      if (typing.match()) {
        typing.level += 1;
        typing.setMatchContainer();
        typing.reset();
      }
    } else {
      errorAnimation();
      typing.reset();
    }
  });
};
