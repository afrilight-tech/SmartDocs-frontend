import React from "react";
import style from './assets/css/Pricing.module.css'
import PricingWriteUp from "./components/pricing-write-up/PricingWriteUp";
import { Helmet } from "react-helmet-async";


function Pricing() {


    // the default component returned when the page is requested on the server
    return (

        <>
        <Helmet>
            <title>Pricing</title>
            <meta name="description" content="SmatDocs Pricing" />
            <link rel="canonical" href="/pricing" />
        </Helmet>


        <div className={style.Pricing} id="Pricing">


            <PricingWriteUp />

        </div>

        </>
    )
}

export default Pricing