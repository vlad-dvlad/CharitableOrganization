import * as React from 'react';

const s = require("./footer.module.scss");

const Footer = () => {
    return (
        <footer className={`${s.footer} ${s.footer__container}`}>
            <div className={s.footer__copyright}>
                <h2>Курсовий проект, виконав студент групи КН-308 Івашко В. Д.</h2>
            </div>
        </footer>
    );
}

export default Footer;