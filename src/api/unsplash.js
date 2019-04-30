import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 74cb6053699de33bbe1c4cb931af119179f51e245a2b948a7e8f3fa0d6152b7d'
    }
});