import { getImagesByQuery } from './js/pixabay-api';
import { createGallery, clearGallery, showLoader, hideLoader } from './js/render-functions';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');

form.addEventListener('submit', async event => {
  event.preventDefault();
  const query = event.target.elements['search-text'].value.trim();

  if (!query) {
    iziToast.error({ message: 'Please enter a search term!' });
    return;
  }

  clearGallery();
  showLoader();

  try {
    const data = await getImagesByQuery(query);
    if (data.hits.length === 0) {
      iziToast.info({ message: 'Sorry, there are no images matching your search query. Please try again!' });
    } else {
      createGallery(data.hits);
    }
  } catch (error) {
    iziToast.error({ message: 'Something went wrong. Try again later!' });
  } finally {
    hideLoader();
  }
});

