// Add imports above this line

import SimpleLightbox from 'simplelightbox';

import 'simplelightbox/dist/simple-lightbox.min.css';

import { galleryItems } from './gallery-items';

import createGalleryItem from './partials/function-create-gallery-item';

import clickOnGalleryLink from './partials/function-click-on-gallery-link';

// Change code below this line

const galleryRef = document.querySelector('.gallery');
const galleryMarkup = createGalleryItem(galleryItems);
galleryRef.insertAdjacentHTML('beforeend', galleryMarkup);

new SimpleLightbox('.gallery a', {
  captionDelay: 250,
  captionsData: 'alt',
});

galleryRef.addEventListener('click', clickOnGalleryLink);
