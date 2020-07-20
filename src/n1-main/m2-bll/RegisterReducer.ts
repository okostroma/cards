type initialStateType = {
    buttonName: string
    buttonType: Array<string>
    loading: boolean
    inputType: Array<string>
}

const initialState: initialStateType = {
    buttonName: 'Sign up',
    buttonType: ['primary', 'danger'],
    loading: false,
    inputType: ['text', 'password']
}

const RegisterReducer = (state: initialStateType = initialState, action : any) => {
    return state;
}

export default RegisterReducer;