import TokenService from './token-service';
import config from '../../config';

const bookService = {
    insertBook(book){
        const token = TokenService.getAuthToken();

        return fetch(`${config.API_ENDPOINT}/books`, {method: 'POST', headers: {Authorization: `Bearer ${token}`, 'content-type': 'application/json'}, body: JSON.stringify(book)})
    }
}

export default bookService;