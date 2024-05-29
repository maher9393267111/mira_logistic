import Link from 'next/link';
const About1 = () => {
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
                      <div className="text"><strong>3800</strong> Satisfied Clients</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-column col-lg-6 pl-70 pl-lg-30 wow fadeInLeft" data-wow-delay="300ms">
                <div className="inner-column">
                  <div className="sec-title">
                    <span className="sub-title">about the company</span>
                    <h2>Best transportation services <span className="color1">Since 1996</span></h2>
                    <div className="text">Web designing in a powerful way of just not an only professions, however, in a passion for our Company. We have to a tendency to believe the idea that smart looking.</div>
                  </div>
                  <ul className="list-style-two mb-40">
                    <li><i className="fa fa-check-circle"></i> Lorem ipsum is not simple random text </li>
                    <li><i className="fa fa-check-circle"></i> Making this the first true generator on the internet</li>
                  </ul>
                  <div className="row">
                    <div className="about-block col-md-6">
                      <div className="inner mb-30">
                        <h5 className="title mb-2">24/7 Support</h5>
                        <div className="text">Lorem ipsum is simply velit anod ipas aliquet enean quis.</div>
                      </div>
                      <div className="btm-box">
                        <Link href="page-about" className="theme-btn btn-style-one"><span className="btn-title">Discover More</span></Link>
                      </div>
                    </div>
                    <div className="text-block col-md-6">
                      <div className="trusted-box">
                        <i className="icon flaticon-customer-service"></i>
                        <h5 className="title">Trusted by Clients</h5>
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
