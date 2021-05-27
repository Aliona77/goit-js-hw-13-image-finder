
import './sass/main.scss';
import galleryImage from './template/photoList.hbs';
import ImageServise from './js/apiService';


const refs = {
    gallery:document.querySelector('.gallery'),
    searchForm: document.querySelector('.search-form'),
    galleryContainer: document.querySelector('gallery-container'),
    loadMoreBtn: document.querySelector('[data-action="load-more"]'),
}
const imageServise = new ImageServise();

refs.searchForm.addEventListener('submit', onSearch);
refs.loadMoreBtn.addEventListener('click', onLoadMore);



function onSearch(e) {
    e.preventDefault();
    clearImageContainer()
    imageServise.query = e.currentTarget.elements.query.value;
    imageServise.resetPage();
    imageServise.fetchImages().then(appendImagesMurkup);
}
 function onLoadMore() {
   imageServise.fetchImages().then(appendImagesMurkup);
 }
function appendImagesMurkup(images) {
    refs.gallery.insertAdjacentHTML('beforeend', galleryImage(images));
}
function clearImageContainer() {
    refs.gallery.innerHTML = '';
}