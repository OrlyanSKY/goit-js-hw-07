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

  const imageOriginalRef = event.target;
  console.log(imageOriginalRef.alt);
  const instance = basicLightbox.create(
    `
        <img
        src = ${imageOriginalRef.dataset.source}
        alt = ${imageOriginalRef.alt}
        >
`,
    {
      onShow: () => {
        document.addEventListener("keydown", onEscBtnClose);
      },
      onClose: () => {
        document.removeEventListener("keydown", onEscBtnClose);
      },
    }
  );

  function onEscBtnClose(evt) {
    if (evt.code === "Escape" && instance.visible()) {
      instance.close();
    }
  }

  instance.show();
});
