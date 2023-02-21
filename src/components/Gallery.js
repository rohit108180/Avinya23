import React  from "react";
// Import Swiper React components
import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import  { Autoplay, Navigation } from 'swiper';
import img1 from './assets/images/img1.jpg';
import img2 from './assets/images/img2.jpg';
import img4 from './assets/images/img4.jpg';
import img3 from './assets/images/img3.jpg';
import img5 from './assets/images/img5.jpg';
import img6 from './assets/images/img6.jpg';
import img7 from './assets/images/img7.jpg';
import img8 from './assets/images/img8.jpg';
import img9 from './assets/images/img9.jpg';
import img10 from './assets/images/img10.jpg';
import img11 from './assets/images/img11.jpg';
import img12 from './assets/images/img12.jpg';

// Import Swiper styles

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/navigation";

import "..//styles.css";
import AOS from 'aos'
import 'aos/dist/aos.css'

// import required modules
import { EffectCoverflow} from "swiper";
import Heading from "./Heading/Heading";

export default function App() {
  useEffect(()=>{
    AOS.init({duration:1000});
},[]);

  return (
    <main className="gallery-section" data-aos="fade-left">
    <div className="gallery-header">
      <Heading name = "GALLERY"/>
    </div>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 105,
          modifier: 1,
          slideShadows: true,
        

        
        }}
      //   autoplay={{
      //     delay: 1800,
      //     disableOnInteraction: false,
      //  }}
       
        // pagination={true}
        navigation={true}
        modules={[EffectCoverflow,Autoplay,Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={img1} alt="img-1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2} alt="img-2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img4} alt="img-3" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3} alt="img-4" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img5} alt="img-5" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img6}  alt="img-6"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img7}alt="img-7" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img8}alt="img-8"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img9} alt="img-9"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img1} alt="img-10" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2} alt="img-11" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img4} alt="img-12" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3} alt="img-1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img5} alt="img-2" />
        </SwiperSlide>
      </Swiper>
    </main>
  );
}
