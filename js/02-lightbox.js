import { galleryItems } from "./gallery-items.js";

function createGallaryItem(array) {
  return array
    .map(({ preview, original, description }) => {
      return `<li><a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a></li>
  
`;
    })
    .join("");
}

const galleryItemsMarcup = createGallaryItem(galleryItems);

const galleryEl = document.querySelector(".gallery");

galleryEl.insertAdjacentHTML("beforeend", galleryItemsMarcup);

let gallery = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
  showCounter: false,
});
gallery.on("show.simplelightbox", function () {});
