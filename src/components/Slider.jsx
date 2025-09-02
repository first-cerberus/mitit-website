import React from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import './Slider.css'



export default function Slider(){

    return (
        <Swiper slidesPerView={1} loop={true} modules={[Autoplay]} dir="rtl" autoplay={{delay: 7000, reverseDirection: true, disableOnInteraction: false}}>
            <SwiperSlide><img src="/img/chief.jfif"/></SwiperSlide>
            <SwiperSlide><img src="/img/komandir.jfif"/></SwiperSlide>
            <SwiperSlide><img src="/img/programist.jfif"/></SwiperSlide>
        </Swiper>
    );
}