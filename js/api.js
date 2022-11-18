import {showAlert} from './util.js';
import {createSimilarPhotosAbove} from './thumbs.js';
import { formUpload } from './form.js';

const success = document.querySelector('#success')
  .content
  .querySelector('.success');

const err = document.querySelector('#error')
  .content
  .querySelector('.error');

const onPopupEscKeydown = (evt) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    success.remove();
    err.remove();
    document.removeEventListener('keydown', onPopupEscKeydown);
  }
};

const createSuccess = () => {
  document.body.appendChild(success);
  document.addEventListener('keydown', onPopupEscKeydown);
  success.addEventListener('click', () => {
    success.remove();
    document.removeEventListener('keydown', onPopupEscKeydown);
  });
};

const createErr = () => {
  document.body.appendChild(err);
  document.addEventListener('keydown', onPopupEscKeydown);
  err.addEventListener('click', () => {
    err.remove();
    document.removeEventListener('keydown', onPopupEscKeydown);
  });
};

const getPhotos = () =>
  fetch('https://27.javascript.pages.academy/kekstagram-simple/data')
    .then((response) => response.json())
    .then((photos) => {createSimilarPhotosAbove(photos);})
    .catch(() => {
      showAlert('Не удалось отправить форму. Попробуйте ещё раз');
    });

const setUserFormSubmit = (onSuccess) => {
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
        createErr();
      }
    })
      .catch(() => {
        createErr();
      });
  });
};

export {getPhotos, setUserFormSubmit};
