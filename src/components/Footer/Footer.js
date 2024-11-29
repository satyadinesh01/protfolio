import React from 'react'
import '../Footer/Footer.css'
import { FaArrowLeft } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoSend } from "react-icons/io5";

function Footer() {
  return (
    <div className='footer'>
        <div className='footer-content1'>
            <div className='content1-text'>Lets Connect there</div>
            <button className='footer-btn'> <span>Hire Me</span> <FaArrowLeft style={{width:'auto' , height:'30px' , rotate:'140deg' , color:'white'}}/> </button>
        </div>
        <div className='footer-line'><hr></hr></div>
        <div className='footer-content2'>
            <div className='footer-content2-one'>
                <span style={{fontFamily:'Urbanist',fontSize:'32px',fontWeight:'800',lineHeight: '38.4px',letterSpacing: '-0.015em'}}>SATYA DINESH</span>
                <span style={{fontFamily:'Inter',fontSize:'20px',fontWeight:'400',lineHeight:'24.2px',letterSpacing:'-0.015em'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis.</span>
                <div className='footer-content2-one-icons'><FaFacebookSquare className='footer-content2-one-icon'/><FaWhatsappSquare className='footer-content2-one-icon'/><FaInstagramSquare className='footer-content2-one-icon'/><FaSquareXTwitter className='footer-content2-one-icon'/></div>
            </div>
            <div className='footer-content2-two'>
                <div className='footer-content2-two-head'>Navigation</div>
                <div className='footer-content2-two-body'>
                    <div className='footer-content-two-body-text'>Home</div>
                    <div className='footer-content-two-body-text'>About</div>
                    <div className='footer-content-two-body-text'>Services</div>
                    <div className='footer-content-two-body-text'>Resume</div>
                    <div className='footer-content-two-body-text'>Projects</div>
                    <div className='footer-content-two-body-text'>Contact</div>
                </div>
            </div>
            <div className='footer-content2-three'>
                <div className='footer-content-three-head'>Contact</div>
                <div className='footer-content-three-body'>
                    <span>+91 9347852797</span>
                    <br></br>
                    <span>satyadinesh5510@gmail.com</span>
                </div>
            </div>
            <div className='footer-content2-four'>
                <div className='footer-content2-four-head'>Get the latest information</div>
                <form className='footer-content2-four-body'>
                    <input className='footer-content-four-input' type="email" id="email" name="email" placeholder="Email Address" required/>
                    <button className='footer-content-four-submit' value="Submit" type="submit"><IoSend /></button>
                </form>
            </div>
        </div>
        <div className='footer-line'><hr></hr></div>
        <div className='footer-content3'>
            <div>Copyright© 2024 Satya Dinesh. All Rights Reserved.</div>
            <div>User Terms & Conditions | Privacy Policy</div>
        </div>
    </div>
  )
}

export default Footer