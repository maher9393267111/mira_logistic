import Link from 'next/link';
const About2 = () => {
    return (
        <>
        <section className="about-section-two pt-120">
          <div className="auto-container">
            <div className="row">

              <div className="content-column col-lg-6 order-2 wow fadeInLeft">
                <div className="inner-column">
                  <div className="sec-title">
                    <span className="sub-title">get to know us</span>
                    <h2>The Best Full Range Logistics solutions</h2>
                    <div className="text">There are many variations of passages of available but the majority have suffered alteration in some form, by injected hum randomised words which don't slightly.</div>
                  </div>

                  <div className="info-box">
                    <div className="inner">
                      <i className="icon flaticon-logistics-2"></i>
                      <h5 className="title">Leading in marketing</h5>
                      <div className="text">Knowledge of technologies rules better than anyone which we apply in our daily work</div>
                    </div>
                  </div>

                  <div className="info-box">
                    <div className="inner">
                      <i className="icon flaticon-delivery-man"></i>
                      <h5 className="title">Expert Delivery Man</h5>
                      <div className="text">Knowledge of technologies rules better than anyone which we apply in our daily work</div>
                    </div>
                  </div>
                  <div className="other-info">
                    <div className="author-info">
                      <div className="inner">
                        <figure className="thumb"><img src="/images/resource/avatar.jpg" alt=""/></figure>
                        <h5 className="name">Aleesha brown</h5>
                        <span className="designation">CEO & CO Founder</span>
                      </div>
                    </div>
                    <Link href="page-about" className="theme-btn btn-style-one"><span className="btn-title">Discover more</span></Link>
                  </div>
                </div>
              </div>
      

              <div className="image-column col-lg-6 wow fadeInRight">
                <div className="image-box">
                  <span className="icon-dots bounce-y d-none d-md-block"></span>
                  <span className="icon-circle zoom-one"></span>
                  <figure className="image-1"><img src="/images/resource/about-1.jpg" alt=""/></figure>
                  <figure className="image-2 bounce-y"><img src="/images/resource/about-2.jpg" alt=""/></figure>
                  <div className="exp-box bounce-x">
                    <div className="inner">
                      <i className="icon flaticon-delivery-service"></i>
                      <span className="count">38+</span>
                      <div className="text">Work Experience</div>
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
export default About2
