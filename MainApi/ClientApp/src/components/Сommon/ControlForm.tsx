import * as React from 'react';
import {FieldValidatorType} from "../../utils/validators";
import { Field, WrappedFieldProps } from "redux-form";

const eS = require("./controlForms.module.scss");
const f = require("../Auth/auth.module.scss");


const ControlForm: React.FC<WrappedFieldProps> = ({meta:{touched, error}, children}) => {
    const hasError = touched && error;
    return (
        <div className={eS.validation__container}>
            <div className={`${f.login__form} ${hasError ? eS.validation__field : ""}`}>
                { children }
            </div>
            <div className={eS.validation__message}>
                {hasError && <span>{error}</span>}
            </div>
        </div>
    )
};



export const Textarea : React.FC<WrappedFieldProps> = (props) => {
    const {input, meta, ...restProps} = props;
    return (
        <ControlForm {...props}><textarea {...input} {...restProps}/></ControlForm>
    )
}

export const Input : React.FC<WrappedFieldProps> = (props) => {
    const {input, meta, ...restProps} = props;
    return (
        <ControlForm {...props}><input {...input} {...restProps} className={ f.login__style } /></ControlForm>
    )
}

export const createField = (placeholder: string | undefined, name: string,
                            validators : Array<FieldValidatorType>,
                            component: React.FC<WrappedFieldProps>,
                             props = {}, text = "", ) => {

    return (
      <div>
            <Field placeholder={placeholder} name={name}
                validate={validators}
                component={component}
                type={name}
                {...props}
          /> {text}
      </div>
    );

}