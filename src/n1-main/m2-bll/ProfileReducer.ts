
type initialStateType = {
    userId: string
    userName: string

}

const initialState: initialStateType = {
    userId: '1',
    userName: 'Oxana'
}

const ProfileReducer = (state: initialStateType = initialState, action : any) => {
    return state;
}

export default ProfileReducer;