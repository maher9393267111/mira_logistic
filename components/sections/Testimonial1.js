import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import urlFor from "../../lib/urlFor";
import { useLanguageContext } from "../../app/languageContext";
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
const Testimonial1 = ( {comments}) => {

  const { language :lang } = useLanguageContext()

  const dir = lang === 'ar' && 'rtl'
const title =   lang === 'en' ? "Our Customers Reviews" : lang === 'ar' ? "آراء زبائننا" : "Musteriliermiz Yorumlari"



    return (
        <>
        <section className="testimonial-section bg-light">
          <div className="dotted-map"></div>
          <div className="auto-container">
            <div className="sec-title text-center">
              {/* <span className="sub-title arabic">{title} </span> */}
              <h2>{title}</h2>
            </div>
            <div className="outer-box">
              <Swiper {...swiperOptions} className="testimonial-carousel owl-carousel owl-theme">
                  {/* testimonial Block */}




                  {comments?.map((item, index) => {
                  
                  return (

                  <SwiperSlide key={index}>
                <div className="testimonial-block arabic">
                  <div className="inner-box">
                    <div className="content-box">
                      <div className="rating"><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star-half-alt"></i></div>
                      <div className="text">“
                      {item?.description}.</div>
                    </div>
                    <div className="thumb"><img
                    src={urlFor(item?.image)?.url()}  
                    //  src="/images/resource/testi-thumb-1.jpg"
                     alt="" /></div>
                    <span className="designation">{item?.userwork}</span>
                    <h4 className="name">{item?.username}</h4>
                  </div>
                </div>
                  </SwiperSlide>

                  )})}

              
              </Swiper>
            </div>
          </div>
        </section>
        </>
    );
};
export default Testimonial1
