import { galleryItems } from "./gallery-items.js";

const galleryList = document.querySelector(".gallery");

const listMarkup = galleryItems
  .map(
    ({ preview, original, description }) =>
      `
    <li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>
    `
  )
  .join("");
galleryList.innerHTML = listMarkup;

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionPosition: "top",
  captionDelay: 250,
});
