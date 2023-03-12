import { Link } from 'react-router-dom'
import style from './assets/css/Step3.module.css'
import step3 from './assets/images/step3.png'

function StepThree() {



    return (

        <div className={style.StepThree} >

            <div className={style.StepThreeIntro} data-aos="fade-up" data-aos-duration="1200">
                <h4>Step 3:</h4>
            </div>

            <div className={style.StepThreeInner}>

                <div className={style.StepThreeBox} data-aos="fade-right" data-aos-duration="1200">
                    <img src={step3} alt="SmartDocs Logo" />
                </div>

                <div className={style.StepThreeBox} id={style.text} data-aos="fade-left" data-aos-duration="1200">
                    <h4>Generate Your Output</h4>
                    <p>Generate your document/report to a wide variety of output formats: DOCX, XLSX, PPTX, PDF, HTML, and many more.</p>
                </div>

            </div>
        </div>
    )


}

export default StepThree 