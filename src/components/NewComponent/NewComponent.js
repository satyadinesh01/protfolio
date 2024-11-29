import React from 'react'
import '../NewComponent/NewComponent.css'
import frame1 from '../../assets/Rectangle.png'
import { IoArrowBack } from "react-icons/io5";
import { useState } from 'react';

function NewComponent() {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div id='services' className='NewComponent'>
        <div className='NewServices-box1'>
          <div className='NewServices-text1'>My <span style={{color:'rgb(133, 58, 252)'}}>Services</span></div>
          <div className='NewServices-text2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis <br></br> lacus nunc, posuere in justo vulputate, bibendum sodales </div>
        </div>
        <div className='NewServices-box2'>
          <div className='NewServices-cards'>
            <div className='NewServices-card'>
              <div className='NewServices-frame' onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                <div className='NewService-frame-text'><span>Web Development</span></div>
                <div className='NewService-frame-image'><img src={frame1}></img></div>
              </div>
              <div className='NewServices-circle'><IoArrowBack style={{width:'auto' , height:'80px' , rotate:'140deg'}}/></div>
            </div>
            <div className='NewServices-card'>
              <div className='NewServices-frame'>
                <div className='NewService-frame-text'><span>Web Designing</span></div>
                <div className='NewService-frame-image'><img src={frame1}></img></div>
              </div>
              <div className='NewServices-circle'><IoArrowBack style={{width:'auto' , height:'80px' , rotate:'140deg'}}/></div>
            </div>
            <div className='NewServices-card'>
              <div className='NewServices-frame'>
                <div className='NewService-frame-text'><span>Graphic Designing</span></div>
                <div className='NewService-frame-image'><img src={frame1}></img></div>
              </div>
              <div className='NewServices-circle'><IoArrowBack style={{width:'auto' , height:'80px' , rotate:'140deg'}}/></div>
            </div>
          </div>
          <div className='NewServices-Dots'></div>
        </div>
    </div>
  )
}

export default NewComponent