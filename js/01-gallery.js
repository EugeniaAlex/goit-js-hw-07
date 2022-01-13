import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const divGaleryEl = document.querySelector('.gallery');

function makeGaleryElementMarkup(item) {
    
    return `
<div class="gallery__item">
  <a class="gallery__link" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
  </a>
</div>`;
};

const makeGaleryElements = galleryItems.map(makeGaleryElementMarkup).join('');
let instance;
divGaleryEl.insertAdjacentHTML('beforeend', makeGaleryElements);

divGaleryEl.addEventListener('click', onImageClick);

function onImageClick(event) {
    window.addEventListener('keydown', onEscapeClose);
    event.preventDefault();
    
    // if (event.target.nodeName !== IMG) {
    //     return;
    // }
    instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}">
`)

instance.show();
};

// window.addEventListener('keydown', onEscapeClose);

function onEscapeClose(event) {
    
    if (event.keyCode === 27) {
        instance.close();
     };
};

