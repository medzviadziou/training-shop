import React from 'react';
import { Swiper, SwiperSlide} from "swiper/react/swiper-react";
import { Navigation} from "swiper";

import 'swiper/swiper.scss'
import 'swiper/modules/navigation/navigation.scss'

const Slider = (props) => {
    return (
        <>
            <Swiper className='mySwiper' navigation={true} modules={[Navigation]}>
                <SwiperSlide><img src={props.slider} alt="slider"/></SwiperSlide>
                <SwiperSlide><img src={props.slider} alt="slider"/></SwiperSlide>
                <SwiperSlide><img src={props.slider} alt="slider"/></SwiperSlide>
                <SwiperSlide><img src={props.slider} alt="slider"/></SwiperSlide>
            </Swiper>
        </>

    );
};

export default Slider;