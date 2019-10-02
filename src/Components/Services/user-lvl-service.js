import TokenService from './token-service';
import config from '../../config';

const lvlService = {
    getUserLvl(){
        const token = TokenService.getAuthToken();

        return fetch(`${config.API_ENDPOINT}/lvl`, {headers: {Authorization: `Bearer ${token}`}})
    },
    updateUserLvl(id, updatedLvl){
        const token = TokenService.getAuthToken();

        return fetch(`${config.API_ENDPOINT}/lvl/${id}`, {method: 'PATCH', headers: {Authorization: `Bearer ${token}`, 'content-type': 'application/json'}, body: JSON.stringify(updatedLvl)})
    },
    insertUserLvl(user_id){
        return fetch(`${config.API_ENDPOINT}/lvl`, {method: 'POST', headers: {'content-type': 'application/json'}, body: JSON.stringify(user_id)})
    }
}

export default lvlService;