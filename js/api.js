const getPhotos = () =>
  fetch('https://27.javascript.pages.academy/kekstagram-simple/data')
    .then((response) => response.json());

export {getPhotos};
