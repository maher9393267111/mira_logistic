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
const Testimonial1 = () => {
    return (
        <>
        <section className="testimonial-section bg-light">
          <div className="dotted-map"></div>
          <div className="auto-container">
            <div className="sec-title text-center">
              <span className="sub-title">Client’s Testimonials</span>
              <h2>Here are some clients <br />feedbacks</h2>
            </div>
            <div className="outer-box">
              <Swiper {...swiperOptions} className="testimonial-carousel owl-carousel owl-theme">
                  {/* testimonial Block */}
                  <SwiperSlide>
                <div className="testimonial-block">
                  <div className="inner-box">
                    <div className="content-box">
                      <div className="rating"><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star-half-alt"></i></div>
                      <div className="text">“All of our lorries are fitted with Satellite Tracking high value and temperature sensitive loads can be monitored at all times.</div>
                    </div>
                    <div className="thumb"><img src="/images/resource/testi-thumb-1.jpg" alt="" /></div>
                    <span className="designation">Co Founder</span>
                    <h4 className="name">Jhon D. William</h4>
                  </div>
                </div>
                  </SwiperSlide>
                  {/* testimonial Block */}
                  <SwiperSlide>
                <div className="testimonial-block">
                  <div className="inner-box">
                    <div className="content-box">
                      <div className="rating"><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star-half-alt"></i></div>
                      <div className="text">“All of our lorries are fitted with Satellite Tracking high value and temperature sensitive loads can be monitored at all times.</div>
                    </div>
                    <div className="thumb"><img src="/images/resource/testi-thumb-2.jpg" alt="" /></div>
                    <span className="designation">Co Founder</span>
                    <h4 className="name">Aleesha Brown</h4>
                  </div>
                </div>
                  </SwiperSlide>
                  {/* testimonial Block */}
                  <SwiperSlide>
                <div className="testimonial-block">
                  <div className="inner-box">
                    <div className="content-box">
                      <div className="rating"><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star-half-alt"></i></div>
                      <div className="text">“All of our lorries are fitted with Satellite Tracking high value and temperature sensitive loads can be monitored at all times.</div>
                    </div>
                    <div className="thumb"><img src="images/resource/testi-thumb-3.jpg" alt="" /></div>
                    <span className="designation">Co Founder</span>
                    <h4 className="name">Mike Hardon</h4>
                  </div>
                </div>
                  </SwiperSlide>
                  {/* testimonial Block */}
                  <SwiperSlide>
                <div className="testimonial-block">
                  <div className="inner-box">
                    <div className="content-box">
                      <div className="rating"><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star-half-alt"></i></div>
                      <div className="text">“All of our lorries are fitted with Satellite Tracking high value and temperature sensitive loads can be monitored at all times.</div>
                    </div>
                    <div className="thumb"><img src="/images/resource/testi-thumb-1.jpg" alt="" /></div>
                    <span className="designation">Co Founder</span>
                    <h4 className="name">Jhon D. William</h4>
                  </div>
                </div>
                  </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </section>
        </>
    );
};
export default Testimonial1
