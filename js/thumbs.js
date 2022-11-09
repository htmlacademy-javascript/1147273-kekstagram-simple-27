import {createObjects} from './create-object.js';
import './form.js';

const usersPhotos = document.querySelector('.pictures');

const picturesUsersTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture');

const similarPhotos = createObjects();

const createSimilarPhotosAbove = () => {
  similarPhotos.forEach((user) => {
    const pictureElement = picturesUsersTemplate.cloneNode(true);
    pictureElement.querySelector('.picture__img').src = user.url;
    pictureElement.querySelector('.picture__comments').textContent = user.comments;
    pictureElement.querySelector('.picture__likes').textContent = user.likes;
    pictureElement.querySelector('.picture__img').src = user.url;
    usersPhotos.appendChild(pictureElement);
  });
};

export {createSimilarPhotosAbove};
