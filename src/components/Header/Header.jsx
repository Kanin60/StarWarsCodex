import style from "./Header.module.scss"
export const Header = () => {

    return (
        <header className={style.Header}>
            <h1>Star Wars Codex</h1>
            <h2>Find alt om filmene og karakterene</h2>
        </header>
    )
}