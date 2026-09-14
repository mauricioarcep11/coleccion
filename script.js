const viajes = [
  {
    titulo: 'EUROPA (2023-2024)',
    imagen: 'imagenes/europa-2023-2024.jpg',
    enlace: 'europa-2023-2024.html'
  },
  {
    titulo: 'EUROPA (2024-2025)',
    imagen: 'imagenes/europa-2024-2025.jpg',
    enlace: 'europa-2024-2025.html'
  },
  {
    titulo: 'BRASIL (2025)',
    imagen: 'imagenes/brasil-2025.jpg',
    enlace: 'brasil-2025.html'
  },
  {
    titulo: 'VIENA-BUDAPEST (2025)',
    imagen: 'imagenes/viena-budapest-2025.jpg',
    enlace: 'viena-budapest-2025.html'
  }
];

const cardsContainer = document.getElementById('journeysGrid');

if (cardsContainer) {
  cardsContainer.innerHTML = viajes
    .map(
      (viaje) => `
        <a class="travel-card" href="${viaje.enlace}" aria-label="Ver ${viaje.titulo}">
          <img class="travel-card__image" src="${viaje.imagen}" alt="${viaje.titulo}">
          <span class="travel-card__title">${viaje.titulo}</span>
        </a>
      `
    )
    .join('');
}

window.addEventListener('DOMContentLoaded', () => {
  const pageTitle = document.querySelector('[data-page-title]');
  if (pageTitle) {
    pageTitle.textContent = document.title;
  }
});
