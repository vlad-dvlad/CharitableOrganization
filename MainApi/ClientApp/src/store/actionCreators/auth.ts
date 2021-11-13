import {AuthAction, AuthActionTypes} from "../../types/auth/auth";
import {Dispatch} from "redux";
import {instance} from "../../api/api";
import axios from "axios";

export const setRegisterUser = (flag : boolean) => ({type: AuthActionTypes.SET_REGISTER, flag});

export const setLoginUser = (username: string, password: string) => async (dispatch : Dispatch<AuthAction>) => {

    try {
        dispatch({ type: AuthActionTypes.SET_USER });
        const response = await instance.post(`users/auth`, { username, password });
        if (response.data.isSuccessful) {
            dispatch({ type: AuthActionTypes.SET_USER_SUCCESS, payload: response.data, isAuth: true });
        } else {
            throw new Error("Something wrong!")
        }
    } catch (e) {
        dispatch({
            type: AuthActionTypes.SET_USER_ERROR,
            payload: "Error login user",
        });
    }

}

 