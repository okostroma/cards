type initialStateType = {
    buttonName: string
    type: Array<string>
    loading: boolean
}

const initialState: initialStateType = {
    buttonName: 'Sign up',
    type: ['primary', 'danger'],
    loading: false
}

const RegisterReducer = (state: initialStateType = initialState, action : any) => {
    return state;
}

export default RegisterReducer;