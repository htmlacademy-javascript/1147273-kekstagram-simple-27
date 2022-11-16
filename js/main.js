import {createObjects} from './create-object.js';
import {createSimilarPhotosAbove} from './thumbs.js';
import {setFormHandlers} from './form.js';
import {getPhotos} from './api.js';

createObjects();
setFormHandlers();
getPhotos()
  .then((photos) => {createSimilarPhotosAbove(photos);});
