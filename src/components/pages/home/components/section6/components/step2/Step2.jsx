import { Link } from 'react-router-dom'
import style from './assets/css/Step2.module.css'
import step2 from './assets/images/step2.png'

function StepTwo() {



    return (

        <div className={style.StepTwo}>
            <div className={style.StepTwoIntro} data-aos="fade-up" data-aos-duration="1200">
                <h4>Step 2:</h4>
            </div>

            <div className={style.StepTwoInner}>

                <div className={style.StepTwoBox} id={style.text} data-aos="fade-right" data-aos-duration="1200">
                    <h4>The Powerful Engine Processes Your Data</h4>
                    <p>1.	Add the engine library to your application (Java: link to JAR files, .NET: add DLLs as resources, RESTful install an ASP.NET web app).</p>
                    <p>2.	Instantiate a Report object, pass it the template, data source(s) and output destination.</p>
                    <p>3.	The powerful Windward Engine merges your template with your data creating the output document/report.</p>
                </div>

                <div className={style.StepTwoBox} data-aos="fade-left" data-aos-duration="1200">
                    <img src={step2} alt="SmartDocs Logo" />
                </div>


            </div>
        </div>
    )


}

export default StepTwo 