import { galleryItems } from './gallery-items.js';
// Change code below this line
const divGallery = document.querySelector(".gallery");
const fragment = document.createDocumentFragment();
for (const galleryItem of galleryItems) {
    const a = document.createElement("a");
    a.insertAdjacentHTML("beforeend", `<img class="gallery__image" src=${galleryItem.preview} data-source=${galleryItem.original} alt=${galleryItem.description}>`);
    a.classList.add("gallery__link");
    a.setAttribute("href", galleryItem.original);
    fragment.append(a);
}
divGallery.append(fragment);
divGallery.addEventListener("click", (event) => {
    event.preventDefault();
    const instance = basicLightbox.create(`<img src=${event.target.dataset.source}>`, {
        onShow: (instance) => {
            document.addEventListener('keydown', function (event) {
                if (event.key === "Escape") {
                    instance.close()
                }
            })
        }
    })
    instance.show()
});