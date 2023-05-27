import React from 'react'
import './Hero6.css'
import sec6img from '../../assets/sec6.jpg'

const Hero6 = () => {
    return (

        <div className='sec6'>
            <div className='sec5_gap'>
                <div className='sec4_part2'>
                    <div className='sec4_part21'>
                        <span className='haldiline'></span>
                        <span >HI VISION HEIGHTS</span>
                    </div>
                    <div className='sec4_part22'>
                        <span className='haldiline1'></span>
                        <span > CLUB HOUSE</span>
                    </div>
                </div>
                <div className='sec5_img'>
                    <img src={sec6img} alt='' />
                </div>
            </div>
            <div className='sec5_part1'>
                <span className='haldiline'></span>
                <div className='sec5_text'> HIVISION HEIGHTS
                <span className='bold'>  
                    RESIDENTIAL APARTMENTS</span></div>
                <span className='sec4_button'>View Project</span>
            </div>
             


        </div>
    )
}

export default Hero6