import { galleryItems } from "./gallery-items.js";

function createGallaryItem(array) {
  return array
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
    })
    .join("");
}

const galleryItemsMarcup = createGallaryItem(galleryItems);

const galleryRef = document.querySelector(".gallery");

galleryRef.insertAdjacentHTML("beforeend", galleryItemsMarcup);

galleryRef.addEventListener("click", (event) => {
  event.preventDefault();

  const currentImageRef = event.target.dataset.source;

  const instance = basicLightbox.create(
    `
    <div class="modal">
        <img src=${currentImageRef}>
    </div>
`
  );

  instance.show();
});
