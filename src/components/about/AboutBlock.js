import {AboutField} from "./AboutField";
import {text} from "../../data/text";
import css from './AboutBlock.module.css'

function AboutBlock() {
    return (
        <div className = {css.aboutBlock}>
            <AboutField
                aboutText={text.aboutText1}
                aboutPic={text.aboutImage1}
            />

            <AboutField
                aboutText={text.aboutText2}
                aboutPic={text.aboutImage2}
            />
        </div>
    )
}

export {AboutBlock}
