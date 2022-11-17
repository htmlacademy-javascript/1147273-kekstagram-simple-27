const getPhotos = () =>
  fetch('https://27.javascript.pages.academy/kekstagram-simple/data')
    .then((response) => response.json())
    .catch((err) => {
      // eslint-disable-next-line no-console
      console.error(err);
    });
export {getPhotos};
