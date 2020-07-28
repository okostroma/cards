import axios from 'axios';


const instance = axios.create({
    baseURL: 'http://localhost:7542/1.0/'
})


type RegistrationType = {
    addedUser: {
        email: string,
        isAdmin: boolean,
        __v: number,
        _id: string
    },
    success: boolean

}

export const authAPI = {
    registration(email: string, password: string) {
        return instance.post<RegistrationType>('auth/register', {
                email,
                password
            }
        ).then(res => res.data)
    }
}