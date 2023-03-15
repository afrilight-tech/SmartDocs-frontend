import style from './assets/css/QandA.module.css'
import { FaPhone, FaEnvelope, FaLocationArrow } from "react-icons/fa";
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Line from '../../../../line/Line';
import { QandAData } from './data/QandAData';
import ButtonLink from '../../../../button/ButtonLink';
function QandA() {


    // the default component dispalyed on the Question and Answer component
    return (
        // QandA
        <div className={style.QandA}>


            <div className={style.QandAIntro}>
                <h3>Frequently Asked<span> Questions</span></h3>

            </div>




            <div className={style.QandAInner}>
                {
                    QandAData.map((data, index) => (
                        <div className={style.QandABox}>
                            <h4 key={index}>{data.question}</h4>
                            <p  data-aos="fade-up" data-aos-duration="1200" key={index}>{data.answer}</p>
                        </div>
                    ))
                }


            </div>



            <div className={style.NotHelp}>
                <h3 data-aos="fade-up" data-aos-duration="1200">Not The Help You Are Looking For?</h3>

                <p data-aos="fade-up" data-aos-duration="1200">Please contact our support team for assistance.</p>
               <ButtonLink to={'/contact'} text={'Contact Support'}/>
            </div>
        </div>

    )
}

export default QandA 