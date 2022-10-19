// Объект состоит из пяти ключей

//  id, число — идентификатор опубликованной фотографии. Это число от 1 до 25. Идентификаторы не должны повторяться. Идентификатор
// генерируется случайным образом.


// likes, число — количество лайков, поставленных фотографии. Случайное число от 15 до 200.
// eslint-disable-next-line no-unused-vars
const MIN_LIKES = 15;
// eslint-disable-next-line no-unused-vars
const MAX_LIKES = 200;

// comments, число — количество комментариев, оставленных другими пользователями к этой фотографии. Случайное число от 0 до 200.
// eslint-disable-next-line no-unused-vars
const MIN_COMMENTS = 0;
// eslint-disable-next-line no-unused-vars
const MAX_COMMENTS = 200;

// url, строка — адрес картинки вида photos/{{i}}.jpg, где {{i}} — это число от 1 до 25. Адреса картинок не должны повторяться.

// description, строка — описание фотографии. Описание придумайте самостоятельно.
// eslint-disable-next-line no-unused-vars
const DESC_PHOTOS = [
  'Пейзаж',
  'Кот',
  'Кекс',
  'Машина',
  'Дом',
  'Портрет Кекса',
  'Велосипед',
  'Горы',
  'Город',
  'Природа',
  'Водопад',
  'Дорога',
  'Лес',
  'Опушка',
  'Поляна',
  'Пикник',
  'Елка',
  'Компьютер',
  'Офис',
  'Мотоцикл',
  'Магазин',
  'Моё',
  'Твое',
  'Наше',
  'Ваше'
];

const getRandomIntInclusive = (min, max) => {
  if (min < 0 || max < 0) {
    return NaN;
  }
  const lower = Math.ceil(Math.min(min, max));
  const upper = Math.floor(Math.max(min, max));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};


// eslint-disable-next-line no-unused-vars
const getRandomArrayElement = (elements) => elements[getRandomIntInclusive(0, elements.length - 1 )];

const createObject = (index) => ({
  id: index,
  url: `photos/${index}.jpg`,
  description: getRandomArrayElement(DESC_PHOTOS),
  ikes: getRandomIntInclusive(MIN_LIKES, MIN_LIKES),
  comments: getRandomIntInclusive(MIN_COMMENTS, MAX_COMMENTS),
});


const similarObjects = () => Array.from({length: 25}, (_, idIndex) => createObject(idIndex + 1));
// eslint-disable-next-line no-console
console.log(similarObjects());


// const maxStringLength = (string, maxLength) => {
//   if (string.length < maxLength) {
//     return true;
//   } else {
//     return false;
//   }
// };

// maxStringLength();


