import React from 'react'
import './Header.css';
import DesignOne from '../../assets/VectorOne.png'
import DesignTwo from '../../assets/VectorTwo.png'
import QuoteUp from '../../assets/quote-up.png'
import { FaStar } from "react-icons/fa";
import Ellipse from '../../assets/Ellipse.png'
import Luffy from '../../assets/luffy.png';
import { IoArrowBackOutline } from "react-icons/io5";

function Headers() {
  return (
    <div id='home' className='header'>
        <div className='main-Text'>
          <center>
            <button style={{color:'rgb(51, 51, 51)'}}>Hello!</button> <br></br>
            <img className='DesignOne' src={DesignOne}></img>
            <span>I’m <span className='highlight' >Satya Dinesh</span> <br></br> Front End Developer</span>
            <img className='DesignTwo' src={DesignTwo}></img>
          </center>
        </div>
        <div className='sub-text'>
          <div className='profile'>
              <img className='QuoteUp' src={QuoteUp}></img>
              <span>Satya’s Exceptional product design <br></br> ensure our website’s success. <br></br> Highly Recommended</span>
          </div>
          <div className='experience'>
              <div className='stars'>
                <FaStar style={{ color: 'rgb(133, 58, 252)', fontSize: '45px',padding:'3px' }} />
                <FaStar style={{ color: 'rgb(133, 58, 252)', fontSize: '45px',padding:'3px' }} />
                <FaStar style={{ color: 'rgb(133, 58, 252)', fontSize: '45px',padding:'3px' }} />
                <FaStar style={{ color: 'rgb(133, 58, 252)', fontSize: '45px',padding:'3px' }} />
                <FaStar style={{ color: 'rgb(133, 58, 252)', fontSize: '45px',padding:'3px' }} />
              </div>
              <div className='text'>
                <span className='years' > <b>2+ Years</b> </span> 
                <br></br> <span>Experience</span>
              </div>
          </div>
        </div>
        <div className='ellips'>
            <img className='ellips-png' src={Ellipse} ></img>
            <img className='luffy' src={Luffy} ></img>
            <div className='portfolio-header'>
              <h1>Portfolio <IoArrowBackOutline className='arrow-icon'/> </h1> <button>Hire me</button>
            </div>
        </div>
    </div>
  )
}

export default Headers