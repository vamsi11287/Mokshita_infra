import React from 'react'
import sec8img from '../../assets/sec8.jpg'

const Hero8 = () => {
  return (
    <div className='sec6'>
    <div className='sec5_gap'>
        <div className='sec4_part2'>
            <div className='sec4_part21'>
                <span className='haldiline'></span>
                <span >VUE (RESIDENTIAL APARTMENTS)</span>
            </div>
            
            <div className='sec4_part22'>
                <span className='haldiline1'></span>
                <span > CLUB HOUSE</span>
            </div>
        </div>
        <div className='sec5_img'>
            <img src={sec8img} alt='' />
        </div>
    </div>
    <div className='sec5_part1'>
        <span className='haldiline'></span>
        <div className='sec5_text'>  VUE
        
        <span className='bold'> RE 
        SIDENTIAL APARTMENTS</span></div>
        <span className='sec4_button'>View Project</span>
    </div>
     


</div>
  )
}

export default Hero8