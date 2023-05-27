import React from 'react'
import './Hero5.css'
import sec5img from '../../assets/sec5.jpg'

const Hero5 = () => {
    return (
        <div className='sec5'>
            <div className='sec5_part1'>
            <span className='haldiline'></span>
                <div className='sec5_text'>HAPPINESS HUB
                <span className='bold'>
                (RESIDENTIAL APARTMENTS)</span></div>               
                <span className='sec4_button'>View Project</span>
            </div>
            <div className='sec5_gap'>
                <div className='sec4_part2'>
                    <div className='sec4_part21'>
                        <span className='haldiline'></span>
                        <span >HAPPINESS HUB</span>
                    </div>
                    <div className='sec4_part22'>
                        <span className='haldiline1'></span>
                        <span >HAPPINESS CLUB HOUSE</span>
                    </div>
                </div>
                <div className='sec5_img'>
                    <img src={sec5img} alt='' />
                </div>
            </div>

        </div>
    )
}

export default Hero5