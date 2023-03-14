import style from './assets/css/Home.module.css'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import SectionOne from './components/section1/Section1'
import Line from '../../line/Line'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react'
import SectionTwo from './components/section2/Section2'
import SectionThree from './components/section3/Section3'
import SectionFour from './components/section4/Section4'
import SectionFive from './components/section5/Section5'
import SectionSix from './components/section6/Section6'
import NextToFooter from '../../next-to-footer/NextToFooter'
function Home() {

    // Initailizing the library used for the animations on scroll
    useEffect(() => {
        AOS.init();
    }, []);


    return (
        <>
            <Helmet>
                <title>SmartDocs - Automate . Accelerate</title>
                <meta name="description" content="The page you requested cannot be found on this server" />
                <link rel="canonical" href="*" />
            </Helmet>


            <div className={style.Home} id="home">

                <SectionOne />

                <SectionTwo />

                <SectionThree />

                <SectionFour />

                <SectionFive />

                <SectionSix/>
            </div>



        </>
    )
}
export default Home

