import {instance} from '../../../../n1-main/m3-dal/api';

export const loginAPI = {
    singIn (email: string, password: string, rememberMe: boolean)  {
        return  instance.post('auth/login', {email, password, rememberMe})
            .then(res => {
                return res
            })
         },

}