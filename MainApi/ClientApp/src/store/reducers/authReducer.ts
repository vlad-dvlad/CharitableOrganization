import { AuthAction, AuthActionTypes, AuthState } from "../../types/auth/auth";

const initialState : AuthState = {
    userId: 0,
    firstName: "",
    lastName: "",
    email: "",
    username: "",

    loading: false,
    error: null,
    isAuth: false,
}


export const authReducer = (state = initialState, action: AuthAction): AuthState => {
    switch (action.type) {
        case AuthActionTypes.SET_USER :
            return { ...state }
        case AuthActionTypes.SET_USER_SUCCESS:
            return { ...state, loading: false, error: null }
        case AuthActionTypes.SET_USER_ERROR:
            return { ...state, loading: false, error: action.payload}
        default: return state;
    }
}