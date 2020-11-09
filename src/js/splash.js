export const createSplashWindow = () => {
  const playButton = document.createElement('button');
  playButton.type = 'button';
  playButton.id = 'play';
  playButton.innerHTML = 'play';

  const instructionsButton = document.createElement('button');
  instructionsButton.type = 'button';
  instructionsButton.id = 'instructions';
  instructionsButton.innerHTML = 'instructions';

  const splashButtons = document.createElement('div');
  splashButtons.id = 'splash-buttons';
  splashButtons.appendChild(playButton);
  splashButtons.appendChild(instructionsButton);

  const splashWindow = document.createElement('div');
  splashWindow.id = 'splash-window';
  splashWindow.append(splashButtons);

  const main = document.querySelector('#main');
  main.appendChild(splashWindow);
};

export const hideSplashWindow = () => {
  const splashWindow = document.querySelector('#splash-window');
  splashWindow.classList.add('hidden');
};
