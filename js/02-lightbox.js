import { galleryItems } from "./gallery-items.js";
// Change code below this line

// console.log(galleryItems);
const galleryEl = document.querySelector(".gallery");

galleryEl.insertAdjacentHTML('beforeend', newGallery(galleryItems));


function newGallery(images) {
  return images.map(({ preview, original, description }) => {
      return `<a class="gallery__item" href="${original}">
                <img class="gallery__image" 
                     src="${preview}" 
                     alt="${description}" />
            </a>`
  }).join('')
    
}
// console.log(galleryEl);


    let lightbox = new SimpleLightbox('.gallery a', {
        captionsData: 'alt',
        captionDelay: 250,
        scrollZoom: false,
    });
    
    
console.log(lightbox);