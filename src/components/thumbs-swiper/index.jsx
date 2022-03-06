import React, {useState} from 'react';
import {Swiper, SwiperSlide} from "swiper/react/swiper-react";
import {Controller, FreeMode, Navigation, Thumbs} from "swiper";
//scss
import './thumbs-swiper.scss'
import 'swiper/swiper.scss'
import 'swiper/modules/navigation/navigation.scss'
//img
import sliderPrev from "../slider/img/previous.svg";
import sliderNext from "../slider/img/next.svg";



const ThumbsSwiper = (props) => {

    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return (
            <div className='thumbs-swiper__slider-wrap' data-test-id='product-slider'>
                <div className='thumbs-swiper__ribbon'>
                    <div className='thumbs-swiper__ribbon-arrow'>
                        <span className='thumbs-swiper__slider-prev'><img className='thumbs-swiper__rotate' src={sliderPrev} alt=""/></span>
                        <span className='thumbs-swiper__slider-next'><img className='thumbs-swiper__rotate' src={sliderNext} alt=""/></span>
                    </div>

                    <Swiper direction='vertical' slidesPerView={4}  spaceBetween={16} onSwiper={setThumbsSwiper} modules={[FreeMode, Navigation, Controller, Thumbs]} className="mySwiper">
                        {props.product.images.map((item) => {
                           return <SwiperSlide key={item.id}><img src={`https://training.cleverland.by/shop${item.url}`} alt=''/></SwiperSlide>
                        })}
                    </Swiper>

                </div>
                <div className='thumbs-swiper__slider'>
                    <span className='thumbs-swiper__prev'><img className='thumbs-swiper__slider-prev' src={sliderPrev} alt=""/></span>
                    <span className='thumbs-swiper__next'><img className='thumbs-swiper__slider-next' src={sliderNext} alt=""/></span>
                    <Swiper thumbs={{swiper: thumbsSwiper}} navigation={{nextEl: '.thumbs-swiper__slider-next', prevEl: '.thumbs-swiper__slider-prev'}} modules={[FreeMode, Navigation, Controller, Thumbs]} className="mySwiper2">
                        {props.product.images.map((item) => {
                            return <SwiperSlide key={item.id}><img src={`https://training.cleverland.by/shop${item.url}`} alt=''/></SwiperSlide>
                        })}
                    </Swiper>
                </div>
            </div>
    );
};

export default ThumbsSwiper;