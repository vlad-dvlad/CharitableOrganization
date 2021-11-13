import * as React from 'react';
import { Redirect } from 'react-router-dom';

import { InjectedFormProps, Field, reduxForm} from "redux-form";
import {FC} from "react";
import {createField, Input} from "../Сommon/ControlForm";
import {required} from "../../utils/validators";

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
 
const LoginForm : React.FC<InjectedFormProps<FormLoginProps>> = ({handleSubmit}) => {

    return (
        <form onSubmit={handleSubmit} className={s.login}>
            <div className={s.login__container}>
                <div className={s.login__form}>
                    <Field component={Input} type="text" name="username" placeholder="Логін" className={s.login__style} validate={required} />
                    {/*{createField("Логін", "username", [required], Input)}*/}
                    {/*<Field className={s.login__style} type="text" name="username" placeholder="Логін"
                        component={Input} validate={[require]}/>*/}
                </div>
                <div className={s.login__form}>
                    <Field component={Input} type="password" name="password" placeholder="Пароль" className={s.login__style} validate={ required }  />
                    {/*{createField("Пароль", "password", [required], Input )}*/}
                    {/*<Field className={s.login__style} type="password" name="password" placeholder="Пароль"
                        component={Input} validate={[require]}/>*/}
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