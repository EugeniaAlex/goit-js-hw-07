import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const divGaleryEl = document.querySelector('.gallery');

function makeGaleryElementMarkup(item) {
    
    return `
  <a class="gallery__item" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      alt="${item.description}"
    />
  </a>`;
};

const makeGaleryElements = galleryItems.map(makeGaleryElementMarkup).join('');

divGaleryEl.insertAdjacentHTML('beforeend', makeGaleryElements);


divGaleryEl.addEventListener('click', onImageClick);

function onImageClick(event) {
    
    event.preventDefault();
    
    let gallery = new SimpleLightbox('.gallery a');
gallery.on('show.simplelightbox', function () {
    captionsData: `img`; captionDelay: `250`; 
});

};
