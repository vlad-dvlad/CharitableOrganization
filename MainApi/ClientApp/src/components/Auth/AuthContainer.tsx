import * as React from 'react';
const s = require("./auth.module.scss");

const AuthContainer = () => {
    return (
        <div>
            <div className={s.login}>
                <div className={s.login__container}>
                    <div className={s.login__form}>
                        <input type="text" name="fname" placeholder="Ім'я" className={s.login__style} />
                    </div>
                    <div className={s.login__form}>
                        <input type="text" name="lname" placeholder="Прізвище" className={s.login__style}  />
                    </div>
                    <div className={s.login__form}>
                        <input type="email" name="email" placeholder="Електронна пошта" className={s.login__style}  />
                    </div>
                    <div className={s.login__form}>
                        <input type="text" name="username" placeholder="Логін" className={s.login__style}  />
                    </div>
                    <div className={s.login__form}>
                        <input type="password" name="password" placeholder="Пароль" className={s.login__style}  />
                    </div>
                    <div className={s.login__btn} >
                        <button className={s.login__submit} >Зареєструватись</button>
                        <div>Уже маєте акаунт? Виконайте вхід</div>
                        <button>Вхід</button>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default AuthContainer;