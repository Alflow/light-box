'use strict';

class TinyLightbox {
  constructor() {
    this.lightbox = document.querySelector('#tlb-lightbox');
    this.bigImg = this.lightbox.querySelector('.tlb-lightbox__big-img');
    this.closeButton = this.lightbox.querySelector('.tlb-lightbox__close');

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

// Uso de la librería
const tlb = new TinyLightbox();
tlb.attach('.tlb-img');  // Asumiendo que las imágenes tienen la clase .tlb-img
