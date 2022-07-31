import { galleryItems } from "./gallery-items.js";

function createGallaryItem(array) {
  return array
    .map(({ preview, original, description }) => {
      return `
  <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
`;
    })
    .join("");
}

const galleryItemsMarcup = createGallaryItem(galleryItems);

const galleryEl = document.querySelector(".gallery");

galleryEl.insertAdjacentHTML("beforeend", galleryItemsMarcup);

galleryEl.addEventListener("click", (event) => {
  event.preventDefault();
});

let gallery = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
  showCounter: false,
});
gallery.on("show.simplelightbox", function () {});
