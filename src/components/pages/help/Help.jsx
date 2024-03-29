import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import style from './assets/css/Help.module.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import QandA from './components/q-and-a/QandA';
import GettingStarted from './components/getting-started/GettingStarted';
import { Helmet } from 'react-helmet-async';

function Help() {

    useEffect(() => {
        AOS.init();
    }, []);



    return (


        <>
            <Helmet>
                <title>Help</title>
                <meta name="description" content="Frequently Asked Questions About SmartDocs" />
                <link rel="canonical" href="/help" />
            </Helmet>


            <div className={style.Help}>
                <QandA />
            </div>

        </>
    )

}


export default Help