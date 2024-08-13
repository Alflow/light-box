'use strict';

export class TinyLightbox {
  constructor() {
    this.lightbox = null;
    this.bigImg = null;
    this.closeButton = null;
    this.createLightbox();
  }

  createLightbox() {
    this.lightbox = document.createElement('div');
    this.lightbox.id = 'tlb-lightbox';
    this.lightbox.className = 'tlb-lightbox';

    const imgContainer = document.createElement('div');
    imgContainer.className = 'tlb-lightbox__img-container';

    this.closeButton = document.createElement('div');
    this.closeButton.id = 'tlb-close';
    this.closeButton.className = 'tlb-lightbox__close';
    
    // Aquí deberías insertar el SVG
    this.closeButton.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
        <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    `;

    this.bigImg = document.createElement('img');
    this.bigImg.className = 'tlb-lightbox__big-img';

    imgContainer.appendChild(this.closeButton);
    imgContainer.appendChild(this.bigImg);
    this.lightbox.appendChild(imgContainer);
    document.body.appendChild(this.lightbox);

    this.addEventListeners();
  }

  addEventListeners() {
    this.closeButton.addEventListener('click', () => this.close());
    this.lightbox.addEventListener('click', (event) => {
      if (event.target !== this.bigImg && event.target !== this.closeButton) {
        this.close();
      }
    });
  }

  open(src) {
    this.bigImg.src = src;
    this.lightbox.classList.add('tlb-is-active');
  }

  close() {
    this.lightbox.classList.remove('tlb-is-active');
  }

  attach(selector) {
    document.querySelectorAll(selector).forEach(img => {
      img.addEventListener('click', () => this.open(img.src));
    });
  }
}
