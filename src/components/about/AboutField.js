import css from './AboutField.module.css'

function AboutField(props) {

    let {aboutText, aboutPic} = props;

    return (
        <div className={css.aboutField}>
            <div className={css.aboutText}><h3 className={css.Text}> {aboutText}</h3></div>
            <div className={css.aboutPic}><img src={aboutPic} alt={"photo"} className={css.aboutPic}/></div>
        </div>
    )
}

export {AboutField}
