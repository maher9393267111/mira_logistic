const Form2 = () => {
    return (
        <>
        <section className="contact-section-two pull-up pb-40">
          <div className="auto-container">
            <div className="row">

              <div className="info-column col-xl-7 col-lg-6 order-2">
                <div className="inner-column wow fadeInRight">
                  <div className="sec-title">
                    <div className="sub-title">Get to know</div>
                    <h3>Keep your dream transport with us</h3>
                  </div>
                  <figure className="image overlay-anim d-none d-xl-block"><img src="/images/resource/contact.jpg" alt=""/></figure>
                  <div className="info-box">
                    <span className="icon fa fa-check"></span>
                    <h5 className="title">Multiple Port Services</h5>
                    <div className="text">Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean solldin, lorem is simply free</div>
                  </div>
                  <div className="info-box">
                    <span className="icon fa fa-check"></span>
                    <h5 className="title">End to End Solutions</h5>
                    <div className="text">Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean solldin, lorem is simply free</div>
                  </div>
                </div>
              </div>

              <div className="form-column col-xl-5 col-lg-6">
                <div className="inner-column">

                  <div className="contact-form wow fadeInLeft">
                    <div className="title-box">
                      <span className="sub-title">Contact us</span>
                      <h3 className="text-white">Write Email</h3>
                    </div>

                    <form id="contact_form" name="contact_form" className="" method="post">
                      <div className="form-group">
                        <input type="text" name="form_name" placeholder="Your Name" required/>
                      </div>
                      <div className="form-group">
                        <input type="email" name="form_email" placeholder="Email Address" required/>
                      </div>
                      <div className="form-group">
                        <input type="text" name="form_subject" placeholder="Subject" required/>
                      </div>
                      <div className="form-group">
                        <textarea name="message" placeholder="Write a Message" required></textarea>
                      </div>
                      <div className="form-group">
                        <input name="form_botcheck" className="form-control" type="hidden" />
                        <button type="submit" className="theme-btn btn-style-one" data-loading-text="Please wait..."><span className="btn-title">Send a message</span></button>
                      </div>
                    </form>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </section>
        </>
    );
};
export default Form2
