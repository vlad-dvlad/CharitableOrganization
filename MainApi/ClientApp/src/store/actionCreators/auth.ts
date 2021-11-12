import {AuthAction, AuthActionTypes} from "../../types/auth/auth";
import {Dispatch} from "redux";
import {instance} from "../../api/api";
import axios from "axios";

export const setRegisterUser = (flag : boolean) => ({type: AuthActionTypes.SET_REGISTER, flag});

export const setLoginUser = (username: string, password: string) => async (dispatch : Dispatch<AuthAction>) => {
    try {
        dispatch({type: AuthActionTypes.SET_USER});
        const response = await axios.post("http://localhost:5000/api/users/auth", { username, password });
        console.log("ssssssssssssss");
        dispatch({type: AuthActionTypes.SET_USER_SUCCESS, payload: response.data, isAuth: true});
    } catch (e) {
        console.log("xxxxxxxxxxxx");
        dispatch({
            type: AuthActionTypes.SET_USER_ERROR,
            payload: "Error login user",
        });
    }
}

 