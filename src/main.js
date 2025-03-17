import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import imageAPIRequest from './js/pixabay-api';
import imageRender from './js/render-functions';

const messageOptions = {
  class: 'message',
  titleColor: '#fff',
  titleSize: '16',
  titleLineHeight: '1.5',
  messageColor: '#fff',
  messageSize: '16',
  imageWidth: 24,
  maxWidth: 432,
  theme: 'dark',
  close: false,
  position: 'topRight',
  timeout: 5000,
};
const errorMessageOptions = {
  ...messageOptions,
  backgroundColor: '#ef4040',
  image: './img/error-message-icon.svg',
  close: true,
};
const infoMessageOptions = {
  ...messageOptions,
  backgroundColor: '#0099FF',
};
const refs = {
  searchForm: document.querySelector('.form'),
  gallery: document.querySelector('.gallery'),
  galleryLoadBtn: document.querySelector('.gallery-load-btn'),
  loader: document.querySelector('.loader'),
};

let totalPages;
let page;
let searchText;

refs.searchForm.addEventListener('submit', searchFormSubmit);
refs.galleryLoadBtn.addEventListener('click', loadMore);

function searchFormSubmit(event) {
  event.preventDefault();
  searchText = event.currentTarget.elements.searchText.value.trim();
  if (!textValidation(searchText)) {
    return;
  }
  refs.gallery.innerHTML = '';
  refs.loader.classList.remove('hidden');
  imageAPIRequest(searchText)
    .then(imageData => {
      if (imageData.data.hits.length === 0) {
        createErrorMessage(
          '',
          'Sorry, there are no images matching your search query. Please try again!'
        );
        return;
      }
      imageRender(imageData.data.hits);
      totalPages = Math.ceil(imageData.data.totalHits / 15);
      page = 2;
      if (totalPages <= 1) {
        console.log(iziToast);
        iziToast.info({
          ...infoMessageOptions,
          message: "We're sorry, but you've reached the end of search results.",
        });
        return;
      }
      refs.galleryLoadBtn.classList.remove('hidden');
    })
    .catch(error => {
      createErrorMessage(
        error.name,
        `Sorry, the following error occured: ${error.message}`
      );
    })
    .finally(() => refs.loader.classList.add('hidden'));
}

function loadMore() {
  refs.galleryLoadBtn.classList.add('hidden');
  refs.loader.classList.remove('hidden');
  imageAPIRequest(searchText, page)
    .then(imageData => {
      imageRender(imageData.data.hits);
    })
    .catch(error => {
      createErrorMessage(
        error.name,
        `Sorry, the following error occured: ${error.message}`
      );
    })
    .finally(() => {
      refs.loader.classList.add('hidden');
      page++;
      if (page > totalPages) {
        page = 2;
        iziToast.info({
          ...infoMessageOptions,
          message: "We're sorry, but you've reached the end of search results.",
        });
        return;
      }
      refs.galleryLoadBtn.classList.remove('hidden');
    });
}

function textValidation(text) {
  return text !== '' ? true : false;
}

function createErrorMessage(title, message) {
  iziToast.show({
    ...errorMessageOptions,
    title,
    message,
  });
}
