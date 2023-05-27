import React from 'react'
import sec4img from '../../assets/sec4.jpg'
import './Hero4.css'

const Hero4 = () => {
    return (
        <div className='sec4'>
            <div className='sec4_part1'>
                <div className='feature'>OUR FEATURED <span className='bold'>WORKS</span></div>
                <span className='boldline'></span>
            </div>
            <div className='sec4_part2'>
                <div className='sec4_part21'>
                    <span className='haldiline'></span>
                    <span >HALDI GOLF</span>
                </div>
                <div className='sec4_part22'>
                    <span className='haldiline1'></span>
                    <span  >CLUB HOUSE</span>
                </div>
            </div>
            <div className='sec4_part3'>
                <div className='sec4_part31'>
                    <img src={sec4img} alt='' />
                </div>
                <div className='sec4_part32'>
                    <span className='haldiline'></span>
                    <span className='shadowtitle'>HALDI GOLF <span className='bold'>400 EAST & 400 WEST FACED VILLAS</span></span>
                    <span className='sec4_button'>VIEW PROJECT</span>
                </div>
            </div>
        </div>
    )
}

export default Hero4