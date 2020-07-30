import {instance} from "../../../../n1-main/m3-dal/api";

export const authAPI = {
    restorePassword(email: string){
        return instance.post<any>('auth/forgot', {
            email,
            html1: "<a href='http://localhost:3000/cards#/restorePassword/",
            html2: "'>reset-password-link</a>"
        }).then(res => res.data)
    }
}