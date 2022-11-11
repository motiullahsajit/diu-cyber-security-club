import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./Slider.css";

function SliderComponent() {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear"
      };

  return (
    <div style={{display: 'flex', justifyContent: 'center'}}>
        <div className='image_container'>
        <Slider {...settings}>
        <img alt='cybercon' src='https://leetcon.org/wp-content/uploads/2018/09/logo-ash1-1.png'/>
        <img alt='cybercon' src='https://leetcon.org/wp-content/uploads/2018/09/logo-ash5-1.png'/>
        <img alt='cybercon' src='https://leetcon.org/wp-content/uploads/2018/09/logo-ash2-1.png'/>
        <img alt='cybercon' src='https://leetcon.org/wp-content/uploads/2018/09/logo-ash4-1.png'/>
        <img alt='cybercon' src='https://leetcon.org/wp-content/uploads/2018/09/logo-ash2-1.png'/>
        <img alt='cybercon' src='https://leetcon.org/wp-content/uploads/2018/09/logo-ash6-1.png'/>
        </Slider>
      </div>
    </div>
  )
}

export default SliderComponent;