import React from 'react'
import './Footer.css'
import Instagram from '../../assets/instagram.png'
import linkdin from '../../assets/linkedin.png';
import logo from '../../assets/logo.png'
function Footer() {
  return (
    <div className="footer_container">
        <hr />
        <div className="footer">
            <div className="social_icon">
                <img src={Instagram} alt="" />
                <img src={linkdin} alt="" />
            </div>

            <div className="logo-f">
               <img src={logo} alt="" />
            </div>
            
        </div>
        <div className="blure footer_blure1"></div>
        <div className="blure footer_blure2"></div>
    </div>
  )
}

export default Footer
