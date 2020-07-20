
type initialStateType = {
    buttonName: string
    buttonType: Array<string>
    loading: boolean
    inputType: Array<string>
}

const initialState: initialStateType = {
    buttonName: 'Sign in',
    buttonType: ['primary', 'danger'],
    loading: false,
    inputType: ['text', 'password']
}

const LoginReducer = (state: initialStateType = initialState, action : any) => {
    return state;
}

export default LoginReducer;