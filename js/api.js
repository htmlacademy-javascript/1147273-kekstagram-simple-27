import {showAlert} from './util.js';
import { formUpload, createSuccess} from './form.js';

const getPhotos = (onSuccess) =>
  fetch('https://27.javascript.pages.academy/kekstagram-simple/data')
    .then((response) => response.json())
    .then((photos) => {onSuccess(photos);})
    .catch(() => {
      showAlert('Не удалось отправить форму. Попробуйте ещё раз');
    });

const setUserFormSubmit = (onSuccess, onFail) => {
  formUpload.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const formData = new FormData(evt.target);
    fetch(
      'https://27.javascript.pages.academy/kekstagram-simple',
      {
        method: 'POST',
        body: formData,
      },
    ).then((response) => {
      if (response.ok) {
        onSuccess();
        createSuccess();
      } else {
        onFail();
      }
    })
      .catch(() => {
        onFail();
      });
  });
};

export {getPhotos, setUserFormSubmit};
