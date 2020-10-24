import React from 'react'
import './Works.css'
import Slider1 from '../../Resources/images/carousel-1.png'
import Slider2 from '../../Resources/images/carousel-2.png'
import Slider3 from '../../Resources/images/carousel-3.png'
import Slider4 from '../../Resources/images/carousel-4.png'
import Slider5 from '../../Resources/images/carousel-5.png'
import SwiperCore, { Navigation, Pagination, Mousewheel, HashNavigation, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';

SwiperCore.use([Navigation, Pagination, Mousewheel, HashNavigation, Autoplay]);
const Works = () => {
    return (
        <section className="works">
            <h2 className="mb-5 text-center" style={{ color: 'white' }}>Here are some of <span className="span-color">our works</span></h2>
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <Swiper
                    spaceBetween={20}
                    slidesPerView={3.3}
                    pagination={{ clickable: true }}
                    loop={true}
                    autoplay={{ delay: 800 }}
                    mousewheel={true}
                    hashNavigation={true}
                >
                    <SwiperSlide> <img src={Slider1} className="w-100 slide-image" alt="Slider Img" /> </SwiperSlide>
                    <SwiperSlide> <img src={Slider2} className="w-100 slide-image" alt="Slider Img" /> </SwiperSlide>
                    <SwiperSlide> <img src={Slider3} className="w-100 slide-image" alt="Slider Img" /> </SwiperSlide>
                    <SwiperSlide> <img src={Slider4} className="w-100 slide-image" alt="Slider Img" /> </SwiperSlide>
                    <SwiperSlide> <img src={Slider5} className="w-100 slide-image" alt="Slider Img" /> </SwiperSlide>
                </Swiper>
            </div>
        </section>
    );
};

export default Works;