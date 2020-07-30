import {instance} from "../../../../n1-main/m3-dal/api";

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
        )
            .then(res => res.data)
    }
}