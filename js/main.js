// Объект состоит из пяти ключей

//  id, число — идентификатор опубликованной фотографии. Это число от 1 до 25. Идентификаторы не должны повторяться. Идентификатор
// генерируется случайным образом.

// eslint-disable-next-line no-unused-vars
const IDS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];

// url, строка — адрес картинки вида photos/{{i}}.jpg, где {{i}} — это число от 1 до 25. Адреса картинок не должны повторяться.

// eslint-disable-next-line no-unused-vars
const URL_PHOTOS = [
  'photos/1.jpg',
  'photos/2.jpg',
  'photos/3.jpg',
  'photos/4.jpg',
  'photos/5.jpg',
  'photos/6.jpg',
  'photos/7.jpg',
  'photos/8.jpg',
  'photos/9.jpg',
  'photos/10.jpg',
  'photos/11.jpg',
  'photos/12.jpg',
  'photos/13.jpg',
  'photos/14.jpg',
  'photos/15.jpg',
  'photos/16.jpg',
  'photos/17.jpg',
  'photos/18.jpg',
  'photos/19.jpg',
  'photos/20.jpg',
  'photos/21.jpg',
  'photos/22.jpg',
  'photos/23.jpg',
  'photos/24.jpg',
  'photos/25.jpg'
];

// description, строка — описание фотографии. Описание придумайте самостоятельно.

// eslint-disable-next-line no-unused-vars
const DESC_PHOTOS = [
  'Пейзаж'
];

// likes, число — количество лайков, поставленных фотографии. Случайное число от 15 до 200.
// eslint-disable-next-line no-unused-vars
const LIKES = getRandomIntInclusive(15, 200);

// comments, число — количество комментариев, оставленных другими пользователями к этой фотографии. Случайное число от 0 до 200.

// eslint-disable-next-line no-unused-vars
const COMMENTS = getRandomIntInclusive(0, 200);

const maxStringLength = (string, maxLength) => {
  if (string.length < maxLength) {
    return true;
  } else {
    return false;
  }
};

maxStringLength();

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}

