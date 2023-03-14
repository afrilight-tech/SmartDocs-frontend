import React from "react";
import style from './assets/css/AboutUs.module.css'
import AboutUsWriteUp from "./components/about-us-write-up/AboutUsWriteUp";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";


function AboutUs() {


    // the default component returned when the page is requested on the server
    return (

        <>
        <Helmet>
            <title>About Us</title>
            <meta name="description" content="Afrilight Technologies, The Builders Of Smatforms" />
            <link rel="canonical" href="/about-us" />
        </Helmet>


        <div className={style.AboutUs} id="aboutUs">


            <AboutUsWriteUp />

          

        </div>

        </>
    )
}

export default AboutUs