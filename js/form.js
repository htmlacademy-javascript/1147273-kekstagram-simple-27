import {resetScale} from './scale.js';
import {resetEffects} from './effect.js';
import {showAlert} from './util.js';

const uploadFile = document.getElementById('upload-file');
const formEditImg = document.querySelector('.img-upload__overlay');
const body = document.querySelector('body');
const formUpload = document.querySelector('.img-upload__form');
const closeOpenModal = document.getElementById('upload-cancel');

const onPopupEscKeydown = (evt) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    formEditImg.classList.add('hidden');
    body.classList.remove('modal-open');
    document.removeEventListener('keydown', onPopupEscKeydown);
  }
};

const setFormHandlers = () => {
  uploadFile.addEventListener('change', () => {
    formEditImg.classList.remove('hidden');
    body.classList.add('modal-open');
    document.addEventListener('keydown', onPopupEscKeydown);
  });
  closeOpenModal.addEventListener('click', () => {
    formEditImg.classList.add('hidden');
    body.classList.remove('modal-open');
    formUpload.reset();
    resetScale();
    resetEffects();
    document.removeEventListener('keydown', onPopupEscKeydown);
  });
};

const closeUserModal = () => {
  formEditImg.classList.add('hidden');
};

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
      } else {
        showAlert('Не удалось отправить форму. Попробуйте ещё раз');
      }
    })
      .catch(() => {
        showAlert('Не удалось отправить форму. Попробуйте ещё раз');
      });
  });
};


export {setFormHandlers, setUserFormSubmit, closeUserModal};
