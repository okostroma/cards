
type initialStateType = {
    buttonName: string
    type: Array<string>
    loading: boolean
}

const initialState: initialStateType = {
    buttonName: 'Sign in',
    type: ['primary', 'danger'],
    loading: false
}

const LoginReducer = (state: initialStateType = initialState, action : any) => {
    return state;
}

export default LoginReducer;