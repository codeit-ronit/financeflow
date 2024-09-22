
import React, { useState } from 'react';
import Navbar from './Navbar'
import CoverSection from './Coversection';
import Footer from './Footer';
import Services from './Services';
import { aboutObj, discoverObj, signupObj } from './Infosection/Data.js';
import InfoSection from './Infosection/Infosection.js';
import Sidebar from './Sidebar.js';
import Discover from './Discover.js';

function Main() {
 
    const [isOpen, setIsOpen] = useState(false);
  
    const toggle = () => {
      setIsOpen(!isOpen);
    };
  
  return (
    <>
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={toggle} />
        <CoverSection />
        <InfoSection />
        <Discover/>
        <Services/>
        <Footer />

   
    </>
  )
}

export default Main ;