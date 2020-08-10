import {instance} from "../../../n1-main/m3-dal/api";


export const cardsAPI = {
    getCards(id: string, token: string | undefined )  {
        return  instance.get<any>(`cards/card?token=${token}&cardsPack_id=${id}`)
            .then(res => {
                return res.data
            })
    },
    addCard(packId: string, question: string, answer: string, token: string | undefined) {
        return instance.post<any>(`cards/card`, {card: {cardsPack_id: packId, question: question, answer: answer}, token})
            .then(res => res.data)
    },
    deleteCard(id: string, token: string | undefined ) {
        return instance.delete<any>(`cards/card?token=${token}&id=${id}`)
            .then(res => res.data)
    }
}

