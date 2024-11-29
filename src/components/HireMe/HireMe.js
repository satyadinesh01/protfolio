import React from 'react'
import '../HireMe/HireMe.css'
import luffy3 from '../../assets/luffy3.png'
import CV from '../../assets/CV.pdf';

function HireMe() {
  return (
    <div id='hireMe' className='HireMe'>
        <div className='HireMe-container'>
            <div className='HireMe-image'> <img src={luffy3}></img> </div>
            <div className='HireMe-content'>
                <div className='HireMe-Heading'>Why <span style={{color:'rgb(133, 58, 252)'}}>Hire me</span>?</div>
                <div className='hireMe-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus nunc, posuere in justo vulputate, bibendum sodales </div>
                <div className='HireMe-Project'>
                    <div className='HireMe-Projects'>100+</div>
                    <div className='HireMe-ProCompleted'>Projects Completed</div>
                </div>
                <div className='HireMe-button'><button className='HimeMe-btn'>Hire Me</button> <button className='HireMe-resume'><a href={CV} download style={{color:'white'}} >Resume</a></button></div>
            </div>
        </div>
    </div>
  )
}

export default HireMe