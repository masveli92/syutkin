import css from './Main.module.css'
import {Header} from "../header/Header";
import {text} from "../../data/text";

function Main() {
    return (
        <div>
            <div className={css.container}>
                <h2 className={css.mainText}> Syutkin Team</h2>
                <h4 className={css.text}> Стань частиною команди. Приєднуйся вже сьогодні, та будь краще разом з
                    нами <br/> перша консультація безкоштовна</h4>
                <div className={css.navContainer}>
                    <button className={css.button}>Запис на консультацію</button>
                    <button className={css.button}>Пакети планів</button>
                </div>
            </div>

        </div>
    )
}

export {Main}