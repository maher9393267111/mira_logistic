import Link from "next/link"
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const swiperOptions = {
        modules: [Autoplay, Pagination, Navigation],
        slidesPerView: 3,
        spaceBetween: 30,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        loop: true,

				breakpoints:{
            320: {
                slidesPerView: 1,
                // spaceBetween: 30,
            },
            575: {
                slidesPerView: 1,
                // spaceBetween: 30,
            },
            767: {
                slidesPerView: 2,
                // spaceBetween: 30,
            },
            991: {
                slidesPerView: 2,
                // spaceBetween: 30,
            },
            1199: {
                slidesPerView: 3,
                // spaceBetween: 30,
            },
            1350: {
                slidesPerView: 3,
                // spaceBetween: 30,
            },
        }

        
    };
const Testimonial2 = () => {
    return (
        <>
        <section className="testimonial-section-two">
          <div className="auto-container">
            <div className="row">

              <div className="title-column col-xl-3">
                <div className="sec-title">
                  <span className="sub-title">Our feedbacks</span>
                  <h3>What They’re Talking About Company</h3>
                  <div className="text">Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean solldin, lorem is simply free text quis bibendum.</div>
                </div>
              </div>
      
              <div className="testimonial-column col-xl-9">
                <div className="inner-column">

                <Swiper {...swiperOptions} className="testimonial-carousel owl-carousel owl-theme">
                  {/* testimonial Block */}
                  <SwiperSlide>
                    <div className="testimonial-block-two">
                      <div className="inner-box">
                        <div className="content-box">
                          <div className="rating"><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i></div>
                          <div className="text">Lorem ipsum is simply free text dolor not sit amet, notted adipisicing elit sed do eiusmod incididunt labore et dolore text.</div>
                        </div>
                        <div className="info-box">
                          <div className="thumb"><img src="/images/resource/testi-thumb-1.jpg" alt=""/></div>
                          <h6 className="name">Sarah Albert</h6>
                          <span className="designation">Designer</span>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  {/* testimonial Block */}
                  <SwiperSlide>
                    <div className="testimonial-block-two">
                      <div className="inner-box">
                        <div className="content-box">
                          <div className="rating"><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i></div>
                          <div className="text">Lorem ipsum is simply free text dolor not sit amet, notted adipisicing elit sed do eiusmod incididunt labore et dolore text.</div>
                        </div>
                        <div className="info-box">
                          <div className="thumb"><img src="/images/resource/testi-thumb-2.jpg" alt=""/></div>
                          <h6 className="name">Mike Hardson</h6>
                          <span className="designation">Designer</span>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  {/* testimonial Block */}
                  <SwiperSlide>
                    <div className="testimonial-block-two">
                      <div className="inner-box">
                        <div className="content-box">
                          <div className="rating"><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i></div>
                          <div className="text">Lorem ipsum is simply free text dolor not sit amet, notted adipisicing elit sed do eiusmod incididunt labore et dolore text.</div>
                        </div>
                        <div className="info-box">
                          <div className="thumb"><img src="/images/resource/testi-thumb-3.jpg" alt=""/></div>
                          <h6 className="name">Jessica Brown</h6>
                          <span className="designation">Designer</span>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  {/* testimonial Block */}
                  <SwiperSlide>
                    <div className="testimonial-block-two">
                      <div className="inner-box">
                        <div className="content-box">
                          <div className="rating"><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i></div>
                          <div className="text">Lorem ipsum is simply free text dolor not sit amet, notted adipisicing elit sed do eiusmod incididunt labore et dolore text.</div>
                        </div>
                        <div className="info-box">
                          <div className="thumb"><img src="/images/resource/testi-thumb-1.jpg" alt=""/></div>
                          <h6 className="name">Sarah Albert</h6>
                          <span className="designation">Designer</span>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
                </div>
              </div>
            </div>
          </div>
        </section>
        </>
    );
};
export default Testimonial2
