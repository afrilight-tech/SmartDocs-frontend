import { useState, useEffect } from 'react';
import ButtonLink from '../../../../button/ButtonLink';
import { AllSolutionsData } from '../all-solutions/data/AllSolutionsData';
import style from './assets/css/SingleSolution.module.css'
import { useParams } from 'react-router-dom';
import {BsArrowReturnRight} from 'react-icons/bs'
import { Link } from 'react-router-dom'


function SingleSolution() {

    const { link } = useParams();
    const [data, setData] = useState([]);

    useEffect(() => {
        const item = AllSolutionsData.find((item) => item.link === link);
        setData(item);
      }, [link]);

    return (

        <div className={style.SingleSolution}>
            <div className={style.SingleSolutionInner}>



                        <div className={style.SingleSolutionBox}>
                        <h3>{data.title}</h3>
                            <img src={data.image} alt="" />
                            <p>{data.content}</p>
                            <Link to={'/contact'} className={style.SingleSolutionBoxLink}><h4>Get Started With SmatDocs <BsArrowReturnRight className={style.SingleSolutionBoxIcon}/> </h4></Link>
                        </div>

          

            </div>
        </div>


    )

}


export default SingleSolution