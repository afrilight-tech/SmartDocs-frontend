import { useState, useEffect } from 'react';
import style from './assets/css/Solutions.module.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Helmet } from 'react-helmet-async';
import AllSolutions from './components/all-solutions/AllSolutions';

function Solutions() {

    useEffect(() => {
        AOS.init();
    }, []);



    return (


        <>
            <Helmet>
                <title>Solutions</title>
                <meta name="description" content="Frequently Asked Questions About SmartDocs" />
                <link rel="canonical" href="/Solutions" />
            </Helmet>


            <div className={style.Solutions}>
        <AllSolutions/>
            </div>

        </>
    )

}


export default Solutions