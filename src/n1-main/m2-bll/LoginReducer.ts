
type initialStateType = {
    buttonName: string
    buttonType: Array<string>
    loading: boolean
    inputType: Array<string>
    value?: string
    isAuth: boolean
}

const initialState: initialStateType = {
    buttonName: 'Sign in',
    buttonType: ['primary', 'danger'],
    loading: false,
    inputType: ['text', 'password'],
    isAuth: false
}

const LoginReducer = (state: initialStateType = initialState, action : any) => {
    return state;
}

export default LoginReducer;