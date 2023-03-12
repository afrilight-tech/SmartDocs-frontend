import { FaAngleDoubleDown } from "react-icons/fa";
import style from './assets/css/Arrow.module.css'
function Arrow (){
    return(

        <div className={style.Arrow} data-aos="fade-up" data-aos-duration="1200">
        <hr />
        <FaAngleDoubleDown className={style.StepArrow} data-aos="fade-up" data-aos-duration="1200"/>
        </div>

    )
}

export default Arrow