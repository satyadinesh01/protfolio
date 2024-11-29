import React from 'react'
import '../Experience/Experience.css'
import dotDesign from '../../assets/dot-design.png'  

function Experience() {
  return (
    <div id='experiences' className='experienceThree'>
        <div className='heading-exp'>My <span style={{color:'rgb(133, 58, 252)'}} >Work Experience</span></div>
        <div className='container'>
            <div className='side-text-exp' style={{gap:'110px'}}>
                <div className='text-exp'>
                    <div className='upper'>Cognizant, Mumbai</div>
                    <div className='lower'>Sep 2016- July 2020</div>
                </div>
                <div className='text-exp'>
                    <div className='upper'>Sugee Pvt limited, Mumbai</div>
                    <div className='lower'>Sep 2020- July 2023</div>
                </div>
                <div className='text-exp'>
                    <div className='upper'>Cinetstox, Mumbai</div>
                    <div className='lower'>Sep 2023</div>
                </div>
            </div>
            <div className='dotDesign'><img src={dotDesign}></img></div>
            <div className='side-text-exp'>
                <div className='text-exp'>
                    <div className='upper'>Experince Designer</div>
                    <div className='lower'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus nunc, posuere in justo vulputate, bibendum sodales</div>
                </div>
                <div className='text-exp'>
                    <div className='upper'>UI/UX Designer</div>
                    <div className='lower'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus nunc, posuere in justo vulputate, bibendum sodales</div>
                </div>
                <div className='text-exp'>
                    <div className='upper'>Lead UX Designer</div>
                    <div className='lower'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus nunc, posuere in justo vulputate, bibendum sodales</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Experience