import { useState, useEffect } from 'react'
import './App.css'
import { Route, Router, Routes, useLocation } from 'react-router-dom'
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import NotFound from './components/404/404';
import Home from './components/pages/home/Home';
import Contact from './components/pages/contact/Contact';

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





        {/* contact */}
        <Route path='/contact' element={<Contact />} />

        {/* 404 */}
        <Route path='*' element={<NotFound />} />

      
      
      
      </Routes>







      {/* footer */}
      <Footer />
    </div>
  )
}

export default App
