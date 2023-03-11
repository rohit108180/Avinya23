import React from 'react'
import insta from './assets/instagram.svg'
import twitter from './assets/twitter.svg'
import linkedin from './assets/linkedin.svg'
// import facebook from './assets/facebook.svg'
import "./Footer.css";

const Footer = () => {
  return (
    
    <>
    <footer className="footer-distributed">

        <div className="footer-left">
            <h3 >AVINYA</h3>

            <p className="footer-tag">
                Innovation meets Technology
            </p>
         </div>

        <div className="footer-center">
            <p className="footer-follow">
                Follow us on
            </p>
            <div className="footer-icons">
                <a href='https://instagram.com/devcomm.nsut?igshid=YmMyMTA2M2Y=' target="_blank" rel="noreferrer">
                  <img  id='foot-icon' src={insta} alt="icon" className='foot_icon'/>
                  </a>
                {/* <a href='www.goole.com'><img src={facebook} id='foot-icon' className='foot_icon' alt="icon"/></a> */}
                <a href='https://twitter.com/23Avinya' target="_blank" rel="noreferrer"><img src={twitter} id='foot-icon' className='foot_icon' alt="icon" /></a>
                <a href='https://www.linkedin.com/company/devcommnsut' target="_blank" rel="noreferrer"><img src={linkedin} id='foot-icon' className='foot_icon' alt="icon"/></a>

            </div>
        </div>

        <div className="footer-right">
            <div>
              <h4>EMAIL</h4>
                
                <p><a  href='mailto: devcomm.international@nsut.ac.in'>devcomm.international@nsut.ac.in </a></p>
            </div>
            
        </div>
        <div className='footer-right2'>
              <h4>Address</h4>
              <a href='https://goo.gl/maps/RWLtsD8EKUUZNykLA' target="_blank" rel='noreferrer'><p>NSUT Dwarka Sector-3</p></a>
        </div>
        
       
    </footer>



 
      
   </>
    
    
  )
}

export default Footer
