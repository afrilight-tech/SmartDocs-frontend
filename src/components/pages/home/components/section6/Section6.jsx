import { Link } from 'react-router-dom'
import ButtonLink from '../../../../button/ButtonLink'
import style from './assets/css/Section6.module.css'
import Arrow from './components/arrow/Arrow'
import StepOne from './components/step1/Step1'
import StepTwo from './components/step2/Step2'
import StepThree from './components/step3/Step3'

function SectionSix() {



    return (

        <div className={style.SectionSix}>


            <div className={style.SectionSixInner}>

                <div className={style.SectionSixBox} id={style.text} data-aos="fade-up" data-aos-duration="1200">
                    <h3>How SmartDocs Works</h3>
                    <p>In the SmartDocs Platform, Smart documents are created with conditional logic functionality and connected data sources. Data connected templates create personalized output tailored for your recipients.</p>

                </div>

                <StepOne />

                <Arrow/>

                <StepTwo />

                <Arrow/>

                <StepThree />
            </div>
        </div>
    )


}

export default SectionSix 