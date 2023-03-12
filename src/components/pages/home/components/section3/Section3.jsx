import { Link } from 'react-router-dom'
import ButtonLink from '../../../../button/ButtonLink'
import style from './assets/css/Section3.module.css'
import { BenefitData } from './data/BenefitsData'

function SectionThree() {



    return (

        <div className={style.SectionThree}>

            <div className={style.SectionThreeIntro} data-aos="fade-up" data-aos-duration="1200">
                <h3>Top Benefits</h3>
            </div>

            <div className={style.SectionThreeInner}>

                {
                    BenefitData.map((benefit) => (


                        <div className={style.SectionThreeBox} data-aos="fade-up" data-aos-duration="1200">
                            <img src={benefit.image} alt="" />
                            <h4>{benefit.title}</h4>
                            <p>{benefit.content}</p>
                        </div>
                    ))
                }

            </div>
        </div>

    )


}

export default SectionThree 