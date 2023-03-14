import style from './assets/css/AboutUsWriteUp.module.css'
import { KeyFeaturesData } from './data/KeyFeaturesData'

function AboutUsWriteUp() {
    return (
        <div className={style.AboutUsWriteUp} data-aos="fade-up" data-aos-duration="1200">

            <div className={style.AboutUsWriteUpBox}>
                <div className={style.AboutUsWriteUpIntro}>
                    <h3>The Builders </h3>
                </div>

                <p data-aos="fade-up" data-aos-duration="1200">SmartDocs is a software product of AfriLight Technologies, a Nigerian software company. Afrilight develops software applications to simplify business processes and improve the user experience. We create secure, reliable, and scalable applications using the latest technologies.</p>
                <p data-aos="fade-up" data-aos-duration="1200">Our goal in building SmartDocs was to simplify the process of creating and managing documents, reducing the amount of time and effort needed.</p>
            </div>

            <div className={style.AboutUsWriteUpBox}>
                <div className={style.AboutUsWriteUpIntro}>
                    <h3>The Product </h3>
                </div>

                <p data-aos="fade-up" data-aos-duration="1200">SmartDocs is an advanced document automation platform that allows users to create customized templates for a wide range of document types quickly and easily. With SmartDocs, users can streamline the document creation process, reducing the time, effort, and cost involved in creating complex documents.</p>
                <p data-aos="fade-up" data-aos-duration="1200">SmartDocs offers a variety of powerful features, some of which are listed below: </p>
                {/* <p data-aos="fade-up" data-aos-duration="1200">Overall, SmartDocs is an excellent choice for businesses and individuals looking to automate their document creation process, improve efficiency, accuracy, and standardization while also reducing manual labor costs and paper waste. SmartDocs is a cost-effective solution that offers a range of powerful features, making it an essential tool for anyone looking to streamline their document creation process.</p> */}
            </div>

            <div className={style.AboutUsWriteUpBox} id={style.KeyFeatures}>
                {
                    KeyFeaturesData.map((data) => (
                        <p data-aos="fade-up" data-aos-duration="1200"> <strong>{data.no}</strong> {data.feature}</p>
                    ))
                }
            </div>

        </div>


    )
}

export default AboutUsWriteUp 