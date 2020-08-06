import {instance} from "../../../n1-main/m3-dal/api";


export const packsAPI = {

    getPacks(userId: string, token: string | undefined)  {
        return  instance.get<any>(`cards/pack?token=${token}&user_id=${userId}`)
            .then(res => {
                return res.data
            })
    },
    addPack(token: string | undefined) {
        return instance.post('cards/pack', {cardsPack: token})
            .then(res => {
                return res.data
            })
    },
}

