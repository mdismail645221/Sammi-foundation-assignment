import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import '../Slider/Slider.css'

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

const Slider = () => {
   
    return (

        <div>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img
                        className="object-fill w-full h-96"
                        src="https://i.ibb.co/85WY3PG/slider2.jpg"
                        alt="image slide 1"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        className="object-fill w-full h-96"
                        src="https://i.ibb.co/s2qmV8C/slider3.jpg"
                        alt="image slide 2"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        className="object-fill w-full h-96"
                        src="https://i.ibb.co/5T43QC1/slider1.jpg"
                        alt="image slide 3"
                    />
                </SwiperSlide>
            </Swiper>
        </div>

    );
};

export default Slider;