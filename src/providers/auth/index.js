import {adminInstance} from "../request";

export const Auth = {
    login(data){
        return adminInstance.post('/auth/login', data)
            .then((response) => response)
    }
}