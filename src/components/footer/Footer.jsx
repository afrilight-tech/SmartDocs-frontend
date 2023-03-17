import style from './assets/css/Footer.module.css'
import { FaPhone, FaEnvelope, FaLocationArrow } from "react-icons/fa";
import { useState } from 'react';
import logo from './assets/images/smartdocs-logo.png'
import { Link } from 'react-router-dom';

function Footer() {

    // this sets the current year
    const [currentYear, setCurrentYear] = useState(new Date().getFullYear());


    // the default component dispalyed on the footer component
    return (
        // footer
        <div className={style.footer}>

            <div className={style.footer_inner}>

                <div className={style.footer_box} >
                    <div className={style.footer_box_img}>
                        <img src={logo} alt="" />
                    </div>
                </div>

                <div className={style.footer_box}  >
                    <h3>Product</h3>
                    <ul>
                        <Link to={'/'}><li >Home</li></Link>
                        <Link to={'/help'}><li >Help</li></Link>
                        <Link to={'/pricing'}><li >Pricing</li></Link>
                        <Link to={'/solutions'}><li >Solutions</li></Link>

                    </ul>
                </div>

                <div className={style.footer_box}  >
                    <h3>Useful Links</h3>
                    <ul>
                        <Link to={'/about-us'}><li >About Us</li></Link>
                        <Link to={'/contact'}><li >Get In Touch</li></Link>
                        <Link to={'https://afrilight.tech/'} target={'_blank'}><li >Afrilight Website</li></Link>
                    </ul>
                </div>

                <div className={style.footer_box}  >
                    <h3>Contact Details</h3>
                    <p > <FaLocationArrow className={style.footerIcon} /> 37, Adeniyi Jones Avenue, Ikeja Lagos</p>
                    <a href="mailto: demo@smartdocs.com"> <p ><FaEnvelope className={style.footerIcon} /> demo@smartdocs.com.</p></a>
                    <p ><FaPhone className={style.footerIcon} /> <a href="tel:+234-8084128802">+234-8084128802 </a></p>
                </div>

            </div>

            <div className={style.copywright}>
                <p >Copyright &#169;{currentYear} SmartDocs. All Rights Reserved.</p>
            </div>
        </div>
    )
}

export default Footer 