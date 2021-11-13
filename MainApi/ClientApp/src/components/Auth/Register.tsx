import * as React from 'react';
import { InjectedFormProps, Field, reduxForm} from "redux-form";
import {Redirect} from "react-router-dom";
import {Input} from "../Сommon/ControlForm";
import { required } from "../../utils/validators";

const s = require("./auth.module.scss");

interface FormRegisterProps {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    username: string;
}

interface StateRegisterProps {
    isRegister: boolean;
}

interface DispatchRegisterProps {
    setRegisterUserProfile: (fN: string, lN: string, e: string, p: string, u: string) => void;
}

const Register : React.FC<StateRegisterProps & DispatchRegisterProps> = (props) => {

    const onSubmit = (formData : FormRegisterProps) => {
        props.setRegisterUserProfile(formData.firstName,
                                     formData.lastName,
                                     formData.email,
                                     formData.password,
                                     formData.username);
    }

/*    if (props.isRegister) {
        return <Redirect to={'/aboutus'} />
    }*/

    return (
        <div>
            <RegisterReduxForm onSubmit={onSubmit}/>
        </div>
    );
};

const RegisterForm: React.FC<InjectedFormProps<FormRegisterProps>> = ({ handleSubmit}) => {

    return (
        <form onSubmit={handleSubmit} className={s.login}>
            <div className={s.login__container}>
                <div className={s.login__form}>
                    <Field component={Input} type="text" name="fname" placeholder="Ім'я" className={s.login__style} validate={required} />
                </div>
                <div className={s.login__form}>
                    <Field component={Input} type="text" name="lname" placeholder="Прізивще" className={s.login__style} validate={required} />
                </div>
                <div className={s.login__form}>
                    <Field component={Input} type="email" name="email" placeholder="Електронна пошта" className={s.login__style} validate={required} />
                </div>
                <div className={s.login__form}>
                    <Field component={Input} type="text" name="username" placeholder="Логін" className={s.login__style} validate={required} />
                </div>
                <div className={s.login__form}>
                    <Field component={Input} type="password" name="password" placeholder="Пароль" className={s.login__style} validate={required} />
                </div>
                <div className={s.login__btn} >
                    <button className={s.login__submit} >Зареєструватись</button>
                    <div>Уже маєте акаунт? Виконайте вхід</div>
                    <button>Вхід</button>
                </div>
            </div>
        </form>
    );
}

const RegisterReduxForm = reduxForm<FormRegisterProps>({
    form: "register"
})(RegisterForm);

export default Register;