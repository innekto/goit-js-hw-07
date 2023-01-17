import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector('.gallery');
// console.log(galleryEl)


// console.log(galleryItems[0].preview);

            // 1. Створення і рендер розмітки на підставі масиву даних galleryItems
            //  і наданого шаблону елемента галереї.
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




                // 2.Реалізація делегування на div.gallery і 
                // отримання url великого зображення.

// const linkImgEl = document.querySelectorAll('.gallery__link');
// console.log(linkImgEl);
galleryEl.addEventListener('click', onLinkImageClick);

function onLinkImageClick(event) {
    event.preventDefault();
    //  console.log(event.target.nodeName);
    if (event.target.nodeName !== 'IMG') {
        return;
    }

    const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">
`)

    instance.show()

    document.onkeydown = function (event) {
            event.preventDefault();
            if (event.code == 'Escape') {
                instance.close();
            }
        };
    
};



   
        

