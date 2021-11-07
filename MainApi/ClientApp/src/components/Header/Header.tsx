import * as React from 'react';
import NavBar from "../NavBar/NavBar";

const s = require("./header.module.scss");

const Header = () => {
    return (
        <header className={ s.header}>
            <div className={s.header__container}>
                <div className={s.header__main}>
                    <div className={s.header__company}>
                        <h2>Благодійна організація</h2>
                    </div>
                    <div className={s.header__content}>
                        <NavBar />
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;