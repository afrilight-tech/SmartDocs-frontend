import style from './assets/css/404.module.css'
import NotFoundImage from './assets/images/not-found.png'
import Line from '../line/Line'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import ButtonLink from '../button/ButtonLink'
function NotFound() {


    return (
        <>
            <Helmet>
                <title>Not Found</title>
                <meta name="description" content="The page you requested cannot be found on this server" />
                <link rel="canonical" href="*" />
            </Helmet>
            <div className={style.NotFound}>
                <div className={style.NotFoundBox}>
                    <img src={NotFoundImage} alt="Not Found" />
                    <p>The page you requested cannot be found on this server.</p>
                    <ButtonLink text={'See Homepage'} to={'/'} />
                </div>
            </div>
        </>
    )
}
export default NotFound

