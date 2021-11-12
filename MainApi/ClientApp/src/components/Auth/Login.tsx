import * as React from 'react';
import { Redirect } from 'react-router-dom';

import { InjectedFormProps, Field, reduxForm} from "redux-form";
import {setLoginUser} from "../../store/actionCreators/auth";
import {FC} from "react";

const s = require("./auth.module.scss");

interface FormLoginProps {
    username: string,
    password: string,
}

interface StateLoginProps {
    isAuth: boolean,
}

interface DispatchLoginProps {
    setLoginUser: (u: string, p: string) => void,
}


const Login : FC<StateLoginProps & DispatchLoginProps> = (props) => {

    const onSubmit = (formData : FormLoginProps) => {
        props.setLoginUser(formData.username, formData.password);
    }

    if (props.isAuth) {
        return <Redirect to={'/aboutus'} />
    }

    return (
        <div>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    );
};

const LoginForm : FC<InjectedFormProps<FormLoginProps>> = ({handleSubmit}) => {

    return (
        <form onSubmit={handleSubmit} className={s.login}>
            <div className={s.login__container}>
                <div className={s.login__form}>
                    <Field component="input" type="text" name="username" placeholder="Логін" className={s.login__style}  />
                </div>
                <div className={s.login__form}>
                    <Field component="input" type="password" name="password" placeholder="Пароль" className={s.login__style}  />
                </div>
                <div className={s.login__btn} >
                    <button className={s.login__submit} >Вхід</button>
                </div>
            </div>
        </form>
    );
}


const LoginReduxForm = reduxForm<FormLoginProps>({
    form: "login"
})(LoginForm);

export default Login;