import React from 'react'
import Footer from '../../components/Footer/Footer'
import Logobar from '../../components/Logo.js/Logobar'
import Hero from '../Hero/Hero'
import Hero10 from '../Hero10/Hero10'
import Hero2 from '../Hero2/Hero2'
import Hero3 from '../Hero3/Hero3'
import Hero4 from '../Hero4/Hero4'
import Hero5 from '../Hero5/Hero5'
import Hero6 from '../Hero6/Hero6'
import Hero7 from '../Hero7/Hero7'
import Hero8 from '../Hero8/Hero8'
import Hero9 from '../Hero9/Hero9'

const Home = () => {
  return (
    <div>
        <Logobar/>
        <Hero/>
        <Hero2/>
        <Hero3/>
        <Hero4/>
        <Hero5/>
        <Hero6/>
        <Hero7/>
        <Hero8/>
        <Hero9/>
        <Hero10/>
        <Footer/>
    </div>
  )
}

export default Home