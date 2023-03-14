import { Link } from 'react-router-dom'
import ButtonLink from '../../../../button/ButtonLink'
import style from './assets/css/Section4.module.css'
import smartdocs_logo from './assets/images/smartdocs-logo.png'

function SectionFour() {



    return (

        <div className={style.SectionFour}>


            <div className={style.SectionFourInner}>

            <div className={style.SectionFourBox} data-aos="fade-right" data-aos-duration="1200">
                    <img src={smartdocs_logo} alt="SmartDocs Logo" />
                </div>

                <div className={style.SectionFourBox} id={style.text} data-aos="fade-left" data-aos-duration="1200">
                    <p>SmartDocs template automation is a cost-effective solution for businesses and individuals looking to save time and money. By automating document creation, you can improve efficiency, accuracy, and standardization, while also reducing manual labor costs and paper waste.</p>
                    <p>In addition to its advanced document automation features, SmartDocs also includes a built-in e-signature solution that allows users to send documents for signature capture directly from within the application.</p>
                    <p>With SmartDocs, users can select the document that needs to be signed, specify the recipient(s), and then send the document via email. The recipient(s) can then sign the document electronically using a mouse, touchpad, or other device, and then return the signed document to the sender.</p>
                    <p>This e-signature feature is fully compliant with industry standards and regulations and provides a secure and convenient way to capture signatures without the need for printing and scanning documents. </p>
                    <ButtonLink to={'/contact'} text='Get Started' />
                </div>

            </div>
        </div>
    )


}

export default SectionFour 