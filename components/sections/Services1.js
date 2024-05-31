import Link from "next/link"
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import urlFor from "../../lib/urlFor";
import { useLanguageContext } from '../../app/languageContext'
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
const Services1 = ({services}) => {
  
  const { language :lang } = useLanguageContext()

  const dir = lang === 'ar' && 'rtl'





    return (
        <>
        <section className="training-section arabic">
          <div className="bg bg-pattern-2"></div>
          <div className="bg bg-image" style={{ backgroundImage: 'url(images/resource/image-1.jpg)' }}></div>
          <div className="auto-container">
            <div  dir={lang === 'ar' && 'rtl'} className="sec-title">
              {/* <span className="sub-title">Our Services {services?.length}</span> */}
              <h2 className="arabic">
                
              {lang === 'en' ? "Specialist logistics services" : lang === 'ar' ? "الخدمات اللوجستية المميزة" : "Uzman lojistik hizmetleri"}
                
                 <br/> 
                 
                 {lang === 'en' ? "That" : lang === 'ar' ? "" : ""}
                 

                  <span className="color1">
                    
                  {lang === 'en' ? "you deserve" : lang === 'ar' ? 'التي تستحقها' : "hak ettiğin"}
                    </span></h2>
            </div>
      
            <div className="carousel-outer">
              <Swiper {...swiperOptions} className="home1-service-slider owl-carousel owl-theme">
                  {/* testimonial Block */}

                  {services?.map((item, index) => {
                  
                  return (
                  <SwiperSlide key={index}>
                    <div className="home1-service-block arabic">
                      <div dir={lang === 'ar' && 'rtl'} className="inner-box">
                        <div className="image-box">
                          <figure className="image"><img 
                           src={urlFor(item?.image)?.url()} 
                          // src="/images/resource/service-1.jpg"
                           alt=""/></figure>
                          <div className="overlay"><Link              href={`/service/${item?.slug?.current}`} className="read-more"><i className="fa fa-long-arrow-alt-right"></i></Link></div>
                        </div>
                        <div className="lower-content">
                          <Link   href={`/service/${item?.slug?.current}`} className="read-more"><i className="fa fa-long-arrow-alt-right"></i></Link>
                          <h4 className="title arabic"><Link              href={`/service/${item?.slug?.current}`}>
                            
                            {lang === 'en' ? item?.heading : lang === 'ar' ? item?.headingar : item?.headingtr}
                          
                          </Link></h4>
                          <div className="text arabic">
                          {lang === 'en' ? item?.desc : lang === 'ar' ? item?.descar : item?.desctr}
                          
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
               
                  )})}




{/* 
                  <SwiperSlide>
                    <div className="home1-service-block">
                      <div className="inner-box">
                        <div className="image-box">
                          <figure className="image"><img src="/images/resource/service-2.jpg" alt=""/></figure>
                          <div className="overlay"><Link href="page-service-details" className="read-more"><i className="fa fa-long-arrow-alt-right"></i></Link></div>
                        </div>
                        <div className="lower-content">
                          <Link href="page-service-details" className="read-more"><i className="fa fa-long-arrow-alt-right"></i></Link>
                          <h4 className="title"><Link href="page-service-details">Sea freight</Link></h4>
                          <div className="text">There are many variations of passages of available, but the majority have suffered freedom alteration.</div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
               
                  <SwiperSlide>
                    <div className="home1-service-block">
                      <div className="inner-box">
                        <div className="image-box">
                          <figure className="image"><img src="/images/resource/service-3.jpg" alt=""/></figure>
                          <div className="overlay"><Link href="page-service-details" className="read-more"><i className="fa fa-long-arrow-alt-right"></i></Link></div>
                        </div>
                        <div className="lower-content">
                          <Link href="page-service-details" className="read-more"><i className="fa fa-long-arrow-alt-right"></i></Link>
                          <h4 className="title"><Link href="page-service-details">Road service</Link></h4>
                          <div className="text">There are many variations of passages of available, but the majority have suffered freedom alteration.</div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
               
                  <SwiperSlide>
                    <div className="home1-service-block">
                      <div className="inner-box">
                        <div className="image-box">
                          <figure className="image"><img src="/images/resource/service-4.jpg" alt=""/></figure>
                          <div className="overlay"><Link href="page-service-details" className="read-more"><i className="fa fa-long-arrow-alt-right"></i></Link></div>
                        </div>
                        <div className="lower-content">
                          <Link href="page-service-details" className="read-more"><i className="fa fa-long-arrow-alt-right"></i></Link>
                          <h4 className="title"><Link href="page-service-details">Other solution</Link></h4>
                          <div className="text">There are many variations of passages of available, but the majority have suffered freedom alteration.</div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide> */}

              </Swiper>
            </div>
          </div>
        </section>
        </>
    );
};
export default Services1
