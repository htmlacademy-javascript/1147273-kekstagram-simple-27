const getRandomIntInclusive = (min, max) => {
  if (min < 0 || max < 0) {
    return NaN;
  }
  const lower = Math.ceil(Math.min(min, max));
  const upper = Math.floor(Math.max(min, max));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

// eslint-disable-next-line no-unused-vars
const getRandomArrayElement = (elements) => elements[getRandomIntInclusive(0, elements.length - 1 )];

// const maxStringLength = (string, maxLength) => {
//   if (string.length < maxLength) {
//     return true;
//   } else {
//     return false;
//   }
// };

export {getRandomArrayElement, getRandomIntInclusive};
