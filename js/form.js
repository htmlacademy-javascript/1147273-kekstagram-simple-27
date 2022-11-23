import {resetScale} from './scale.js';
import {resetEffects} from './effect.js';

const uploadFileElement = document.querySelector('#upload-file');
const imageFormElement = document.querySelector('.img-upload__overlay');
const bodyElement = document.querySelector('body');
const formUploadElement = document.querySelector('.img-upload__form');
const closeOpenModalElement = document.querySelector('#upload-cancel');

const closeUserModal = () => {
  imageFormElement.classList.add('hidden');
  bodyElement.classList.remove('modal-open');
  formUploadElement.reset();
  resetScale();
  resetEffects();
  uploadFileElement.value = '';
};

const onPopupEscKeydown = (evt) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    document.removeEventListener('keydown', onPopupEscKeydown);
    closeUserModal();
  }
};

const setFormHandlers = () => {
  uploadFileElement.addEventListener('change', () => {
    imageFormElement.classList.remove('hidden');
    bodyElement.classList.add('modal-open');
    document.addEventListener('keydown', onPopupEscKeydown);
  });
  closeOpenModalElement.addEventListener('click', () => {
    closeUserModal();
    document.removeEventListener('keydown', onPopupEscKeydown);
  });
};

const successTemplate = document.querySelector('#success')
  .content
  .querySelector('.success');

const errorTemplate = document.querySelector('#error')
  .content
  .querySelector('.error');

const onPopupMessageEscKeydown = (evt) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    successTemplate.remove();
    errorTemplate.remove();
    document.removeEventListener('keydown', onPopupMessageEscKeydown);
    document.addEventListener('keydown', onPopupEscKeydown);
  }
};

const showSuccessMessage = () => {
  document.body.appendChild(successTemplate);
  closeUserModal();
  document.addEventListener('keydown', onPopupMessageEscKeydown);
  successTemplate.addEventListener('click', () => {
    successTemplate.remove();
    document.removeEventListener('keydown', onPopupMessageEscKeydown);
  });
};

const showErrorMessage = () => {
  document.body.appendChild(errorTemplate);
  document.removeEventListener('keydown', onPopupEscKeydown);
  document.addEventListener('keydown', onPopupMessageEscKeydown);
  errorTemplate.addEventListener('click', () => {
    errorTemplate.remove();
    document.addEventListener('keydown', onPopupEscKeydown);
  });
};

export {setFormHandlers, closeUserModal, formUploadElement, showSuccessMessage, showErrorMessage};
