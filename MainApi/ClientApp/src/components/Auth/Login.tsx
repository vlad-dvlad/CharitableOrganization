import * as React from 'react';
import { Redirect } from 'react-router';
import {InjectedFormProps, reduxForm} from "redux-form";
import {setLoginUser} from "../../store/actionCreators/auth";

const s = require("./auth.module.scss");

interface FormLoginProps {
    username: string,
    password: string,
}

interface  DispatchLoginProps {
    setLoginUser: (u: string, p: string) => any,
    isAuth: boolean
}




const Login = (props : DispatchLoginProps) => {

    const onSubmit = (formData : any) => {
        setLoginUser(formData.username, formData.password);
    }

    if (props.isAuth) {
        return <Redirect to={'/'} />
    }

    return (
        <div>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    );
};

const LoginForm = (props: any & InjectedFormProps<FormLoginProps, any>) => {

    const handleSubmit = { ...props }

    console.log("dfskjlkdfjslkjl")

    return (
        <form onSubmit={handleSubmit} className={s.login}>
            <div className={s.login__container}>
                <div className={s.login__form}>
                    <input type="text" name="username" placeholder="Логін" className={s.login__style}  />
                </div>
                <div className={s.login__form}>
                    <input type="password" name="password" placeholder="Пароль" className={s.login__style}  />
                </div>
                <div className={s.login__btn} >
                    <button className={s.login__submit} >Вхід</button>
                </div>
            </div>
        </form>
    );
}





const LoginReduxForm = reduxForm<FormLoginProps, any>({
    form: "login"
})(LoginForm);

export default Login;