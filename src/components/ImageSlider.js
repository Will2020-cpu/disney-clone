import React, { Fragment } from 'react'
import Slider from 'react-slick'
import styled from 'styled-components'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const ImageSlider = () => {
    let settings = {
        arrows:false,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        pauseOnHover: true
    }
    return (
        <Fragment>
            <Carousel {...settings}>
                <Wrap>
                    <img src="/images/slider-badging.jpg" alt="slider1"/>
                </Wrap>
                <Wrap>
                    <img src="/images/slider-badag.jpg" alt="slider2"/>
                </Wrap>
                <Wrap>
                    <img src="/images/slider-scale.jpg" alt="slider3"/>
                </Wrap>
                <Wrap>
                    <img src="/images/slider-scales.jpg" alt="slider4"/>
                </Wrap>
            </Carousel>
        </Fragment>
    )
}

export default ImageSlider


//Componentes
const Carousel = styled(Slider)`
    margin-top:60px;
    
    ul li button {
        &:before{
            font-size:10px;
            color:rgb(150,158, 171);
        }
    }

    li.slick-active button::before{
        color:white;
    }

    .slick-list{
        overflow:visible;
    }
    

    button {
        z-index:1;
    }
`

const Wrap = styled.div`
    cursor:pointer;
    img{
        border:4px solid transparent;
        border-radius:4px;
        width:100%;
        height:100%;
        box-shadow:rgb(0 0 0 / 69%) 0px  26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;
        transition-duration: 300ms;

        &:hover{
            border : 4px solid rgba(249,249,249,0.8);
        }
    }
`