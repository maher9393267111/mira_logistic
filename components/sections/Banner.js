import Link from "next/link"
import { useLanguageContext } from "../../app/languageContext";
const Banner = () => {

  const { language :lang } = useLanguageContext()

  const title =lang === 'en' ? "We put the world in your hands" : lang === 'ar' ? "نضع العالم بين يديكم"  : "Dünyayı ellerinize veriyoruz"

  const subtitle =lang === 'en' ? "Trust our services with Mira International Shipping Company" : lang === 'ar' ? "ثق بخدماتنا مع شركة ميرا للشحن الدولي " : "Mira Uluslararası Nakliye Şirketi ile hizmetlerimize güvenin"

  const abouttitle =lang === 'en' ? "About Us" : lang === 'ar' ? "للاطلاع على المزيد" : "Hakkimizda"

//Trust our services-


    return (
        <>
        <section 
        
        // style={{background:"rgba(0, 0, 0, 0.4) !important"}} 
        
        className="banner-section-one    ">

{/* <div  className=" absolute w-full h-full z-20  opacity-25 -mt-24 !bg-black left-0 right-0 " ></div> */}


          <div className="bg   !bg-black bg-image" style={{ backgroundImage: 'url(https://gulfcharter.ae/wp-content/uploads/2023/05/baNNER-min.jpg)',

//  background:"rgba(0, 0, 0, 0.4) !important"


           }}></div>
          <div className="bottom-shape"></div>
        

        

          <div dir={ lang === 'ar' && 'rtl'} className="auto-container arabic">
            {/* <div className="image-box wow slideInRight" data-wow-delay="2000ms"><figure className="image"><img src="/images/main-slider/truck2.png" alt=""/></figure></div> */}
            <div className="content-box">
              <div className="title-box arabic">
                <span className="su-title mb-3 !text-white wow fadeInUp !font-bold arabic rounded-3xl    py-2 px-4 !inline-block bg-red-600  shadow-3xl shadow-black">{title}</span>

<div className="block mt-4">

                <h1 className="title md:!inline mt-4 wow fadeInUp !bg-red-600 py-2 px-4 !text-xl md:!text-3xl md:w-[70%]     rounded-3xl   " data-wow-delay="600ms">
                  {/* Reliable & Safes */}
                
               
                {subtitle}
                
                  
       
                  
                  </h1>

                  </div>
              </div>
              <Link dir={ lang === 'ar' && 'rtl'} href="/about" className="theme-btn !shadow-2xl  !shadow-black btn-style-one wow fadeInUp" data-wow-delay="1200ms"><span className="btn-title">
                
                {abouttitle}
              
              </span></Link>
              <span className="icon icon-plane"></span>
            </div>


          
          </div>




        </section>
        </>
    );
};
export default Banner