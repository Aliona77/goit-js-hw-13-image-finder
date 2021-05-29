
import './sass/main.scss';
import galleryImage from './template/photoList.hbs';
import ImageServise from './js/apiService';
import LoadMoreBtn from './js/load-more-btn';

import { info, error } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';

const loadMoreBtn = new LoadMoreBtn({
  selector: '.btn',
  hidden: true,
});

const refs = {
  container: document.querySelector('.container'),
  btnSearch: document.querySelector('.btn-search'),
  input: document.querySelector('.input'),
};


const imageServise = new ImageServise();

refs.btnSearch.addEventListener('click', onSearch);

loadMoreBtn.refs.btn.addEventListener('click', fetchImages);


function onSearch(e) {
  e.preventDefault();
 
  imageServise.searchValue = refs.input.value;

  if (imageServise.searchValue === '') {
    info({
      title: 'Error',
      text: 'Enter text',
      autoOpen: true,
      delay: 1500,
    });
    return;
  }
  loadMoreBtn.show();
  imageServise.resetPage();
  clearMarkup();
  fetchImages();
}

function fetchImages() {
  loadMoreBtn.disabled();
  imageServise.fetchImages().then(hits => {
    if (hits.length === 0) {
      error({
      title: 'Error',
      text: 'No matches',
      autoOpen: true,
      delay: 1500,
      });

      refs.input.value = '';
    }
    appendImagesMurkup(hits);

    loadMoreBtn.enable();
    scroll();
  });

}
  function scroll() {
  window.scrollTo({
    behavior: 'smooth',
    top: document.documentElement.scrollHeight,
  });
  }

function appendImagesMurkup(hits) {
  refs.container.insertAdjacentHTML('beforeend', galleryImage(hits));
}

function clearMarkup() {
  refs.container.innerHTML = '';
}



