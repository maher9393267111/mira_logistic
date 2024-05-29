import Link from "next/link";
import { useState } from "react";

const Faq = () => {

  const [isActive, setIsActive] = useState({
    status: false,
    key: 1,
  })

  const handleClick = (key) => {
    if (isActive.key === key) {
      setIsActive({
        status: false,
      })
    } else {
      setIsActive({
        status: true,
        key,
      })
    }
  }
  return (
    <>
    
  <section className="faqs-section innerpage">
    <div className="auto-container">
      <div className="row">
        {/* FAQ Column  */}
        <div className="faq-column col-lg-6">
          <div className="sec-title mb-30">
            <h3>Research Faq</h3>
          </div>
          <div className="inner-column">
            <ul className="accordion-box ms-0 wow fadeInRight">
              {/*Block */}
              <li className="accordion block active-block">
                <div className={isActive.key == 1 ? "acc-btn active" : "acc-btn"} onClick={() => handleClick(1)}>
                  How to get free support?
                  <div className="icon fa fa-angle-right"></div>
                </div>
                <div className={isActive.key == 1 ? "acc-content current" : "acc-content"}>
                  <div className="content">
                    <div className="text">Sed rhoncus facilisis purus, at accumsan purus sagittis vitae. Nullam acelit at eros imperdiet. Pellentesque sit.</div>
                  </div>
                </div>
              </li>
              {/*Block */}
              <li className="accordion block">
                <div className={isActive.key == 2 ? "acc-btn active" : "acc-btn"} onClick={() => handleClick(2)}>
                  Which goods you want to transport?
                  <div className="icon fa fa-angle-right"></div>
                </div>
                <div className={isActive.key == 2 ? "acc-content current" : "acc-content"}>
                  <div className="content">
                    <div className="text">Sed rhoncus facilisis purus, at accumsan purus sagittis vitae. Nullam acelit at eros imperdiet. Pellentesque sit.</div>
                  </div>
                </div>
              </li>
              {/*Block */}
              <li className="accordion block">
                <div className={isActive.key == 3 ? "acc-btn active" : "acc-btn"} onClick={() => handleClick(3)}>
                  What is our transport necessity?
                  <div className="icon fa fa-angle-right"></div>
                </div>
                <div className={isActive.key == 3 ? "acc-content current" : "acc-content"}>
                  <div className="content">
                    <div className="text">Sed rhoncus facilisis purus, at accumsan purus sagittis vitae. Nullam acelit at eros imperdiet. Pellentesque sit.</div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        {/* FAQ Column  */}
        <div className="faq-column col-lg-6">
          <div className="sec-title mb-30">
            <h3>Serivce Faq</h3>
          </div>
          <div className="inner-column">
            <ul className="accordion-box ms-0 wow fadeInRight">
              {/*Block */}
              <li className="accordion block active-block">
                <div className={isActive.key == 4 ? "acc-btn active" : "acc-btn"} onClick={() => handleClick(4)}>
                  How to get free support?
                  <div className="icon fa fa-angle-right"></div>
                </div>
                <div className={isActive.key == 4 ? "acc-content current" : "acc-content"}>
                  <div className="content">
                    <div className="text">Sed rhoncus facilisis purus, at accumsan purus sagittis vitae. Nullam acelit at eros imperdiet. Pellentesque sit.</div>
                  </div>
                </div>
              </li>
              {/*Block */}
              <li className="accordion block">
                <div className={isActive.key == 5 ? "acc-btn active" : "acc-btn"} onClick={() => handleClick(5)}>
                  Which goods you want to transport?
                  <div className="icon fa fa-angle-right"></div>
                </div>
                <div className={isActive.key == 5 ? "acc-content current" : "acc-content"}>
                  <div className="content">
                    <div className="text">Sed rhoncus facilisis purus, at accumsan purus sagittis vitae. Nullam acelit at eros imperdiet. Pellentesque sit.</div>
                  </div>
                </div>
              </li>
              {/*Block */}
              <li className="accordion block">
                <div className={isActive.key == 6 ? "acc-btn active" : "acc-btn"} onClick={() => handleClick(6)}>
                  What is our transport necessity?
                  <div className="icon fa fa-angle-right"></div>
                </div>
                <div className={isActive.key == 6 ? "acc-content current" : "acc-content"}>
                  <div className="content">
                    <div className="text">Sed rhoncus facilisis purus, at accumsan purus sagittis vitae. Nullam acelit at eros imperdiet. Pellentesque sit.</div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-12">
            {/* Contact Form  */}
            <form id="contact_form" className="bg-lighter p-5" name="contact_form" action="#" method="post">
              <div className="row">
                <div className="col-sm-6">
                  <div className="mb-3">
                    <input name="form_name" className="form-control bg-white" type="text" placeholder="Enter Name"/>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="mb-3">
                    <input name="form_email" className="form-control bg-white required email" type="email" placeholder="Enter Email"/>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-6">
                  <div className="mb-3">
                    <input name="form_subject" className="form-control bg-white required" type="text" placeholder="Enter Subject"/>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="mb-3">
                    <input name="form_phone" className="form-control bg-white" type="text" placeholder="Enter Phone"/>
                  </div>
                </div>
              </div>
              <div className="mb-3">
                <textarea name="form_message" className="form-control bg-white required" rows="5" placeholder="Enter Message"></textarea>
              </div>
              <div className="text-center">
                <input name="form_botcheck" className="form-control" type="hidden" value="" />
                <button type="submit" className="theme-btn btn-style-one me-2" data-loading-text="Please wait..."><span className="btn-title">Send message</span></button>
                <button type="reset" className="theme-btn btn-style-one"><span className="btn-title">Reset</span></button>
              </div>
            </form>
            {/* Contact Form Validation */}
          </div>
        </div>
      </div>
    </div>
  </section>
    </>
  );
};
export default Faq
