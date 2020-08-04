import {instance} from '../../../../n1-main/m3-dal/api';

type CommonApiType<T> = {
    data: T
}

export const loginAPI = {
    // getAuth() {
    //     return instance.get(`auth`);
    // },
    singIn (email: string, password: string, rememberMe: boolean)  {
        return  instance.post('auth/login', {email, password, rememberMe})
            .then(res => {
                return res
            })
    }
}