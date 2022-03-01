import { galleryItems } from './gallery-items.js';
// Change code below this line
const ulGallery = document.querySelector(".gallery");
const fragment = document.createDocumentFragment();
for (const galleryItem of galleryItems) {
    const a = document.createElement("a");
    a.insertAdjacentHTML("beforeend", `<img class="gallery__image" src=${galleryItem.preview} data-source=${galleryItem.original} alt=${galleryItem.description}>`);
    a.classList.add("gallery__link");
    a.setAttribute("href", galleryItem.original);
    fragment.append(a);
}
ulGallery.append(fragment);
const lightbox = new SimpleLightbox('.gallery a', { 
        captionSelector: 'img',
        captionsData: 'alt',
        captionDelay: 250,
});