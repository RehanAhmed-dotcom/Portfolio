import React from 'react'
import "./header.css";
import CTA from './CTA';
import ME from '../../assets/Rehan.jpg'
import HeaderSocials from './HeaderSocials';
const Header = () => {
  return (
   <header>
    
    <div className="container header__container">
    
    <h5>Hello I'm</h5>
    <h1>Rehan Ahmed</h1>
    <div className="text-light">
      Fullstack Developer
    </div>
    <CTA />
    <HeaderSocials />
    <div className="me">
    <img src={ME} alt="img"/>  
    </div>
    <a href="#contact" className="scroll__down">
      Scroll Down
    </a>
    </div>
    
    
   </header>
  )
}

export default Header