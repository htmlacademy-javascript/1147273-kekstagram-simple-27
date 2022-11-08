import {createObjects} from './create-object.js';

const usersPhotos = document.querySelector('.pictures');

const picturesUsersTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture');

const similarPhotos = createObjects();

const similarPhotosAbove = () => {
  similarPhotos.forEach((user) => {
    const pictureElement = picturesUsersTemplate.cloneNode(true);
    pictureElement.querySelector('.picture__img').src = user.url;
    pictureElement.querySelector('.picture__comments').textContent = user.comments;
    pictureElement.querySelector('.picture__likes').textContent = user.likes;
    pictureElement.querySelector('.picture__img').src = user.url;
    usersPhotos.appendChild(pictureElement);
  });
};

const uploadFiles = document.getElementById('upload-file');
const formEditImg = document.querySelector('.img-upload__overlay');
const body = document.querySelector('body');
const uploadFilesClose = document.getElementById('upload-cancel');

uploadFiles.addEventListener('change', () => {
  formEditImg.classList.remove('hidden');
  body.classList.add('modal-open');
});

uploadFilesClose.addEventListener('click', () => {
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

export {similarPhotosAbove};
