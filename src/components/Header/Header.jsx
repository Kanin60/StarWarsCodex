import style from "./Header.module.scss"
export const Header = () => {

    return (
        <header className={style.Header}>
            <hgroup>
                <h1>Star<br />Wars</h1>
                <h1><span>Codex</span></h1>
            </hgroup>
        </header>
    )
}