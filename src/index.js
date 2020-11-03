import './styles/index.scss';

const gameWindow = document.querySelector('#main');
const word = 'word';
gameWindow.innerHTML = word;
let typed = '';
let i = 0;

document.addEventListener('keydown', (e) => {
  typed += e.key;
  if (typed[i] === word[i]) {
    gameWindow.style.backgroundColor = 'white';
    i += 1;
    if (typed === word) {
      gameWindow.style.backgroundColor = 'green';
    }
  } else {
    gameWindow.style.backgroundColor = 'red';
    i = 0;
    typed = '';
  }
});
