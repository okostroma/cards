import {instance} from "../../../n1-main/m3-dal/api";


export const packsAPI = {

    getPacks(userId: string, token: string | undefined)  {
        return  instance.get<any>(`cards/pack?token=${token}&user_id=${userId}`)
            .then(res => {
                return res.data
            })
    },
    addPack(token: string | undefined, name: string) {
        return instance.post('cards/pack', {cardsPack: {name}, token})
            .then(res => {
                return res.data
            })
    },
    deletePack(token: string | undefined, id: string) {
        return instance.delete(`cards/pack?token=${token}&id=${id}`)
            .then(res => {
                return res.data
            })
    },
}

