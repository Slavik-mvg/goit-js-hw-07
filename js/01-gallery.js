import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector('.gallery');
console.dir(galleryEl);

const items = [];
const markup = galleryItems.forEach(e => {
  const liEl = document.createElement('li');
  liEl.classList.add('gallery__item');

  const aEl = document.createElement('a');
  aEl.classList.add('gallery__link');
  aEl.setAttribute('href', `${e.original}`);

  const imgEl = document.createElement('img');
  imgEl.classList.add('gallery__image');
  imgEl.setAttribute('src', `${e.preview}`);
  imgEl.setAttribute('data-sourc', `${e.original}`);
  imgEl.setAttribute('alt', `${e.description}`);

  aEl.append(imgEl);
  liEl.append(aEl);
  items.push(liEl);
});
galleryEl.append(...items);

galleryEl.addEventListener('click', e => {
  e.preventDefault();
  console.dir(e.target);
  if (!e.target.classList.contains('gallery__image')) {
    return;
  }

  const instance = basicLightbox.create(
    `<img src="${e.target.dataset.sourc}" width="1400" height="900">`
  );
  instance.show();

  document.addEventListener('keydown', event => {
    console.log('code: ', event.code);
    if (event.code === 'Escape') {
      instance.close();
    }
    return;
  });
});

// const markup = galleryItems.map(e => `<li class="gallery__item">
//       <a class="gallery__link" href="${e.original}">
//       <img class="gallery__image"
//       src="${e.preview}" data-sourc="${e.original}" alt="${e.description}">
//       </a></li>`).join('');
// galleryEl.insertAdjacentHTML('beforeend', markup);
// console.log(markup);
// -------------------------------
// galleryEl.innerHTML = markup;
// // console.dir(markup);

// galleryEl.addEventListener('click', onClick);

// function onClick(evt) {
//   evt.preventDefault();
//   if (!evt.target.classList.contains('gallery__image')) {
//     return;
//   }
//   console.log('qqqq');
// // evt.target.currentSrc = evt.target.dataset.source;
//   console.dir(evt.target.dataset);
//   console.log(evt.currentTarget);
// }

console.log(galleryItems);
