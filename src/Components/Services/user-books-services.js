import TokenService from './token-service';
import config from '../../config';


const UserBooksService = {
    getUsersBooks(){
        const token = TokenService.getAuthToken();

        return fetch(`${config.API_ENDPOINT}/userBooks`, {headers: {Authorization: `Bearer ${token}`}})
    },
    getUserBookById(id){
        const token = TokenService.getAuthToken();

        return fetch(`${config.API_ENDPOINT}/userBooks/${id}`, {headers: {Authorization: `Bearer ${token}`}})
    },
    patchUserBook(updatedUserBook, id){
        const token = TokenService.getAuthToken();

        return fetch(`${config.API_ENDPOINT}/userBooks/${id}`, {method: 'PATCH', headers: {Authorization: `Bearer ${token}`, 'content-type': 'application/json'}, body: JSON.stringify(updatedUserBook)})
    },
    insertUserBook(userBook){
        const token = TokenService.getAuthToken();

        return fetch(`${config.API_ENDPOINT}/userBooks`, {method: 'POST', headers: {Authorization: `Bearer ${token}`, 'content-type': 'application/json'}, body: JSON.stringify(userBook)})
    },
    deleteUserBooks(id){
        const token = TokenService.getAuthToken();

        return fetch(`${config.API_ENDPOINT}/userBooks/${id}`, {method: 'DELETE', headers: {Authorization: `Bearer ${token}`}})
    }

}

export default UserBooksService;