
const API_KEY = '21758242-df60cf310fb09062fe07e2a40';
const BASE_URL = 'https://pixabay.com/api';


export default class ImageService{
    constructor() {
        this.searchQuery = '';
        this.page = 1;
    }
    fetchImages() {

   
    const URL = `${BASE_URL}?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.page}&per_page=12&key=${API_KEY }`;
        
        return fetch(URL)
            .then(response => response.json())
            .then(data => {
                this.incrementPage();

                return data.hits;
            });
    }
    incrementPage() {
        this.page += 1;
    }
    resetPage() {
        this.page = 1;
}

    get query() {
        return this.searchQuery;  
    }
    set query(newQuery) {
        this.searchQuery = newQuery;
        
    }
}