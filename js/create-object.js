import {getRandomArrayElement} from './util.js';
import {getRandomIntInclusive} from './util.js';
import {MIN_LIKES, MAX_LIKES, MIN_COMMENTS, MAX_COMMENTS, DESC_PHOTOS} from './data.js';

const createPicture = (index) => ({
  id: index,
  url: `photos/${index}.jpg`,
  description: getRandomArrayElement(DESC_PHOTOS),
  ikes: getRandomIntInclusive(MIN_LIKES, MAX_LIKES),
  comments: getRandomIntInclusive(MIN_COMMENTS, MAX_COMMENTS),
});

const createObjects = () => Array.from({length: 25}, (_, idIndex) => createPicture(idIndex + 1));

export {createObjects, createPicture};
