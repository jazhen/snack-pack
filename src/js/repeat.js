export class Repeat {
  constructor() {
    this.level = 1;
    this.setValue();
  }

  setValue() {
    this.value = 11 - this.level;
  }
}

export const createRepeatWindow = () => {
  const RepeatWindow = document.createElement('div');
  RepeatWindow.id = 'repeat-window';
  RepeatWindow.classList.add('hidden');

  const progressBar = document.createElement('progress');
  progressBar.id = 'progress-bar';
  progressBar.max = 100;
  progressBar.value = 0;
  RepeatWindow.append(progressBar);

  const main = document.querySelector('#main');
  main.appendChild(RepeatWindow);
};

export const showRepeatWindow = () => {
  const RepeatWindow = document.querySelector('#repeat-window');
  RepeatWindow.classList.remove('hidden');
  RepeatWindow.classList.add('visible');
  return RepeatWindow;
};

export const keyUpListener = () => {
  const repeat = new Repeat();
  document.addEventListener('keyup', ({ key }) => {
    const progressBar = document.querySelector('#progress-bar');
    if (key === ' ') {
      progressBar.value += repeat.value;
    }
    if (progressBar.value === 100) {
      progressBar.value = 0;
      repeat.level += 1;
      repeat.setValue();
    }
  });
};
