import React from 'react'
import './Hero2.css'
// import build from '../../assets/building.jpg'
import Carousel from '../../components/slider/Carousel'

const Hero2 = () => {
    return (
        <div className='sec2'>
            <div className='sec2_img'>
                <Carousel/>
            </div>
            <div className='sec2_content'>
                <div>
                    <span className='sec2_title'>
                        WELCOME WE ARE <span className='bold'>MOKSHA ARCHITECT</span>
                    </span>
                </div>
                <div>
                    <p className='sec2_p'>
                        Moksha Architects is a Hyderabad based establishment with more than 16 years of experience in providing the best and reliable services in the city. We provide custom and personalised services that fulfil your needs. Experience sustainable modern spaces that include but are not restricted to houses, offices, studios, education and healthcare. We are a team trusted by various members of the society in creating and recreating your personal and commercial environments without spending your own time and effort.
                    </p>
                </div>
                <div >
                    <p className='Boldline'></p>
                </div>
                <div>
                    <h2 className='process'>Our process</h2>
                </div>
                <div className='line_content'>
                    <div className='line_c'>
                        <p className='line'></p>
                        <h4>IDEA & START</h4>
                    </div>
                    <div className='line_c'>
                        <p className='line'></p>
                        <h4>DESIGN & CREATE</h4>
                    </div >
                    <div className='line_c'>
                        <p className='line'></p>
                        <h4>BUILD & FINISH</h4>

                    </div>
                </div>
                <div className='button'>
                    <h3 className='sec2_button'>View Our Portfolio </h3>
                    <span className='one0' transpa>01</span>
                </div>
               
            </div>
        </div>
    )
}

export default Hero2