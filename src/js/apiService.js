
const API_KEY = '21758242-df60cf310fb09062fe07e2a40';
const BASE_URL = 'https://pixabay.com/api';


export default class ImageService{
    constructor() {
        this.searchQuery = '';
        this.page = 1;
    }
    async fetchImages() {

   
        const URL = `${BASE_URL}?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.page}&per_page=12&key=${API_KEY}`;
        try {
            const response = await fetch(URL);
            const responseJson = await response.json();
            const data = await responseJson.hits;
            this.incrementPage();
            return data;
        }catch (error) {
      throw error;
        }
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