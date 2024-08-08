import React from 'react'
import'./About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profille_img from '../../assets/Shubh.png'


const About = () => {
  return (
    <div className='About'>
        <div className='about-title'>
        <h1> About me </h1>
        <img src={theme_pattern} alt="" />
        </div>
        <div className='about-section'>
            <div className='about-left'>
                <img className='about-left-img' src={profille_img} alt="" />
            </div>
            <div className='about-right'>
                <div className="about-para">
                    <p> I am a software developer with a passion for creating innovative and user-friendly applications.</p>
                       <p> I have a strong background in computer science and a keen eye for detail, which enables me to
                        deliver high-quality solutions that meet the needs of my clients. </p>
                </div>
                <div className="about-skill">
                    <div className="about-skills"><p>HTML & CSS</p><hr style={{width:"50%"}}/></div>
                    <div className="about-skills"><p>React Js</p><hr style={{width:"75%"}}/></div>
                    <div className="about-skills"><p>JavaScript</p><hr style={{width:"60%"}}/></div>
                    <div className="about-skills"><p>Next Js</p><hr style={{width:"50%"}}/></div>
                </div>
            </div>
        </div>
        <div className="about-achievement">
            <div className="achievement-title">
                <h1> 10+</h1>
                <p>YEARS OF EXPERIANCE</p>
            </div>
            <hr />
            <div className="achievement-title">
                <h1> 90+</h1>
                <p>PROJECT COMPLETED</p>
            </div>
            <hr />
            <div className="achievement-title">
                <h1> 15+</h1>
                <p>HAPPY CLIENT</p>
            </div>
        </div>
    </div>
  )
}

export default About
