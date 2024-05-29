const WhyChooseUs = () => {
    return (
        <>
        <section className="why-choose-us-home2">
          <div className="bg-image d-none d-xl-block" style={{ backgroundImage: 'url(images/background/home-2-divider-bg.jpg)' }}></div>
          <div className="bg-shape"><div className="shape"></div></div>
      
          <div className="container-fluid">
            <div className="row">

              <div className="image-column col-xl-6">
                <div className="image-box hide-desktop"><img src="/images/background/home-2-divider-bg.jpg" alt=""/></div>
              </div>

              <div className="content-column col-xl-5 col-lg-8">
                <div className="inner-column pl-90 wow fadeInLeft">
                  <div className="sec-title light">
                    <span className="sub-title">Why Choose Us</span>
                    <h2>We create opportunity <br/>to reach potential</h2>
                    <div className="text">Develop energy storage systems such as batteries and other technologies that can store excess renewable energy for use later.</div>
                    <div className="text">We strongly support best practice sharing across our operations around the world and industrial sectors.</div>
                  </div>
                  <div className="row">

                    <div className="feature-block-home2 mb-4 mb-sm-0 col-6">
                      <div className="inner-box d-sm-flex align-items-sm-center">
                        <i className="icon mr-20 flaticon-delivery-insurance-1"></i>
                        <h5 className="title mt-3 mt-sm-0 my-0 text-white">Safety & Reliable <br/>Service</h5>
                      </div>
                    </div>

                    <div className="feature-block-home2 col-6">
                      <div className="inner-box d-sm-flex align-items-sm-center">
                        <i className="icon mr-20 flaticon-tracking"></i>
                        <h5 className="title mt-3 mt-sm-0 my-0 text-white">Real Time <br/>Tracking System</h5>
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
export default WhyChooseUs
