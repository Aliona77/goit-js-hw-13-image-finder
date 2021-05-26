//const baseUrl = "https://pixabay.com/api/";

//const apiKey = '21758242-df60cf310fb09062fe07e2a40';

// export default {
//     page: 1,
//     query: '',
//     async fetchImage(query) {
//         const getImage = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${this.query}&page=${this.page}&per_page=12&key=21758242-df60cf310fb09062fe07e2a40`;

//     }
// }
import ImageServise from '../js/apiService'

const refs = {
    searchForm: document.querySelector('.search-form'),
    galleryContainer: document.querySelector('gallery-container'),
    loadMoreBtn: document.querySelector('[data-action="load-more"]')

}
const ImageServise = new ImageServise();

refs.searchForm.addEventListener('submit', onSearch);
refs.loadMoreBtn.addEventListener('click', onLoadMore);



function onSearch(e) {
    e.preventDefault();

    ImageServise.query = e.currentTarget.elements.query.value
    ImageServise.fetchImages(searchQuery);
}
function onLoadMore() {
    ImageServise.fetchImages(searchQuery);
}


// function onLoadMore() {
//      const options = {
//         headers: {
//             key: '21758242-df60cf310fb09062fe07e2a40',
//         },
//     };

//     const url =
//         `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${searchQuery}&page=${page}&per_page=12&key=твой_ключ`;
        
    
//     fetch(url, options)
//     .then(r => r.json)
//     .then(console.log)
    
// }