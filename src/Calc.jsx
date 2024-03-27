import Menu from "./Menu.jsx"
import style from "./Calc.module.css"

export const Calc = () => {
    return(
        <>
            <Menu/>
                <div className={style.sectionCalc}>
                    <h1>Cáculo</h1>
                </div>
        </>
    )
}