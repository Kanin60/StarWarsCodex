import { Link, NavLink } from 'react-router-dom'


export const Navigation = () => {

    return (
        <nav>
            <ul>
                <NavLink to="/">Forside</NavLink>
                <NavLink to="/film">Filmene</NavLink>
                <NavLink to="/karakterer">Karakterer</NavLink>
            </ul>
        </nav>
    )
}