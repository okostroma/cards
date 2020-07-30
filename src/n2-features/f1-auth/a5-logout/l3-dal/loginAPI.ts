import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:7542/1.0/'
})

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