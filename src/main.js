import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { fetchImages } from './js/pixabay-api.js';
import { createMarkup } from './js/render-functions.js';

const loader = document.querySelector('.loader');
const gallery = document.querySelector(".gallery")
const searchForm = document.querySelector(".search-form");

searchForm.addEventListener("submit", onSubmitForm);

function onSubmitForm(event) {
    event.preventDefault();

    let searchQuery = event.currentTarget.elements.query.value.trim();
    event.currentTarget.elements.query.value = '';

    gallery.innerHTML = '';
    toggleLoader();
  fetchImages(searchQuery)
  .then(data => {
    renderImages({ hits: data });
  })
  .then(() => toggleLoader());
};

function renderImages(data) {
  // if (!data || !data.hits || !data.hits.length) {
  //   iziToast.error({
  //     title: 'Error',
  //     message:
  //       'Sorry, there are no images matching your search query. Please try again!',
  //     position: 'topRight',
  //   });
  //   return;
  // }

  const { hits } = data;
  const markup = createMarkup(hits);
  gallery.insertAdjacentHTML('beforeend', markup);
  instance.refresh();
}

const instance = new SimpleLightbox('.gallery-item a', {
  captionsData: 'alt',
  captionDelay: 200,
});

function toggleLoader() {
  loader.classList.toggle('is-hidden');
}