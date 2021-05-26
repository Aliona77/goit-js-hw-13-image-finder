
const apiKey = '21758242-df60cf310fb09062fe07e2a40';

export default class imageApiService{
    constructor() {
        this.searchQuery = '';
        this.page = 1;
    }
    fetchImages() {

   
    const URL = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.page}&per_page=12&key=${apiKey }`;
        
        return fetch(URL)
            .then(r => r.json())
            .then(data => {
                this.incrementPage();
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