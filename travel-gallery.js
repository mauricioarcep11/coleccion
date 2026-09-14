const galleryPage = document.querySelector("[data-gallery-folder]");
const gallery = galleryPage?.querySelector(".trip-gallery");

if (galleryPage && gallery) {
  const folder = galleryPage.dataset.galleryFolder;
  const count = Number(galleryPage.dataset.galleryCount);
  const title = document.title;

  gallery.innerHTML = Array.from({ length: count }, (_, index) => {
    const imageNumber = String(index + 1).padStart(2, "0");
    return `<img src="${folder}/${imageNumber}.jpg" alt="${title}, fotografía ${index + 1}" loading="lazy" tabindex="0">`;
  }).join("");

  const lightbox = document.createElement("div");
  lightbox.className = "travel-lightbox";
  lightbox.setAttribute("role", "dialog");
  lightbox.setAttribute("aria-modal", "true");
  lightbox.setAttribute("aria-label", "Fotografía ampliada");
  lightbox.innerHTML = `
    <button class="travel-lightbox__close" type="button" aria-label="Cerrar fotografía ampliada">×</button>
    <img class="travel-lightbox__image" alt="">
  `;
  document.body.appendChild(lightbox);

  const lightboxImage = lightbox.querySelector(".travel-lightbox__image");
  const closeLightbox = () => {
    lightbox.classList.remove("is-open");
    document.body.classList.remove("lightbox-open");
  };
  const openLightbox = (image) => {
    lightboxImage.src = image.src;
    lightboxImage.alt = image.alt;
    lightbox.classList.add("is-open");
    document.body.classList.add("lightbox-open");
  };

  gallery.querySelectorAll("img").forEach((image) => {
    image.addEventListener("click", () => openLightbox(image));
    image.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openLightbox(image);
      }
    });
  });
  lightbox.querySelector(".travel-lightbox__close").addEventListener("click", closeLightbox);
  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) closeLightbox();
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeLightbox();
  });
}