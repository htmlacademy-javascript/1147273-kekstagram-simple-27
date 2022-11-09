import './thumbs.js';

const uploadFile = document.getElementById('upload-file');
const formEditImg = document.querySelector('.img-upload__overlay');
const body = document.querySelector('body');
const onCloseButtonClick = document.getElementById('upload-cancel');

uploadFile.addEventListener('change', () => {
  formEditImg.classList.remove('hidden');
  body.classList.add('modal-open');
});

onCloseButtonClick.addEventListener('click', () => {
  formEditImg.classList.add('hidden');
  body.classList.remove('modal-open');
});

document.addEventListener('keydown', (evt) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    formEditImg.classList.add('hidden');
    body.classList.remove('modal-open');
  }
});
