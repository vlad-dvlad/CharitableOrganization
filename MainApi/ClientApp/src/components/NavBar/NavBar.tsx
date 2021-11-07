import React from "react";
import { NavLink } from "react-router-dom";
import s from "./navbar.module.scss";

const NavBar = () => {
    return (
        <nav className={s.navbar}>
            <ul className={s.navbar__list}>
                <li className={s.navbar__item}><NavLink to="/projects">Проекти</NavLink></li>
                <li className={s.navbar__item}><NavLink to="/reports">Звітність</NavLink></li>
                <li className={s.navbar__item}><NavLink to="/aboutus">Про нас</NavLink></li>
                <li className={s.navbar__item}><NavLink to="/login">Вхід</NavLink></li>
            </ul>
        </nav>
    );
}

export default NavBar;