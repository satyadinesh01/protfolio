import React from 'react'
import '../services/Services.css'
import frame1 from '../../assets/Rectangle.png'
import { IoArrowBack } from "react-icons/io5";

function Services() {
return (
    <>
    <section id="services">
    <div className='services'>
        <div className='text'>
            <div className='harsha'>harsha</div>
            <div className='first'  style={{color:'white'}}><span>My <span style={{color:'rgb(133, 58, 252)'}}>Services</span></span></div>
            <div className='second' style={{color:'white' }}>I specialize in web development, graphic design, and UI/UX design, <br></br> crafting beautiful and functional digital solutions.</div>
        </div>
        <div className='content'>
            <div className='box'>
                <div className='card'>
                    <div className='text' style={{paddingLeft:'70px'}}>Web Development</div>
                    <div className='image'>
                        <div className='back1'></div>
                        <img src={frame1}></img>
                    </div>
                </div>
                <div className='circle'><span className='icon'><IoArrowBack style={{width:'auto' , height:'80px' , rotate:'140deg'}}/></span></div>
            </div>
            <div className='box'>
                <div className='card'>
                    <div className='text' style={{paddingLeft:'110px'}}>UI/UX Design</div>
                    <div className='image'>
                        <div className='back1'></div>
                        <img src={frame1}></img>
                    </div>
                </div>
                <div className='circle'><span className='icon'><IoArrowBack style={{width:'auto' , height:'80px' , rotate:'140deg'}}/></span></div>
            </div>
            <div className='box'>
                <div className='card'>
                    <div className='text' style={{paddingLeft:'70px'}}>Graphic Designing</div>
                    <div className='image'>
                        <div className='back1'></div>
                        <img src={frame1}></img>
                    </div>
                </div>
                <div className='circle'><span className='icon'><IoArrowBack style={{width:'auto' , height:'80px' , rotate:'140deg'}}/></span></div>
            </div>
        </div>
    </div>
    </section>
    </>
)
}

export default Services