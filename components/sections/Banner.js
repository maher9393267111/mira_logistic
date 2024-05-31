import Link from "next/link"
import { useLanguageContext } from "../../app/languageContext";
const Banner = () => {

  const { language :lang } = useLanguageContext()

  const title =lang === 'en' ? "Best logistic service in the world" : lang === 'ar' ? "  شركة ميرا لوجستيك  أفضل خدمة لوجستية في تركيا"  : "DÜNYANIN EN İYİ LOJİSTİK HİZMETİ"

  const subtitle =lang === 'en' ? "Trust our services" : lang === 'ar' ? " ثق بخدماتنا مع شركة الميرا لوجستيك" : "Hizmetlerimize güvenin miralojistic"


  const abouttitle =lang === 'en' ? "About Us" : lang === 'ar' ? "للاطلاع على المزيد" : "Hakkimizda"

//Trust our services-


    return (
        <>
        <section className="banner-section-one">
          <div className="bg bg-image" style={{ backgroundImage: 'url(/images/main-slider/2.jpg)' }}></div>
          <div className="bottom-shape"></div>
        
          <div className="auto-container arabic">
            {/* <div className="image-box wow slideInRight" data-wow-delay="2000ms"><figure className="image"><img src="/images/main-slider/truck2.png" alt=""/></figure></div> */}
            <div className="content-box">
              <div className="title-box arabic">
                <span className="sub-title wow fadeInUp">{title}</span>
                <h1 className="title wow fadeInUp" data-wow-delay="600ms">
                  {/* Reliable & Safes */}
                
                {subtitle}
                  
                  
                  {/* <br className="d-none d-xl-block"/> Transport Solution<br className="d-none d-xl-block"/> From Miami */}
                  
                  </h1>
              </div>
              <Link href="/about" className="theme-btn btn-style-one wow fadeInUp" data-wow-delay="1200ms"><span className="btn-title">
                
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