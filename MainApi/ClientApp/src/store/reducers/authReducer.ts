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
    isRegister: true,
}



/**
 *
 * @param state - initial State for registration
 * @param action - action operations for check register, set user (success, error)
 */

export const authReducer = (state = initialState, action: AuthAction): AuthState => {
    switch (action.type) {
        case AuthActionTypes.SET_REGISTER:
            return {...state, isRegister : action.flag}
        case AuthActionTypes.SET_USER :
            return { ...state, loading: true, error: null, username: action.username } // доробити
        case AuthActionTypes.SET_USER_SUCCESS:
            return { ...state, loading: false, error: null, isAuth: action.isAuth}
        case AuthActionTypes.SET_USER_ERROR:
            return { ...state, loading: false, error: action.payload }
        case AuthActionTypes.SET_REGISTER_USER:
            return {...state, isRegister: action.isRegister}
        default: return state;
    }
}