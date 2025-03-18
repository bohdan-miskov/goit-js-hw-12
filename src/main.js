import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import imageAPIRequest from './js/pixabay-api';
import imageRender from './js/render-functions';

import { clearGallery } from './js/render-functions';

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

async function searchFormSubmit(event) {
  event.preventDefault();
  searchText = event.currentTarget.elements.searchText.value.trim();
  if (!textValidation(searchText)) {
    return;
  }

  clearGallery();
  refs.galleryLoadBtn.classList.add('hidden');
  refs.loader.classList.remove('hidden');
  try {
    const imageData = await imageAPIRequest(searchText);
    if (imageData.hits.length === 0) {
      createErrorMessage(
        '',
        'Sorry, there are no images matching your search query. Please try again!'
      );
      refs.loader.classList.add('hidden');
      return;
    }
    totalPages = Math.ceil(imageData.totalHits / 15);
    imageRender(imageData.hits);
  } catch (error) {
    createErrorMessage(
      error.name,
      `Sorry, the following error occured: ${error.message}`
    );
  }
  refs.loader.classList.add('hidden');
  page = 2;
  if (totalPages <= 1) {
    iziToast.info({
      ...infoMessageOptions,
      message: "We're sorry, but you've reached the end of search results.",
    });
    return;
  }
  refs.galleryLoadBtn.classList.remove('hidden');
}

async function loadMore() {
  refs.galleryLoadBtn.classList.add('hidden');
  refs.loader.classList.remove('hidden');
  try {
    const imageData = await imageAPIRequest(searchText, page);
    imageRender(imageData.hits);
  } catch (error) {
    createErrorMessage(
      error.name,
      `Sorry, the following error occured: ${error.message}`
    );
  }
  refs.loader.classList.add('hidden');
  scrollAfterLoad();
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

function scrollAfterLoad() {
  const galleryItem = refs.gallery.querySelector('.gallery-item');
  const itemHeight = galleryItem.getBoundingClientRect().height;
  window.scrollBy({
    top: itemHeight * 2,
    behavior: 'smooth',
  });
}
