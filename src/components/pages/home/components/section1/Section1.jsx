import { Link } from 'react-router-dom'
import ButtonLink from '../../../../button/ButtonLink'
import style from './assets/css/Section1.module.css'
import section_one from './assets/images/section1.png'

function SectionOne() {

    return (

        <div className={style.SectionOne}>

            <div className={style.SectionOneImageOverlay}>

                <div className={style.SectionOneImage}>

                </div>

            </div>

            <div className={style.SectionOneImageText}>

                <div className={style.SectionOneImageTextInner}>

                    <div className={style.SectionOneImageTextBox}>
                        <h3>Reduce <span>Compl</span>iance <span>Risk</span> and Save <span>Time</span>   With <span>SmartDocs</span> Document  Automation <span>Solution</span>.</h3>
                        <ButtonLink to={''} text='Get Started' />
                    </div>

                    <div className={style.SectionOneImageTextBox}>
                        <img src={section_one} alt="" />
                    </div>

                </div>
            </div>
        </div>
    )


}

export default SectionOne 