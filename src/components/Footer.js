import React from 'react'
import insta from './assets/instagram.svg'
import twitter from './assets/twitter.svg'
import linkedin from './assets/linkedin.svg'
import facebook from './assets/facebook.svg'
import "./Footer.css";

const Footer = () => {
  return (
    
    <>
    <footer className="footer-distributed">

        <div className="footer-left">
            <h3 >AVINYA</h3>

            <p className="footer-tag">
                AVINYA TAG LINE AVINYA TAG LINE
            </p>
         </div>

        <div className="footer-center">
            <p className="footer-follow">
                Follow us on
            </p>
            <div className="footer-icons">
                <a href='www.google.com'>
                  <img  id='foot-icon' src={insta} alt="icon" className='foot_icon'/>
                  </a>
                <a href='www.goole.com'><img src={facebook} id='foot-icon' className='foot_icon' alt="icon"/></a>
                <a href='www.goole.com'><img src={twitter} id='foot-icon' className='foot_icon' alt="icon" /></a>
                <a href='www.google.com'><img src={linkedin} id='foot-icon' className='foot_icon' alt="icon"/></a>

            </div>
        </div>

        <div className="footer-right">
            <div>
              <h4>EMAIL</h4>
                
                <p><a href="/">xyz@gmail.com</a></p>
            </div>
            
        </div>
        <div className='footer-right2'>
              <h4>Address</h4>
              <p>NSUT Dwarka Sector-3</p>
        </div>
        
       
    </footer>



 
      
   </>
    
    
  )
}

export default Footer
