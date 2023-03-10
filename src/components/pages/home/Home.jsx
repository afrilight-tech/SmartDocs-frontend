import style from './assets/css/Home.module.css'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import SectionOne from './components/section1/Section1'
import Line from '../../line/Line'
function Home() {


    return (
        <>
            <Helmet>
                <title>SmartDocs - Automate . Accelerate</title>
                <meta name="description" content="The page you requested cannot be found on this server" />
                <link rel="canonical" href="*" />
            </Helmet>


            <div className={style.Home} id="home">

                <SectionOne/>


            </div>



        </>
    )
}
export default Home

