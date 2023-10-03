import { Link, NavLink } from 'react-router-dom'
import style from "./Navigation.module.scss";

export const Navigation = () => {

    return (
        <nav className={style.nav}>
            <ul>
                <NavLink to="/">Forside</NavLink>
                <NavLink to="/film">Filmene</NavLink>
                <NavLink to="/karakterer">Karakterer</NavLink>
            </ul>
        </nav>
    )
}