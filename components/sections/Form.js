const Form = () => {
    return (
        <>
        <section className="contact-section pb-25">
          <div className="outer-box">
            <div className="bg bg-pattern-6"></div>
            <div className="auto-container">
              <div className="row">

                <div className="title-column col-lg-7 wow fadeInLRight">
                  <div className="inner-column">
                    <div className="sec-title">
                      <span className="sub-title">Why Choose Us</span>
                      <h2>We create opportunity to reach<span className="color1"> potential</span></h2>
                      <div className="text">There cursus massa at urnaaculis estie. Sed aliquamellus vitae ultrs condmentum leo massa mollis.</div>
                    </div>
                    <ul className="list-style-two">
                      <li><i className="fa fa-check-circle"></i> Making this the first true generator on the Internet</li>
                      <li><i className="fa fa-check-circle"></i> Lorem Ipsum is not simply random text</li>
                      <li><i className="fa fa-check-circle"></i> If you are going to use a passage</li>
                      <li><i className="fa fa-check-circle"></i> We are providing worldwide shipping</li>
                    </ul>
                    <div className="ceo-info">
                      <figure className="thumb"><img src="/images/resource/ceo-thumb.jpg" alt=""/></figure>
                      <h5 className="name">Aleesha Brown</h5>
                      <div className="designation">CEO & CO Founder</div>
                    </div>
                  </div>
                </div>
      
                <div className="form-column col-lg-5">
                  <div className="inner-column">
                    <div className="form-outer">

                      <div className="contact-form wow fadeInLeft">
                        <h4 className="title text-white">Request a quote</h4>

                        <form method="post" action="get" id="contact-form">
                          <div className="row">
                            <div className="col-lg-12 form-group">
                              <input type="text" name="full_name" placeholder="Your Name" required/>
                            </div>
      
                            <div className="col-md-6 form-group">
                              <input type="text" name="Email" placeholder="Your Email" required/>
                            </div>
      
                            <div className="col-md-6 form-group">
                              <input type="text" name="Phone" placeholder="Phone No" required/>
                            </div>
      
      
                            <div className="col-md-6 form-group">
                              <label>Freight type:</label>
                              <select className="custom-select">
                                <option defaultValue="">Select</option>
                                <option defaultValue="">Air Freight</option>
                                <option defaultValue="">Ocean Freight</option>
                                <option defaultValue="">Rail transport</option>
                                <option defaultValue="">Cargo ship</option>
                                <option defaultValue="">Bulk cargo</option>
                              </select>
                            </div>
      
                            <div className="col-md-6 form-group">
                              <label>Load:</label>
                              <select className="custom-select">
                                <option defaultValue="">Select</option>
                                <option defaultValue="">Door to Door</option>
                                <option defaultValue="">International shipping</option>
                                <option defaultValue="">Multi Modal</option>
                              </select>
                            </div>
      
                            <div className="col-lg-12 form-group">
                              <button className="theme-btn btn-style-one hvr-light" type="submit" name="submit-form"><span className="btn-title">Submit Request</span></button>
                            </div>
                          </div>
                        </form>
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
export default Form
