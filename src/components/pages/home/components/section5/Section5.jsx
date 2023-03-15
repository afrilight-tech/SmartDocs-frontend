import { Link } from 'react-router-dom'
import ButtonLink from '../../../../button/ButtonLink'
import style from './assets/css/Section5.module.css'
import {BsArrowReturnRight} from 'react-icons/bs'
function SectionFive() {



    return (

        <div className={style.SectionFive}>


            <div className={style.SectionFiveInner}>

                <div className={style.SectionFiveBox} data-aos="fade-up" data-aos-duration="1200">
                <h3>A template Based Approach To Document Automation</h3>
                    <p> SmartDocs allows users to create customized templates for a wide range of document types, from contracts and agreements to letters and invoices. These templates can then be populated with data from a variety of sources, including databases and other software applications, and then output as finished documents in a matter of minutes.</p>
                    <p>SmartDocs also includes powerful collaboration features, allowing users to work together on documents in real-time, regardless of their location. This makes it easy for teams to share information and make changes as needed, ensuring that everyone is on the same page.</p>
                    <p>With SmartDocs, users can automate the creation of complex documents, such as contracts, sales proposals, marketing plans, employee contracts, terms and condition of sales, Privacy Policies, Project Plans, product manuals and invoices, saving time and reducing errors.  </p>
                    <Link to={'/contact'} className={style.SectionFiveBoxLink}><h4>Schedule A Demo <BsArrowReturnRight className={style.SectionFiveBoxIcon}/> </h4></Link>
                </div>

            </div>
        </div>

    )


}

export default SectionFive 