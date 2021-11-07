import React from "react";
import s from "./header.module.scss";

const Header = () => {
    return (
        <header className={ s.header}>
            <div className={s.header__container}>
                <div className={s.header__main}>
                    <div className={s.header__company}>
                        <h2>Благодійна організація</h2>
                    </div>
                    <div className={s.header__content}>
                        <div className={s.header__item}>Проекти</div>
                        <div className={s.header__item}>Звітність</div>
                        <div className={s.header__item}>Про нас</div>
                        <div className={s.header__item}>Вхід</div>
                    </div>
                </div>

            </div>
        </header>
    );
}

export default Header;