
const API_KEY = '21758242-df60cf310fb09062fe07e2a40';
const BASE_URL = 'https://pixabay.com/api/';


export default class ImageService{
    constructor() {
        this.searchValue = '';
        this.page = 1;
    }
    async fetchImages() {
 console.log(this);
   
        const URL = `${BASE_URL}?image_type=photo&orientation=horizontal&q=${this.searchValue}&page=${this.page}&per_page=12&key=${API_KEY}`;

        try {
            const response = await fetch(URL);

            const resJson = await response.json();
            const data = await resJson.hits;
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

    get value() {
        return this.searchValue;  
    }
    set value(newValue) {
        this.searchValue = newValue;
        
    }
}