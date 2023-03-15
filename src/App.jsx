import { useState, useEffect } from 'react'
import './App.css'
import { Route, Router, Routes, useLocation } from 'react-router-dom'
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import NotFound from './components/404/404';
import Home from './components/pages/home/Home';
import Contact from './components/pages/contact/Contact';
import AboutUs from './components/pages/about-us/AboutUs';
import NextToFooter from './components/next-to-footer/NextToFooter';
import Pricing from './components/pages/pricing/Pricing';
import Help from './components/pages/help/Help';

function App() {

  const { pathname } = useLocation();

  // scroll to the top of a new page
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, [pathname]);



  return (
    <div className="App">
      {/* header */}
      <Header />



      <Routes>

        {/* home */}

        <Route path='/' element={<Home />} />

        {/* about-us */}
        <Route path='/about-us' element={<AboutUs />} />



        {/* contact */}
        <Route path='/contact' element={<Contact />} />

        {/* 404 */}
        <Route path='*' element={<NotFound />} />


        {/* pricing */}
        <Route path='/pricing' element={<Pricing />} />


        {/* pricing */}
        <Route path='/help' element={<Help />} />




      </Routes>





      {/* next-to-footer */}
      <NextToFooter />

      {/* footer */}
      <Footer />
    </div>
  )
}

export default App
