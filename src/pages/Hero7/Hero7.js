import React from 'react'
import sec7img from '../../assets/sce7.jpg'


const Hero7 = () => {
  return (
    <div className='sec5'>
    <div className='sec5_part1'>
    <span className='haldiline'></span>
        <div className='sec5_text'> PROSPERA COUNTY
        
        <span className='bold'>
        (GATED COMMUNITY VILLAS)</span></div>               
        <span className='sec4_button'>View Project</span>
    </div>
    <div className='sec5_gap'>
        <div className='sec4_part2'>
            <div className='sec4_part21'>
                <span className='haldiline'></span>
                <span >PROSPERA VILLAS</span>
            </div>
            
            <div className='sec4_part22'>
                <span className='haldiline1'></span>
                <span >CLUB HOUSE</span>
            </div>
        </div>
        <div className='sec5_img'>
            <img src={sec7img} alt='' />
        </div>
    </div>

</div>
  )
}

export default Hero7