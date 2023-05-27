import React from 'react'
import './Hero.css'
import herovideo from '../../assets/Moksha.mp4'
import compass from '../../assets/compass.png'

const Hero = () => {
  return (
    <div className='video'>
        <video src={herovideo} autoPlay muted loop></video>
        <img src={compass} alt='' className='compass'/>
    </div>
  )
}

export default Hero