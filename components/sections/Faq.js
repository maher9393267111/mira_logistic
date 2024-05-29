import { useState } from 'react'
import urlFor from '../../lib/urlFor';
import { useLanguageContext } from '../../app/languageContext';
const Faq = ({faqs}) => {

  const { language :lang } = useLanguageContext()

  const dir = lang === 'ar' && 'rtl'
 const list = lang === 'en' ? faqs?.list : lang === 'ar' ? faqs?.listar : faqs?.listtr




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
                  <div dir={lang === 'ar' && 'rtl'} className="sec-title">
                    {/* <span className="sub-title">check our faqs</span> */}
                    <h2> {lang === 'en' ? faqs.heading : lang === 'ar' ? faqs?.headingar : faqs?.headingtr} <br/>
                    {/* few <span className="color1"
                    
                    >questions</span> */}
                    </h2>
                  </div>
                  <ul dir={lang === 'ar' && 'rtl'} className="accordion-box wow fadeInRight">



                  {list?.map((e, i) => (

                    <li key={i} className="accordion block">
                      <div className={isActive.key == i ? "acc-btn active" : "acc-btn"} onClick={() => handleClick(i)}>
                        {e?.answer}
                        <div className="icon fa fa-angle-right"></div>
                      </div>
                      <div className={isActive.key == i ? "acc-content current" : "acc-content"}>
                        <div className="content">
                          <div className="text">{e?.question}.</div>
                        </div>
                      </div>
                    </li>


                  ))}
                  
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
