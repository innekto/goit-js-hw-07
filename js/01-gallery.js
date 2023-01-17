import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector('.gallery');
// console.log(galleryEl)


// console.log(galleryItems[0].preview);

function newGallery(images) {
    return images.map(({ preview, original, description }) => {
        
        return `<div class="gallery__item">
                    <a class="gallery__link" href="${original}">
                        <img
                            class="gallery__image"
                            src="${preview}"
                            data-source="${original}"
                            alt="${description}"
                        />
                    </a>
                </div>`
    })
        .join('');
}

galleryEl.insertAdjacentHTML('beforeend', newGallery(galleryItems));



// Створення і рендер розмітки на підставі масиву даних galleryItems
//  і наданого шаблону елемента галереї.
// Реалізація делегування на div.gallery і отримання url великого зображення.



