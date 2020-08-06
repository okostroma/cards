import {instance} from "../../../n1-main/m3-dal/api";


export const cardsAPI = {

    getCards(token: string)  {
        return  instance.get<any>(`cards/pack&token=${token}`)
            .then(res => {
                return res
            })
    }
}

