import SimpleLightbox from 'simplelightbox';

import 'simplelightbox/dist/simple-lightbox.min.css';

export default function updateImageMarkup(images) {
  const imagesMarkup = images.map(image => {
    return `<li class="gallery-item">
        <a class="gallery-link" href="${
          image.largeImageURL
        }"><img class="gallery-image" src="${image.webformatURL}" alt="${
      image.tags
    }" width="${300}" height="${200}" data-user="${image.user}"></a>
        <ul class="gallery-image-description-list">
            <li class="gallery-image-description-item">
                <h3 class="gallery-image-description-title">Likes</h3>
                <p class="gallery-image-description-text">${image.likes}</p>
            </li>
            <li class="gallery-image-description-item">
                <h3 class="gallery-image-description-title">Views</h3>
                <p class="gallery-image-description-text">${image.views}</p>
            </li>
            <li class="gallery-image-description-item">
                <h3 class="gallery-image-description-title">Comments</h3>
                <p class="gallery-image-description-text">${image.comments}</p>
            </li>
            <li class="gallery-image-description-item">
                <h3 class="gallery-image-description-title">Downloads</h3>
                <p class="gallery-image-description-text">${image.downloads}</p>
            </li>
        </ul>
      </li>`;
  });
  refs.gallery.innerHTML = imagesMarkup.join('');
  modalGallery.refresh();
}

const modalGallery = new SimpleLightbox('.gallery-link', {
  captionsData: 'data-user',
  captionDelay: 250,
});

const refs = {
  gallery: document.querySelector('.gallery'),
};
