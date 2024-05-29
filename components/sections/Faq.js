import { useState } from 'react'
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
        <section className="faqs-section pull-up">
          <div className="bg bg-pattern-9"></div>
          <div className="auto-container">
            <div className="row">
              <div className="image-column col-lg-6">

                <div className="image-box">
                  <span className="sub-title bounce-y">100% Success Rate</span>
                  <figure className="image-1"><img src="/images/resource/image-1.png" alt=""/></figure>
                  <figure className="plane-icon"><img src="/images/resource/plane-2.png" alt=""/></figure>
                </div>
              </div>
              <div className="faq-column col-lg-6">

                <div className="inner-column">
                  <div className="sec-title">
                    <span className="sub-title">check our faqs</span>
                    <h2>People frequently asked <br/>few <span className="color1">questions</span></h2>
                  </div>
                  <ul className="accordion-box wow fadeInRight">

                    <li className="accordion block">
                      <div className={isActive.key == 1 ? "acc-btn active" : "acc-btn"} onClick={() => handleClick(1)}>How to get free support?
                        <div className="icon fa fa-angle-right"></div>
                      </div>
                      <div className={isActive.key == 1 ? "acc-content current" : "acc-content"}>
                        <div className="content">
                          <div className="text">Sed rhoncus facilisis purus, at accumsan purus sagittis vitae. Nullam acelit at eros imperdiet. Pellentesque sit.</div>
                        </div>
                      </div>
                    </li>

                    <li className="accordion block">
                      <div className={isActive.key == 2 ? "acc-btn active" : "acc-btn"} onClick={() => handleClick(2)}>Which goods you want to transport?
                        <div className="icon fa fa-angle-right"></div>
                      </div>
                      <div className={isActive.key == 2 ? "acc-content current" : "acc-content"}>
                        <div className="content">
                          <div className="text">Sed rhoncus facilisis purus, at accumsan purus sagittis vitae. Nullam acelit at eros imperdiet. Pellentesque sit.</div>
                        </div>
                      </div>
                    </li>

                    <li className="accordion block">
                      <div className={isActive.key == 3 ? "acc-btn active" : "acc-btn"} onClick={() => handleClick(3)}>What is our transport necessity?
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
            </div>
          </div>
        </section>
        </>
    );
};
export default Faq
