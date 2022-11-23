import {resetScale} from './scale.js';
import {resetEffects} from './effect.js';

const uploadFile = document.getElementById('upload-file');
const formEditImg = document.querySelector('.img-upload__overlay');
const body = document.querySelector('body');
const formUpload = document.querySelector('.img-upload__form');
const closeOpenModal = document.getElementById('upload-cancel');

const closeUserModal = () => {
  formEditImg.classList.add('hidden');
  body.classList.remove('modal-open');
  formUpload.reset();
  resetScale();
  resetEffects();
  uploadFile.value = '';
};

const onPopupEscKeydown = (evt) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    document.removeEventListener('keydown', onPopupEscKeydown);
    closeUserModal();
  }
};

const setFormHandlers = () => {
  uploadFile.addEventListener('change', () => {
    formEditImg.classList.remove('hidden');
    body.classList.add('modal-open');
    document.addEventListener('keydown', onPopupEscKeydown);
  });
  closeOpenModal.addEventListener('click', () => {
    closeUserModal();
    document.removeEventListener('keydown', onPopupEscKeydown);
  });
};

const success = document.querySelector('#success')
  .content
  .querySelector('.success');

const error = document.querySelector('#error')
  .content
  .querySelector('.error');

const onPopupMessageEscKeydown = (evt) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    success.remove();
    error.remove();
    document.removeEventListener('keydown', onPopupMessageEscKeydown);
    document.addEventListener('keydown', onPopupEscKeydown);
  }
};

const createSuccess = () => {
  document.body.appendChild(success);
  closeUserModal();
  document.addEventListener('keydown', onPopupMessageEscKeydown);
  success.addEventListener('click', () => {
    success.remove();
    document.removeEventListener('keydown', onPopupMessageEscKeydown);
  });
};

const createError = () => {
  document.body.appendChild(error);
  document.removeEventListener('keydown', onPopupEscKeydown);
  document.addEventListener('keydown', onPopupMessageEscKeydown);
  error.addEventListener('click', () => {
    error.remove();
    document.addEventListener('keydown', onPopupEscKeydown);
  });
};

export {setFormHandlers, closeUserModal, formUpload, createSuccess, createError};
