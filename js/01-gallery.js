import { galleryItems } from "./gallery-items.js";

//List creation
const galleryList = document.querySelector(".gallery");

const galleryMarkup = galleryItems
  .map(
    ({ preview, original, description }) => `
        <li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>
        `
  )

  .join("");
galleryList.innerHTML = galleryMarkup;

const handleImgClick = (event) => {
  event.preventDefault();

  if (event.target.nodeName !== "IMG") {
    return;
  }
  const targetImage = event.target;
  if (targetImage.classList.contains("gallery__image")) {
    const imgSource = targetImage.dataset.source;

    const instance = basicLightbox.create(
      `<img src="${imgSource}" width="1280" height="auto" />`,
      {
        onShow: (instance) => {
          window.addEventListener("keydown", pressEscape);
        },
        onClose: (instance) => {
          window.removeEventListener("keydown", pressEscape);
        },
      }
    );
    instance.show();
    function pressEscape(event) {
      if (event.code == "Escape") {
        instance.close();
      }
    }
  }
};

galleryList.addEventListener("click", handleImgClick);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// const galleryList = document.querySelector(".gallery");

// const listMarkup = galleryItems
//   .map(
//     ({ preview, original, description }) =>
//       `<li class="gallery__item">
//   <a class="gallery__link" href="${original}">
//     <img
//       class="gallery__image"
//       src="${preview}"
//       data-source="${original}"
//       alt="${description}"
//     />
//   </a>
// </li>`
//   )
//   .join("");
// galleryList.innerHTML = listMarkup;
// //
// //
// //
// const handleClickModal = (event) => {
//   event.preventDefault();

//   if (event.target.nodeName !== "IMG") {
//     return;
//   }
//   const targetPicture = event.target;
//   if (targetPicture.classList.contains("gallery__image")) {
//     const currectUrl = targetPicture.dataset.source;

//     const instance = basicLightbox.create(
//       `
//   <img src = "${currectUrl}" width="1280" height="auto" />
//     `,
//       {
//         onShow: (instance) => {
//           window.addEventListener("keydown", EscBtnPress);
//         },
//         onClose: (instance) => {
//           window.removeEventListener("keydown", EscBtnPress);
//         },
//       }
//     );

//     instance.show();

//     function EscBtnPress(event) {
//       if (event.code !== "Escape") {
//         return;
//       }
//       instance.close();
//     }
//   }
// };

// galleryList.addEventListener("click", handleClickModal);
