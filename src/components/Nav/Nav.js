import React from 'react'
import './Nav.css'
import { FaFacebookF, FaHome, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa'


const Nav = () => {
    return (
        <div className='nav'>
            <div>
                <h3>
                    H<br />O<br />M<br />E<br />
                </h3>
            </div>
            <div className='lines'></div>

            

            <div >
                <FaHome className='home' />
            </div>
            <div className='lines'></div>

            

            <div className='social'>
                <FaFacebookF style={{ color: 'white', height: "20px", width: "20px" }} />
                <FaTwitter style={{ color: 'white', height: "20px", width: "20px" }} />
                <FaInstagram style={{ color: 'white', height: "20px", width: "20px" }} />
                <FaLinkedinIn style={{ color: 'white', height: "20px", width: "20px" }} />
            </div>
        </div>
    )
}

export default Nav