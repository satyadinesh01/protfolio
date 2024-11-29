import React from 'react'
import '../Mail/Mail.css'
import { IoMail } from "react-icons/io5";
import { FaStar } from "react-icons/fa";
import { LiaAwardSolid } from "react-icons/lia";
import { AiFillSafetyCertificate } from "react-icons/ai";

function Mail() {
  return (
    <div id='contact' className='mail'>
        <div className='mail-text' style={{color:'rgb(52, 64, 84)'}}>Have an Awesome Project <br></br> Idea? <span style={{color:'rgb(133, 58, 252)'}}>Let’s Discuss</span></div>
        <div className='mail-frame'>
            <div className='send-mail'>
                <div className='send-mail-text'>
                    <div className='mail-icon'><IoMail style={{width:'32px',height: '32px',}}></IoMail></div>
                    <div className='enter-mail'>Enter Email Address</div>
                </div>
                <button>Send</button>
            </div>
            <div className='rating-mail'>
                <div className='rating-div'> 
                    <FaStar style={{width:'24px',height: '24px',color:'black'}} />
                    <div className='rating-text'>4.9/5 Average Ratings</div>
                </div>
                <div className='rating-div'> 
                    <LiaAwardSolid style={{width:'24px',height: '24px',color:'black'}} />
                    <div className='rating-text'>25+ Winning Awards</div>
                </div>
                <div className='rating-div'> 
                    <AiFillSafetyCertificate style={{width:'24px',height: '24px',color:'black'}} />
                    <div className='rating-text'>Certified Product Designer</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Mail