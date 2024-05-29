import Link from "next/link"
import React, { useState } from 'react';
import ModalVideo from 'react-modal-video';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
const swiperOptions = {
        modules: [Autoplay, Pagination, Navigation],
        slidesPerView: 1,
        autoplay: {
            delay: 8500,
            disableOnInteraction: false,
        },
        loop: true
    };
const Banner = () => {
  const [isOpen, setOpen] = useState(false)
    return (
        <>
        <section className="banner-section-two">
          <Swiper {...swiperOptions} className="banner-slider">
            <SwiperSlide>
            <div className="banner-slide">
              <img src="/images/main-slider/2.jpg" alt=""/>
              <div className="outer-box">
                <div className="auto-container">
                  <div className="content-box">
                    <span className="sub-title" data-animation-in="fadeInLeft" data-delay-in="0.1">Solutions for your transport</span>
                    <h1 data-animation-in="fadeInLeft" data-delay-in="0.3">Logistics Solutaions for transport</h1>
                    <div className="btn-box">
                      <Link href="page-about" data-animation-in="fadeInUp" data-delay-in="0.5" className="theme-btn">Discover More</Link>
                      <div className="inner-box" data-animation-in="fadeInUp" data-delay-in="0.7">
                  <a onClick={() => setOpen(true)} className="play-now"><i className="icon fa fa-play" aria-hidden="true"></i><span className="ripple"></span></a>
                  <a onClick={() => setOpen(true)} className="play-now"><h6 className="title">Watch Video</h6></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </SwiperSlide>
      
      
            <SwiperSlide>
            <div className="banner-slide">
              <img src="/images/main-slider/1.jpg" alt=""/>
              <div className="outer-box">
                <div className="auto-container">
                  <div className="content-box">
                    <span className="sub-title" data-animation-in="fadeInLeft" data-delay-in="0.1">Solutions for your transport</span>
                    <h1 data-animation-in="fadeInLeft" data-delay-in="0.3">Reliable & Safe Transport Solution</h1>
                    <div className="btn-box">
                      <Link href="page-about" data-animation-in="fadeInUp" data-delay-in="0.5" className="theme-btn">Discover More</Link>
                      <div className="inner-box" data-animation-in="fadeInUp" data-delay-in="0.7">
                  <a onClick={() => setOpen(true)} className="play-now"><i className="icon fa fa-play" aria-hidden="true"></i><span className="ripple"></span></a>
                  <a onClick={() => setOpen(true)} className="play-now"><h6 className="title">Watch Video</h6></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </SwiperSlide>

            <SwiperSlide>
            <div className="banner-slide">
              <img src="/images/main-slider/2.jpg" alt=""/>
              <div className="outer-box">
                <div className="auto-container">
                  <div className="content-box">
                    <span className="sub-title" data-animation-in="fadeInLeft" data-delay-in="0.1">Solutions for your transport</span>
                    <h1 data-animation-in="fadeInLeft" data-delay-in="0.3">Solutions for Global Shipping</h1>
                    <div className="btn-box">
                      <Link href="page-about" data-animation-in="fadeInUp" data-delay-in="0.5" className="theme-btn">Discover More</Link>
                      <div className="inner-box" data-animation-in="fadeInUp" data-delay-in="0.7">
                        
                  <a onClick={() => setOpen(true)} className="play-now"><i className="icon fa fa-play" aria-hidden="true"></i><span className="ripple"></span></a>
                  <a onClick={() => setOpen(true)} className="play-now"><h6 className="title">Watch Video</h6></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </SwiperSlide>
          </Swiper>
        </section>
        <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="L61p2uyiMSo" onClose={() => setOpen(false)} />
        </>
    );
};
export default Banner
