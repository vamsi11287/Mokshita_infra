import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import build from '../../assets/building.jpg'
import build2 from '../../assets/building3.jpg'
import build3 from '../../assets/building2.jpg'
import Slider from "react-slick";
import './Carousel.css'


const Carousel = () => {
    const settings = {
        dots: true,
        infinite: false,
        speed: 400,
        slidesToShow: 1,
        slidesToScroll: 1
      };
  return (
    <div className='Slider'>
    <Slider {...settings} >
        <div>
            <img src={build} alt='' />
        </div>
        <div>
            <img src={build2} alt='' />

        </div>
        <div>
            <img src={ build3} alt='' />

        </div>

    </Slider>
</div>
  )
}

export default Carousel