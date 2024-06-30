import Slider from 'react-slick';
import { Image } from 'antd'
import React from "react"
import './slider.css';


const SliderComponent = ({ arrImages }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000
    };
    return (
        <Slider {...settings}>
            {arrImages.map((item) => {
                return (
                    <Image src={item} alt='slider' preview={false} width="100%" height="300x" />
                )
            })}
        </Slider>
    )
}

export default SliderComponent