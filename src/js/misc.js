/**
 * Open the url in a new browser tab.
 * @param {string} url
 */
export const openUrlInNewTab = (url) => window.open(url, '_blank');

/**
 * Returns a random integer between 0 and max, exclusive at the max.
 * @param {number} max
 * @returns {number}
 */
export const getRandomInt = (max = 1) => {
  max = Math.floor(max);

  return Math.floor(Math.random() * max);
};

/**
 * Returns a random integer 0 and max, inclusive.
 * @param {number} max
 * @returns {number}
 */
export const getRandomIntInclusive = (max = 1) => {
  max = Math.floor(max);

  return Math.floor(Math.random() * max + 1);
};
