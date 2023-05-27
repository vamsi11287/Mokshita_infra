import React from 'react'
import sec9img from '../../assets/sec9.jpg'


const Hero9 = () => {
    return (

        <div className='sec5'>
        
        <div className='sec5_part1'>
                <span className='haldiline'></span>
                
                <div className='sec5_text'> PROSPERA COUNTY
                ACE

                    <span className='bold'> APURVA VILLAS
                        </span></div>
                <span className='sec4_button'>View Project</span>
               
            </div>
            <div className='sec5_gap'>
                <div className='sec4_part2'>
                    <div className='sec4_part21'>
                        <span className='haldiline'></span>
                        <span>ACE</span>
                    </div>
                   
                    <div className='sec4_part22'>
                        <span className='haldiline1'></span>
                        <span> APURVA VILLAS</span>
                    </div>
                </div>
                <div className='sec5_img'>
                    <img src={sec9img} alt='' />
                </div>
            </div>

        </div>
    )
}

export default Hero9