import {instance} from '../../../../n1-main/m3-dal/api';

type CommonApiType<T> = {
    data: T
}

export const profileAPI = {

    me(token: string | undefined) {
        return instance.post('auth/me', {token})
            .then(res => {
                return res
            })
    }


}