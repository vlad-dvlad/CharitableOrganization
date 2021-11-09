export interface AuthState {
    userId: number,
    firstName: string,
    lastName: string,
    email: string,
    username: string,

    loading: boolean,
    error: null | string,
    isAuth: boolean,
}

export enum AuthActionTypes {
    SET_USER = "MainApi/auth/SET_USER",
    SET_USER_SUCCESS = "MainApi/auth/SET_USER_SUCCESS",
    SET_USER_ERROR = "MainApi/auth/SET_USER_ERROR",
}

interface SetUserAction {
    type: AuthActionTypes.SET_USER;
}

interface SetUserActionSuccess {
    type: AuthActionTypes.SET_USER_SUCCESS;
    payload: any[];
}

interface SetUserActionError {
    type: AuthActionTypes.SET_USER_ERROR;
    payload: "string";
}

export type AuthAction = SetUserAction | SetUserActionSuccess | SetUserActionError;