import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);
const gallery = document.querySelector(".gallery");
console.log(gallery);
galleryItems.forEach(item => {
  //itereaza matricea galleryItems si creaza markup pentru fiecare element
  const galleryMarkup = `<li class = "gallery__item">
        <a class = "gallery__link" href = "${item.original}">
            <img class="gallery__image" src="${item.preview}" data-source = "${item.original}" alt="${item.description}" />
        </a>
        </li >`;
  gallery.insertAdjacentHTML("afterbegin", galleryMarkup);
});

const galleryImages = document.querySelectorAll(".gallery__image");
console.log(galleryImages);

galleryImages.forEach(image => {
  image.addEventListener("click", event => {
    // adauga un event listener pt fiecare imagine din galerie
    event.preventDefault(); //previne redirectionarea utilizatorului

    const source = image.dataset.source;

    // creeaza fereastra modala cu imaginea sursa din data-sorce
    const lightbox = basicLightbox.create(`
      <img src="${source}" width="800" height="600">
    `);

    lightbox.show(() => console.log("lightbox now visible")); //deschide fereasta modala si afiseaza mesajulin consola

    window.addEventListener("keydown", event => {
      //creem un event la apasarea unei taste
      const visible = basicLightbox.visible();
      if (visible && event.key === "Escape") {
        //daca fereastra modala este vizibila si evenimentul keydown este apasarea tastei esc
        lightbox.close(() => console.log("lightbox not visible anymore")); //inchide fereastra modala si afiseaza mesajulin consola
      }
    });
  });
});
