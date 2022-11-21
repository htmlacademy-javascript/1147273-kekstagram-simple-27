import {createObjects} from './create-object.js';
import {setFormHandlers, closeUserModal, createErr} from './form.js';
import {getPhotos, setUserFormSubmit} from './api.js';
import {createSimilarPhotosAbove} from './thumbs.js';

createObjects();
setFormHandlers();
getPhotos(createSimilarPhotosAbove);

setUserFormSubmit(closeUserModal, createErr);
