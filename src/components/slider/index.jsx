import React from 'react';
import {Swiper, SwiperSlide} from "swiper/react/swiper-react";
import {A11y, Navigation, Pagination, Scrollbar} from "swiper";

import 'swiper/swiper.scss'
import 'swiper/modules/navigation/navigation.scss'
import './slider.scss'

const Slider = (props) => {
    return (
        <>
            <Swiper className='mySwiper'
                    navigation={true}
                    modules={[Navigation, Pagination, Scrollbar, A11y]}>
                <SwiperSlide><img src={props.slider} alt="slider"/></SwiperSlide>
                <SwiperSlide><img src={props.slider} alt="slider"/></SwiperSlide>
                <SwiperSlide><img src={props.slider} alt="slider"/></SwiperSlide>
                <SwiperSlide><img src={props.slider} alt="slider"/></SwiperSlide>
            </Swiper>
        </>

    );
};

export default Slider;