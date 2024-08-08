import React from 'react'
import "./Hero.css"
import Profile_img from '../../assets/cropped_image.png'

const Hero = () => {
  return (
    <div className='hero'>
        <img src = {Profile_img} alt="" />
        <h1><span>Iam Shubham Gore,</span> frontend developer based in INDIA</h1>
        <p>iam frontend developer from Pune Maharastra, with 2 year of experiance in Pathology Technology as a frontend developer </p>
        <div className='Hero-action'>
            <div className='Hero-connect'>Connect With me</div>
            <div className='Hero-resume'>My resume</div>
        </div>
    </div>
  )
}

export default Hero