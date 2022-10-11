const maxStringLength = (string, maxLength) => {
  if (string.length < maxLength) {
    return true;
  } else {
    return false;
  }
};

maxStringLength();

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}

getRandomIntInclusive();
