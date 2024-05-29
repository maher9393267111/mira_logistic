import Link from "next/link"
const Banner = () => {
    return (
        <>
        <section className="banner-section-one">
          <div className="bg bg-image" style={{ backgroundImage: 'url(images/main-slider/2.jpg)' }}></div>
          <div className="bottom-shape"></div>
        
          <div className="auto-container">
            <div className="image-box wow slideInRight" data-wow-delay="2000ms"><figure className="image"><img src="/images/main-slider/truck2.png" alt=""/></figure></div>
            <div className="content-box">
              <div className="title-box">
                <span className="sub-title wow fadeInUp">Best logistic service in the world</span>
                <h1 className="title wow fadeInUp" data-wow-delay="600ms">Reliable & Safe<br className="d-none d-xl-block"/> Transport Solution<br className="d-none d-xl-block"/> From Miami</h1>
              </div>
              <Link href="page-about" className="theme-btn btn-style-one wow fadeInUp" data-wow-delay="1200ms"><span className="btn-title">Know More us</span></Link>
              <span className="icon icon-plane"></span>
            </div>
          </div>
        </section>
        </>
    );
};
export default Banner