import {AuthAction, AuthActionTypes} from "../../types/auth/auth";
import {Dispatch} from "redux";
import {instance} from "../../api/api";

export const setRegisterUser = (flag : boolean) => ({type: AuthActionTypes.SET_REGISTER, flag});

export const setLoginUser = (username: string, password: string) => async (dispatch : Dispatch<AuthAction>) => {
    try {
        const response = await instance.post(`users/auth`, { username, password });
        if (response.data.isSuccessful) {
            dispatch({ type: AuthActionTypes.SET_USER, username });
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

export const setRegisterUserProfile = (firstName: string, lastName: string,
                                email: string, password: string,
                                username: string) =>  async (dispatch: Dispatch<AuthAction>) => {

    try {
        let response = await instance.post(`users/register`, {firstName, lastName, email, password, username});
        if (response.data.isSuccessful) {
            dispatch({type: AuthActionTypes.SET_REGISTER_USER, isRegister : true})

            
        } else {
            throw  new Error("Register is wrong!");
        }
    }  catch(e) {
        console.log("Register is failed!");
    }
}

 