import {AuthAction, AuthActionTypes} from "../../types/auth/auth";
import {Dispatch} from "redux";
import {instance} from "../../api/api";

export const setRegisterUser = (flag : boolean) => ({type: AuthActionTypes.SET_REGISTER, flag});

export const setLoginUser = (username: string, password: string) => async (dispatch : Dispatch<AuthAction>) => {
    try {
        dispatch({type: AuthActionTypes.SET_USER});
        const response = await instance.post(`users/auth`, {username, password});
        dispatch({type: AuthActionTypes.SET_USER_SUCCESS, payload: response.data});
    } catch (e) {
        dispatch({
            type: AuthActionTypes.SET_USER_ERROR,
            payload: "Error login user",
        });
    }
}

 