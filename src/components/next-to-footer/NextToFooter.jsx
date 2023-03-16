import ButtonLink from '../button/ButtonLink'
import style from './assets/css/NextToFooter.module.css'
function NextToFooter() {



    return (

        <div className={style.NextToFooter}>


            <div className={style.NextToFooterInner}>

                <div className={style.NextToFooterBox} >
                    <h4>Reduce Compliance Risk, Eliminate Errors, Save Time And Money With SmartDocs Solution.</h4>
                    <ButtonLink to={'/contact'} text={'Get In Touch'} />
                </div>

            </div>
        </div>

    )


}

export default NextToFooter 