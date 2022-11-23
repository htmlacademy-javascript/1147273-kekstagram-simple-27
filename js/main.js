import {setFormHandlers, closeUserModal, showErrorMessage} from './form.js';
import {getPhotos, setUserFormSubmit} from './api.js';
import {createSimilarPhotosAbove} from './thumbs.js';
import { showAlert } from './util.js';

setFormHandlers();
getPhotos(createSimilarPhotosAbove, showAlert);
setUserFormSubmit(closeUserModal, showErrorMessage);
