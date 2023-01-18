import { galleryItems } from "./gallery-items.js";
// Change code below this line

// console.log(galleryItems);
const galleryEl = document.querySelector(".gallery");

galleryEl.insertAdjacentHTML('beforeend', newGallery(galleryItems));
galleryEl.addEventListener("click", onLinkImageClick);

function newGallery(images) {
  return images.map(({ preview, original, description }) => {
      return `<div class="gallery__item">
                    <a class="gallery__item" href="${original}">
                        <img class="gallery__image" 
                             src="${preview}" 
                             alt="${description}" />
                    </a>
            </div>`
  }).join('')
}

function onLinkImageClick(evt) {
    evt.preventDefault();
    let lightbox = new SimpleLightbox('.gallery a', {
        captionsData: 'alt',
        captionDelay: 250,
    });
    
    lightbox.open();
    
};

// new SimpleLightbox('.gallery a', {
//     captionsData: 'alt',
//     captionDelay: 250,
//     captionPosition:'bottom',
// });