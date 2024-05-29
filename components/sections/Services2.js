import Link from "next/link"
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const swiperOptions = {
        modules: [Autoplay, Pagination, Navigation],
        slidesPerView: 4,
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
                slidesPerView: 4,
                // spaceBetween: 30,
            },
        }

        
    };
const Services2 = () => {
    return (
        <>
        <section className="services-section-home2">
          <div className="auto-container">
            <div className="row">
              <div className="col-lg-6">
                <div className="sec-title">
                  <span className="sub-title">Specialise In The Transportation</span>
                  <h2>Offering Sustainable Logistics Services</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <div className="carousel-outer">
              <Swiper {...swiperOptions} className="home2-service-slider owl-carousel owl-theme">
                  <SwiperSlide>
                  <div className="service-block-home2 wow fadeInUp">
                    <figure className="image">
                      <Link href="page-service-details">
                        <img className="img-1" src="/images/resource/service-1.jpg" alt=""/>
                        <img className="img-2" src="/images/resource/service-1.jpg" alt=""/>
                      </Link>
                    </figure>
                    <div className="inner-box ">
                      <i className="icon flaticon-airplane-1"></i>
                      <h4 className="title mt-0"><Link href="page-service-details">Air freight</Link></h4>
                      <div className="text">Long established fact that a reader will be distracted content of a page when looking at its layout</div>
                      <Link href="page-service-details" className="read-more">Read More</Link>
                    </div>
                  </div>
                  </SwiperSlide>
                  <SwiperSlide>
                  <div className="service-block-home2 wow fadeInUp">
                    <figure className="image">
                      <Link href="page-service-details">
                        <img className="img-1" src="/images/resource/service-2.jpg" alt=""/>
                        <img className="img-2" src="/images/resource/service-2.jpg" alt=""/>
                      </Link>
                    </figure>
                    <div className="inner-box ">
                      <i className="icon flaticon-cargo-boat"></i>
                      <h4 className="title mt-0"><Link href="page-service-details">Sea freight</Link></h4>
                      <div className="text">Long established fact that a reader will be distracted content of a page when looking at its layout</div>
                      <Link href="page-service-details" className="read-more">Read More</Link>
                    </div>
                  </div>
                  </SwiperSlide>
                  <SwiperSlide>
                  <div className="service-block-home2 wow fadeInUp">
                    <figure className="image">
                      <Link href="page-service-details">
                        <img className="img-1" src="/images/resource/service-3.jpg" alt=""/>
                        <img className="img-2" src="/images/resource/service-3.jpg" alt=""/>
                      </Link>
                    </figure>
                    <div className="inner-box ">
                      <i className="icon flaticon-delivery-truck-1"></i>
                      <h4 className="title mt-0"><Link href="page-service-details">Road service</Link></h4>
                      <div className="text">Long established fact that a reader will be distracted content of a page when looking at its layout</div>
                      <Link href="page-service-details" className="read-more">Read More</Link>
                    </div>
                  </div>
                  </SwiperSlide>
                  <SwiperSlide>
                  <div className="service-block-home2 wow fadeInUp">
                    <figure className="image">
                      <Link href="page-service-details">
                        <img className="img-1" src="/images/resource/service-4.jpg" alt=""/>
                        <img className="img-2" src="/images/resource/service-4.jpg" alt=""/>
                      </Link>
                    </figure>
                    <div className="inner-box ">
                      <i className="icon flaticon-shipment"></i>
                      <h4 className="title mt-0"><Link href="page-service-details">Other solution</Link></h4>
                      <div className="text">Long established fact that a reader will be distracted content of a page when looking at its layout</div>
                      <Link href="page-service-details" className="read-more">Read More</Link>
                    </div>
                  </div>
                  </SwiperSlide>
                  <SwiperSlide>
                  <div className="service-block-home2 wow fadeInUp">
                    <figure className="image">
                      <Link href="page-service-details">
                        <img className="img-1" src="/images/resource/service-1.jpg" alt=""/>
                        <img className="img-2" src="/images/resource/service-1.jpg" alt=""/>
                      </Link>
                    </figure>
                    <div className="inner-box ">
                      <i className="icon flaticon-airplane-1"></i>
                      <h4 className="title mt-0"><Link href="page-service-details">Air freight</Link></h4>
                      <div className="text">Long established fact that a reader will be distracted content of a page when looking at its layout</div>
                      <Link href="page-service-details" className="read-more">Read More</Link>
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
export default Services2
