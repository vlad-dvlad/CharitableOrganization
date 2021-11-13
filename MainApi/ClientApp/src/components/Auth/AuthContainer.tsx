import * as React from 'react';
import Login from "./Login";
import Register from "./Register";
import {usedTypedSelector} from "../../hooks/useTypedSelector";
import {setRegisterUser} from "../../store/actionCreators/auth";
import {useActions} from "../../hooks/useActions";
const s = require("./auth.module.scss");

const AuthContainer = () => {

    let isRegister = usedTypedSelector(state => state.auth.isRegister);
    let isAuth = usedTypedSelector(state => state.auth.isAuth);


    const { setRegisterUser, setLoginUser, setRegisterUserProfile} = useActions();

    const setRegister = (flag : boolean) => {
        setRegisterUser(flag);
    }


    return (
        <div>
            {
                isRegister && <Login setLoginUser={setLoginUser} isAuth={isAuth}/>
            }
            {
                !isRegister && <Register setRegisterUserProfile={setRegisterUserProfile} isRegister={isRegister}/>
            }
            <div onClick={() => setRegister(false)}>Registration</div>
        </div>
    );
}

export default AuthContainer;