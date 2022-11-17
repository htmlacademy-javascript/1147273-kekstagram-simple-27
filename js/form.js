import {resetScale} from './scale.js';
import {resetEffects} from './effect.js';

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

formUpload.addEventListener('submit', (evt) => {
  evt.preventDefault();

});

export {setFormHandlers};
