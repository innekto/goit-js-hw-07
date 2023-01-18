import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryEl = document.querySelector(".gallery");
// console.log(galleryEl)

// console.log(galleryItems[0].preview);

galleryEl.insertAdjacentHTML("beforeend", newGallery(galleryItems));
galleryEl.addEventListener("click", onLinkImageClick);

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
    }).join('');
}

function onLinkImageClick(event) {
  event.preventDefault();
  //  console.log(event.target.nodeName);
  if (event.target.nodeName !== "IMG") {
    return;
  }

  const instance = basicLightbox.create(
    `
    <img src="${event.target.dataset.source}">
`,
    {
      onShow: (instance) => {
        document.onkeydown = function (event) {
          event.preventDefault();
          if (event.code == "Escape") {
            instance.close();
          }
        };
      }
    }
  );

  instance.show();
}