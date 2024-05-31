import Link from 'next/link';
import { useLanguageContext } from '../../app/languageContext';
const About1 = ({about}) => {

  const { language :lang } = useLanguageContext()

  const dir = lang === 'ar' && 'rtl'


  const aboutTitle =  lang === 'en' ? "About MiraLojistik company": lang === 'ar' ? " عن شركة ميرا لوجستيك"  : "MiraLojistik Sirket hakkinda"
  const customersTitle =  lang === 'en' ? "Satisfied Clients": lang === 'ar' ? "عملاء راضون" : "Memnun Müşteriler"
  const sinceTitle =  lang === 'en' ? "Since": lang === 'ar' ? "منذ" : "bu yana"

  const heading=  lang === 'en' ? about?.heading: lang === 'ar' ? about?.headingar : about?.headingtr
  const desc =  lang === 'en' ?  about?.desc : lang === 'ar' ? about?.descar : about?.desctr

  const trusted =  lang === 'en' ? "Trusted by Clients": lang === 'ar' ? "موثوق بها من قبل العملاء" : "Müşterilerin Güvendiği"

  const support =  lang === 'en' ? "Support": lang === 'ar' ? "الدعم " : "Destek"

  const aboutlink =  lang === 'en' ? "Discover more": lang === 'ar' ? "مشاهدة المزيد" : "Daha fazlasını keşfet"



    return (
        <>
        <section className="about-section pt-70 pb-60">
          <div className="auto-container">
            <div className="row">

              <div className="image-column col-lg-6">
                <div className="inner-column wow fadeInLeft">
                  <figure className="image-1 overlay-anim wow fadeInUp"><img src="/images/resource/about1-1.jpg" alt=""/></figure>
                  <figure className="image-2 overlay-anim wow fadeInUp"><img src="/images/resource/about1-2.jpg" alt=""/></figure>
                  <div className="experience wow fadeInUp">
                    <div className="inner">
                      <i className="icon lnr-icon-users"></i>
                      <div className="text"><strong>{about?.customersnumber}</strong> {customersTitle}</div>
                    </div>
                  </div>
                </div>
              </div>
              <div dir={lang === 'ar' && 'rtl'} className="content-column col-lg-6 pl-70 pl-lg-30 wow fadeInLeft" data-wow-delay="300ms">
                <div className="inner-column">
                  <div className="sec-title arabic">
                    <span className="sub-titl arabic">{aboutTitle}</span>
                    <h2>{heading} <span className="color1"> {sinceTitle} 
                    
                    {about?.year}
                    
                    </span>
                    
                    </h2>
                    <div className="text"
                    >
                      
                      {desc}
                      
                      .</div>
                  </div>
                  {/* <ul className="list-style-two mb-40">
                    <li><i className="fa fa-check-circle"></i> Lorem ipsum is not simple random text </li>
                    <li><i className="fa fa-check-circle"></i> Making this the first true generator on the internet</li>
                  </ul> */}
                  <div className="row">
                    <div className="about-block col-md-6">
                      <div className="inner mb-30">
                        <h5 className="title mb-2">24/7 {support}</h5>
                        {/* <div className="text">Lorem ipsum is simply velit anod ipas aliquet enean quis.</div> */}
                      </div>
                      <div className="btm-box">
                        <Link href="/about" className="theme-btn btn-style-one"><span className="btn-title">{aboutlink}</span></Link>
                      </div>
                    </div>
                    <div className="text-block col-md-6">
                      <div className="trusted-box">
                        <i className="icon flaticon-customer-service"></i>
                        <h5 className="title">{trusted}</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        </>
    );
};
export default About1
