import style from './assets/css/PricingWriteUp.module.css'
import {BsArrowReturnRight} from 'react-icons/bs'
import { Link } from 'react-router-dom'

function PricingWriteUp() {
    return (
        <div className={style.PricingWriteUp} data-aos="fade-up" data-aos-duration="1200">

            <div className={style.PricingWriteUpBox}>
                <div className={style.PricingWriteUpIntro}>
                    <h3>How We Charge You</h3>
                </div>

                <p data-aos="fade-up" data-aos-duration="1200"> SmartDocs solutions is tailored to meet the unique needs of each client. Each project's pricing is determined by its specific needs and requirements. There are no one-size-fits-all pricing models with us.</p>
                <p data-aos="fade-up" data-aos-duration="1200">If you would like to discuss your project more in detail, please contact us directly. With our team of experts, you will fully understand the scope and requirements of your project. You will receive a personalized quote based on the work involved.</p>
                <p data-aos="fade-up" data-aos-duration="1200">The advantage of this approach is that you only pay for services that you really need. Pricing will be reasonable and competitive based on our discussions with you.</p>
                <p data-aos="fade-up" data-aos-duration="1200">Get in touch with us today to learn more about our pricing or to schedule a consultation. Looking forward to partnering with you.</p>
                <Link to={'/contact'} className={style.PricingWriteUpBoxLink}><h4>Get Started <BsArrowReturnRight className={style.PricingWriteUpBoxIcon}/> </h4></Link>
            </div>
        </div>
    )
}

export default PricingWriteUp 