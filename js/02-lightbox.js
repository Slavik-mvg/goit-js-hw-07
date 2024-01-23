import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector('.gallery');
console.dir(galleryEl);

const createMark = creatGalery(galleryItems);
galleryEl.insertAdjacentHTML('beforeend', createMark);

function creatGalery(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
      <a class="gallery__link" href="${original}">
      <img class="gallery__image"
      src="${preview}" alt="${description}">
      </a></li>`;
    })
    .join('');
}

const lightbox = new SimpleLightbox('.gallery a', {
  /* options */
  captionsData: 'alt',
  captionDelay: 250,
});

console.log(galleryItems);
