
type initialStateType = {
    userId: string
    userName: string

}

const initialState: initialStateType = {
    userId: '1',
    userName: 'Oxana'
}

export const ProfileReducer = (state: initialStateType = initialState, action : any) => {
    return state;
}

