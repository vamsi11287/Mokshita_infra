import React from 'react'
import './Hero10.css'
import sec10img from '../../assets/sec10.jpg'


const Hero10 = () => {
  return (
    <div className='sec10'>
        
        
        <img src={sec10img} alt=''/>
        <div className='overlay1'>
            <div className='sec10part1'>
            <h1>
                30+ PROJECTS
            </h1>
            <p className='bold'>50+ SERVICES FOR COMPANIES</p>
            <span className='sec4_button'>View Project</span>
            </div>
           
        </div>
        
    </div>
  )
}

export default Hero10