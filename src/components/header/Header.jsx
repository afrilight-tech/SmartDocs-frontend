import React from "react";
import { Link, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import style from './assets/css/Header.module.css'
import { HiBars3BottomRight } from "react-icons/hi2";
import { FaSearch, FaRegTimesCircle } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';
import logo from './assets/images/smartdocs-logo.png'
import ButtonLink from "../button/ButtonLink";

function Header() {


    // Initailizing the library used for the animations on scroll
    useEffect(() => {
        AOS.init();
    }, []);

    const location = useLocation();

    // this sets a default state for the navigation bar on small screen
    const [isNavExpanded, setIsNavExpanded] = useState(false)


    // this function closes the navigation bar on small screen once the menu links are clicked
    const close = () => {
        setIsNavExpanded(false);
    };


    // this function changes the background color of the header once the scroll is greater than 100
    // useEffect(() => {
    //     let header = document.getElementById("header");
    //     let logotext = document.getElementById("logotext")
    //     window.addEventListener("scroll", () => {
    //         if (window.scrollY > 100) {
    //             header.style.background = " linear-gradient(to right,  white, white)"

    //         } else {
    //             header.style.background = "linear-gradient(to right,  #00b0ea2c, #2f348d60)"

    //         }
    //     })
    // })





    // default component rendered on the header for every page
    return (

        // header
        <div className={style.header} id="header">
            <div className={style.header_inner} >
                <div className={style.logo}>
                    <Link to="/" onClick={close}>
                        <img src={logo} alt="" />
                    </Link>
                </div>


                {/* menu: on large screen classname is menu, and once the nav is expanded on small screen the classname changes to sm_menu */}
                <div className={isNavExpanded ? style.sm_menu  : style.menu}>
                    <ul className={style.menu_links}>



                        <li className={style.menu_item}><Link onClick={close}
                            to="/" className={style.router_link} id={location.pathname === "/" ? style.active : style.none}>Home</Link></li>


                        <li className={style.menu_item}><Link onClick={close}
                            to="/solutions" className={style.router_link} id={location.pathname.includes ("/solutions") ? style.active : style.none}>Solutions</Link></li>

                        <li className={style.menu_item}><Link activeClass="active" onClick={close}
                            to="/pricing" className={style.router_link} id={location.pathname === "/pricing" ? style.active : style.none}>Pricing</Link></li>

                        <li className={style.menu_item}><Link activeClass="active" onClick={close}
                            to="/about-us" className={style.router_link} id={location.pathname === "/about-us" ? style.active : style.none}>About Us</Link></li>


                        <li className={style.menu_item}><Link activeClass="active" onClick={close}
                            to="/help" className={style.router_link} id={location.pathname === "/help" ? style.active : style.none}>Help</Link></li>

                        <li className={style.menu_item} id={location.pathname === "/contact" ? style.active : style.none}>
                            <ButtonLink to={'/contact'} text={'Get Started'}/>
                        </li>
                    </ul>

                </div>


                {/* sm_cntrl: this class is the parent of the two icons that controls the navigation bar on small screen, as written in the function above, once the first icon is clicked it changes the state of the navigation bar */}
                <div className={style.sm_cntrl}>
                    {!isNavExpanded ?
                        <HiBars3BottomRight className={style.cntrl} onClick={() =>
                            setIsNavExpanded(!isNavExpanded)
                        } /> : <FaRegTimesCircle className={style.cntrl} onClick={() => {
                            setIsNavExpanded(!isNavExpanded);
                            document.querySelector('.sm_menu').classList.add('.removing');
                        }
                        } />
                    }
                </div>

            </div>

        </div>
        // header
    )
}

export default Header