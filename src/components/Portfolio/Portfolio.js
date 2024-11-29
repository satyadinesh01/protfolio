import React from 'react'
import '../Portfolio/Portfolio.css'
import FramePortfolio from '../../assets/Frame.png'
import { IoArrowBack } from "react-icons/io5";

function Portfolio() {
  return (
    <div id='portfolio' className='Portfolio'>
        <div className='Portfolio-head'>
            <h1 style={{color:'rgb(52, 64, 84)'}}>Lets have a look at <br></br>my  <span style={{color:'rgb(133, 58, 252)'}}>Portfolio</span> </h1>
            <button>see All</button>
        </div>
        <div className='Portfolio-body'>
        <div className='Portfolio-frame1'>
            <div className='Portfolio-frame1-box'>
              <div className='Portfolio-card'><img src={FramePortfolio} ></img> </div>
              <div className='Portfolio-card'><img src={FramePortfolio} ></img> </div>
            </div>
            <div className='Portfolio-frame1-dots'></div>
        </div>
        <div className='Portfolio-frame2'>
            <div className='Portfolio-skills'> <span>Loading Page</span></div>
            <div className='Portfolio-skills'> <span>Product Design</span></div>
            <div className='Portfolio-skills'> <span>Animation</span></div>
            <div className='Portfolio-skills'> <span>Glassmorphism</span></div>
            <div className='Portfolio-skills'> <span>cards</span></div>
        </div>
        <div className='Portfolio-frame3'>
          <div className='frame3-text1'>
            <div><span>Lirante - Food Dilvery Solution</span></div>
            <div className='Portfolio-link'><span className='icon-link'><IoArrowBack style={{width:'auto' , height:'50px' , rotate:'140deg' , color:'white'}}/></span></div>
          </div>
          <div className='frame3-text2'><span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis.</span></div>
        </div>
        </div>
    </div>
  )
}

export default Portfolio