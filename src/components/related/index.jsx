import React from 'react';
import arrowLeft from "../../pages/product-page/img/ico/-arrow.svg";
import arrowRight from "../../pages/product-page/img/ico/arrow-.svg";
import PRODUCTS from "../../data/products";
import Cards from "../cards";
import './related.scss'

import {Navigation} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react/swiper-react";
import 'swiper/swiper.scss'
import 'swiper/modules/navigation/navigation.scss'

const Related = ({productType}) => {


    return (
        <>
            <div className='related__name'>
                <span className='related__h2'>RELATED PRODUCTS</span>
                <div>
                    <img className='related__arrowLeft' src={arrowLeft} alt=""/>
                    <img className='related__arrowRight' src={arrowRight} alt=""/>
                </div>
            </div>
            <div className='related__slider'>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={15}
                    breakpoints={{
                        // when window width is >= 320px
                        320: {
                            slidesPerView: 1,
                            spaceBetween: 15,
                        },
                        // when window width is >= 480px
                        480: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        // when window width is >= 576px
                        576: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        // when window width is >= 992px
                        992: {
                            slidesPerView: 4,
                            spaceBetween: 30,
                        }
                    }}
                    navigation={{nextEl: '.related__arrowLeft', prevEl: '.related__arrowRight'}}
                    modules={[Navigation]}
                    className="mySwiper3">
                    {PRODUCTS[productType].map((card) => {
                        return <SwiperSlide key={card.id}><Cards card={card} productType={productType}/></SwiperSlide>
                    })}
                </Swiper>

            </div>
        </>
    );
};

export default Related;