export interface AuthState {
    userId: number,
    firstName: string,
    lastName: string,
    email: string,
    username: string,

    loading: boolean,
    error: null | string,
    isAuth: boolean,
    isRegister: boolean,
}

export enum AuthActionTypes {
    SET_USER = "MainApi/auth/SET_USER",
    SET_USER_SUCCESS = "MainApi/auth/SET_USER_SUCCESS",
    SET_USER_ERROR = "MainApi/auth/SET_USER_ERROR",
    SET_REGISTER = "MainApi/auth/CHECK_REGISTER",
    SET_REGISTER_USER = "MainApi/auth/SET_REGISTER_USER",
}

interface SetUserAction {
    type: AuthActionTypes.SET_USER;
    username: string;
}

interface SetUserActionSuccess {
    type: AuthActionTypes.SET_USER_SUCCESS;
    isAuth: boolean;
    payload: any[];
}

interface SetUserActionError {
    type: AuthActionTypes.SET_USER_ERROR;
    payload: string;
}

interface SetRegisterAction {
    type: AuthActionTypes.SET_REGISTER;
    flag: boolean;
}

interface SetRegisterUserAction {
    type: AuthActionTypes.SET_REGISTER_USER;
    isRegister: true;
}


export type AuthAction = SetUserAction | SetUserActionSuccess | SetUserActionError | SetRegisterAction | SetRegisterUserAction;