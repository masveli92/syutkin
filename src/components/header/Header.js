// import {NavLink} from "react-router-dom";

import logoSyutkin from "../../data/images/logoSyutkin.png"
import css from './Header.module.css'

const Header = () => {

    return (
        <div className={css.header}>
            <div className={css.navBlock}>
                <img src= {logoSyutkin} alt="logo" className={css.logo}/>
                <h4 className={css.text}>тренер</h4>
                <h4 className={css.text}>ціни</h4>
                <h4 className={css.text}>фото</h4>
                {/*<NavLink to={'/AboutBlock'}> Тренер </NavLink>*/}
             </div>
            <div className={css.contactBlock}>
                <h4 className={css.text}>+380 50 998 3401</h4>
                <a href="https://www.instagram.com/alekseysyutkin/" target="_blank" > INST  </a>
                <h4 className={css.text}>УКР</h4>
                <h4 className={css.text}>ENG</h4>
            </div>
        </div>
    );
};

export {Header}
