import { useState, useEffect } from 'react';
import ButtonLink from '../../../../button/ButtonLink';
import style from './assets/css/AllSolutions.module.css'
import { AllSolutionsData } from './data/AllSolutionsData';


function AllSolutions() {


    return (

        <div className={style.AllSolutions}>

            <div className={style.AllSolutionsIntro}>
<h4>SmartDocs helps improve efficiency, reduce errors, and free up time for more important tasks in these business sectors:</h4>
            </div>

            <div className={style.AllSolutionsInner}>

                {
                    AllSolutionsData.map((data, index) => (


                        <div className={style.AllSolutionsBox} data-aos="fade-up" data-aos-duration="1200">
                            <img key={index} src={data.image} alt="" />
                            <h4 key={index}>{data.title}</h4>
                            <p key={index} >{data.content.split(' ').slice(0, 20).join(' ') + '...'}</p>
                            <ButtonLink to={`/solutions/${data.link}`} text={'Read More'} />
                        </div>

                    ))
                }


            </div>
        </div>


    )

}


export default AllSolutions