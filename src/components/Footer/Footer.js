import React from 'react'
import logo from '../../assets/Logow.png'
import './Footer.css'


const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer_part1'>
                <img src={logo} alt=''/>
                <p>
                Our team takes over everything, from an idea and concept development to realization. We believe in traditions and incorporate them within our innovations.
                </p>
            </div>
            <div className='footer_part2'>
                <div className='footer_part21'>
                    <div className='sec4_part21'>
                        <span className='haldiline1'></span>
                        <span className='bold'>CALL US</span>
                    </div>
                    
                    <div className='sec4_part21'>
                        <span className='haldiline1'></span>
                        <span className='bold'>MAIL US</span>
                    </div>

                    <div className='sec4_part21'>
                        <span className='haldiline1'></span>
                        <span className='bold'>VISIT US</span>
                    </div>
                </div>

                <div className='footer_part21'>
                    <div>
                        <span>+91 9849627328</span>
                    </div>
                    <div>
                        <span>ganesh@makshaarchitects.com</span>
                    </div>
                    <div>
                        <span>PLOT NO: 67, SRINIVASA SQUARE 1ST FLOOR, GAFFOOR NAGAR, MADHAPUR, HYDERABAD, TELANGANA 500081.VIEW ON MAP</span>
                    </div>
                </div>

                <div>
                    <hr></hr><br/>
                    <div className='footerend'>
                        <p>© MOKSHA ARCHITECT 2022. ALL RIGHTS RESERVED.</p>
                        <p>To top</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer