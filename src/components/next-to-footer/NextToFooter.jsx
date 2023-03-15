import { Link } from 'react-router-dom'
import ButtonLink from '../button/ButtonLink'
import style from './assets/css/NextToFooter.module.css'
import {BsArrowReturnRight} from 'react-icons/bs'
function NextToFooter() {



    return (

        <div className={style.NextToFooter}>


            <div className={style.NextToFooterInner}>

                <div className={style.NextToFooterBox} data-aos="fade-up" data-aos-duration="1200">
            <h4>Reduce Compliance Risk, Eliminate Errors, Save Time And Money With SmartDocs Solution.</h4>
            <ButtonLink to={'/contact'} text={'Get In Touch'}/>
            </div>

            </div>
        </div>

    )


}

export default NextToFooter 