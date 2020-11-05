const createSplash = () => {
  const splashButtons = document.createElement('div');
  splashButtons.setAttribute('class', 'splash-buttons');

  const playButton = document.createElement('button');
  playButton.setAttribute('type', 'button');
  playButton.setAttribute('id', 'play');
  playButton.appendChild(document.createTextNode('play'));

  const instructionsButton = document.createElement('button');
  instructionsButton.setAttribute('type', 'button');
  instructionsButton.setAttribute('id', 'instructions');
  instructionsButton.appendChild(document.createTextNode('instructions'));

  splashButtons.appendChild(playButton);
  splashButtons.appendChild(instructionsButton);
  const main = document.querySelector('#main');
  main.appendChild(splashButtons);
};

export default createSplash;
