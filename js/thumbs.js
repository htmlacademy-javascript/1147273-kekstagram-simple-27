const usersPhotosElement = document.querySelector('.pictures');

const picturesUsersTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture');

const createSimilarPhotosAbove = (similarPhotos) => {
  similarPhotos.forEach((user) => {
    const pictureElement = picturesUsersTemplate.cloneNode(true);
    pictureElement.querySelector('.picture__img').src = user.url;
    pictureElement.querySelector('.picture__comments').textContent = user.comments;
    pictureElement.querySelector('.picture__likes').textContent = user.likes;
    pictureElement.querySelector('.picture__img').src = user.url;
    usersPhotosElement.appendChild(pictureElement);
  });
};

export {createSimilarPhotosAbove};
