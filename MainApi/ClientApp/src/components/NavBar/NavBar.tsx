import * as React from 'react';
import { NavLink } from "react-router-dom";
import { usedTypedSelector } from '../../hooks/useTypedSelector';

const s = require("./navbar.module.scss");

const NavBar = () => {

    let isAuth = usedTypedSelector(state => state.auth.isAuth);

    return (
        <nav className={s.navbar}>
            <ul className={s.navbar__list}>
                <li className={s.navbar__item}><NavLink to="/projects" className={ s.text }>Проекти</NavLink></li>
                <li className={s.navbar__item}><NavLink to="/reports" className={s.text}>Звітність</NavLink></li>
                <li className={s.navbar__item}><NavLink to="/aboutus" className={s.text}>Про нас</NavLink></li>
                {
                    !isAuth && <li className={s.navbar__item}><NavLink to="/login" className={s.text}>Вхід</NavLink></li>
                }
                {
                    isAuth && <li className={s.navbar__item}><NavLink to="/aboutus" className={s.text}>Hello</NavLink></li>
                }
                
            </ul>
        </nav>
    );
}

export default NavBar;