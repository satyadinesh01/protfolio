import React from 'react'
import '../Testimonials/Testimonials.css'
import TestimonialsImage from '../../assets/testimonials.png'

function Testimonials() {
  return (
    <div id='testimonials' className='testimonials'>
        <img src={TestimonialsImage}></img>
    </div>
  )
}

export default Testimonials