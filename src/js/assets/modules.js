import { FONT, COLOR } from '../constants';

export const ASSETS_DEFAULT_OPTIONS = {
  size: FONT.THREE_QUARTERS_BASE_SIZE,
  color: COLOR.BLACK,
};

export const ASSETS_LOADING_BACKGROUND_COLOR = '#dddddd';

export const FILENAMES = [
  'angelist',
  'avoidBackground',
  'avoidEnemy',
  'avoidSelf',
  'controlsMouse',
  'controlsSpace',
  'controlsWASD',
  'door',
  'doorBackground',
  'fighterBackground',
  'fighterOpponent',
  'fighterSelf',
  'github',
  'linkedin',
  'locate',
  'locateBackground',
  'lose',
  'mainMenuBackground',
  'mute',
  'speaker',
  'wanted',
];

export const getAssetFilePath = (filename) => `../assets/${filename}.png`;

export const drawErrorMessage = () => {
  window.canvas.drawText({
    ...ASSETS_DEFAULT_OPTIONS,
    text: 'error loading assets.',
    y: 150 - FONT.ONE_AND_A_HALF_BASE_SIZE,
  });

  window.canvas.drawText({
    ...ASSETS_DEFAULT_OPTIONS,
    text: 'please try refreshing your browser.',
    y: 150 + FONT.ONE_AND_A_HALF_BASE_SIZE,
  });
};

export const loadAsset = (filename) => {
  return new Promise((resolve, reject) => {
    window.assets[filename] = new Image();
    window.assets[filename].src = getAssetFilePath(filename);
    window.assets[filename].addEventListener('load', resolve, false);
    window.assets[filename].addEventListener('error', reject, false);
  });
};
