import { Link } from 'react-router-dom'
import style from './assets/css/Step1.module.css'
import step1 from './assets/images/step1.png'

function StepOne() {



    return (

        <div className={style.StepOne}>
            <div className={style.StepOneIntro} data-aos="fade-up" data-aos-duration="1200">
                <h4>Step 1:</h4>
            </div>

            <div className={style.StepOneInner}>

                <div className={style.StepOneBox} data-aos="fade-right" data-aos-duration="1200">
                    <img src={step1} alt="SmartDocs Logo" />
                </div>

                <div className={style.StepOneBox} id={style.text} data-aos="fade-left" data-aos-duration="1200">
                    <h4>Design Your Smart Documents</h4>
                    <p>1.	Connect one or multiple data sources to your DOCX, XLSX, or PPTX template.</p>
                    <p>2.	Design your template within Microsoft Office (Word, Excel, or PowerPoint).</p>
                    <p>3.	Use the full power of Office for layout & formatting.</p>
                    <p>4.   Use conditional logic to customize your content inline creating a smart document</p>
                </div>

            </div>
        </div>
    )


}

export default StepOne 