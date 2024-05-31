"use client"
import Link from "next/link"
import { useLanguageContext } from "../../languageContext";
import { useTranslation } from '../../useTranslation'
import Layout from "../../../components/layout/Layout";
import axios from 'axios'
import {useState ,useEffect ,useMemo} from 'react'
const ContactMain = () => {
    
  const { language :lang } = useLanguageContext()

    const dir = lang === 'ar' && 'rtl'


    const { translation } = useTranslation()

    const t= useMemo(() => translation?.header?.contactHeader ?? {}, [translation])

   

   

    const touch =  lang === 'en' ? "Get in touch with us": lang === 'ar' ? "ابق على تواصل معنا" : "Bizimle ilitisme geçin"
  
    const fomrtitle  =  lang === 'en' ? "Feel free to write": lang === 'ar' ? "ارسل استفسارك" : "Yazmaktan çekinmeyin"




    const [state, setstate] = useState({
        name: "",
        phone: "",
    
        message: "",
        subject:"",
        email: "",
    
        error: false,
      });
    
      const [welcomeMessage, setWelcomeMessage] = useState("");
    
    
      const submit = (e) => {
        e.preventDefault();
        console.log("clicked btn");
        sendMessage();
      };
    
      const sendMessage = async () => {
        try {
          let data = {
            ...state,
            // to:contact?.email
          };
    
          if (!state.phone && !state.name && !state.email && !state.message && !contact.email && !contact.subject) {
            console.log("ERROR CONDITION @@@@@@");
            setstate({ ...state, error: true });
          //  message.info("يرجا تعبئة كافة الحقول");
          } else {
            const res = await fetch("/api/contact", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(data),
            });
    
            setstate({ ...state, error: false });
    
            setWelcomeMessage("تم ارسال معلوماتك بنجاح");
    
            // message.success("تم ارسال معلوماتك بنجاح");
          }
    
          //console.log("response", res);
    
          //   setPhone("")
        } catch (error) {
          // message.error("حدث خطأ ما");
          console.log(error);
        }
      };
    
      const inputChange = (e) => {
        setstate({ ...state, [e.target.name]: e.target.value });
      };



  return (
    <>
    <Layout headerStyle={1} footerStyle={1}>
    <section className="contact-details">
      <div className="container pb-70 !mt-12">
        <div className="row">
          <div className="col-xl-7 col-lg-6">
            <div dir={dir} className="sec-title arabic">
              {/* <span className="sub-title">Send us email</span> */}
              <h2 className="text-center">{fomrtitle}</h2>
            </div>
            {/* Contact Form  */}
            <form id="contact_form arabic" name="contact_form" className="" onSubmit={submit} method="post">
              <div className="row">
                <div className="col-sm-6">
                  <div className="mb-3">
                    <input
                    
                    name="name"
                    onChange={inputChange}
                    value={state.name}
                    className="form-control arabic" type="text" placeholder={t.name}/>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="mb-3">
                    <input 
                       name="email"
                       onChange={inputChange}
                       value={state.email}
                    
                    className="form-control required email arabic" type="email" placeholder={t?.email}/>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-6">
                  <div className="mb-3">
                    <input 
                      name="subject"
                      onChange={inputChange}
                      value={state.subject}
                    
                    className="form-control required arabic" type="text" placeholder={t?.subject}/>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="mb-3">
                    <input
                      name="phone"
                      onChange={inputChange}
                      value={state.phone}
                    
                    className="form-control arabic" type="text" placeholder={t?.phone}/>
                  </div>
                </div>
              </div>
              <div className="mb-3">
                <textarea 
                  name="message"
                  onChange={inputChange}
                  value={state.message}
                
                
                className="form-control required arabic" rows="7" placeholder={t?.message}></textarea>
              </div>
              <div className="mb-5 arabic">
                <input name="form_botcheck" className="form-control" type="hidden" value="" />
                <button type="submit" className="theme-btn btn-style-one" data-loading-text="Please wait..."><span className="btn-title">{t?.send}</span></button>
                {/* <button type="reset" className="theme-btn btn-style-one ml-25"><span className="btn-title">Reset</span></button> */}
              </div>
            </form>
            {/* Contact Form Validation */}
          </div>
          <div  className="col-xl-5 col-lg-6">
            <div  className="contact-details__right arabic">
              <div dir={dir} className="sec-title">
                {/* <span className="sub-title">Need any help?</span> */}
                <h2 className="arabic">{touch}</h2>
                {/* <div className="text">Lorem ipsum is simply free text available dolor sit amet consectetur notted adipisicing elit sed do eiusmod tempor incididunt simply dolore magna.</div> */}
              </div>
              <ul className="list-unstyled contact-details__info">
                <li>
                  <div className="icon">
                    <span className="lnr-icon-phone-plus"></span>
                  </div>
                  <div className="text">
                    {/* <h6 className="mb-1">Have any question?</h6> */}
                    <a href="tel:+905348828077"><span></span>+905348828077</a>
                  </div>

                



                </li>


                <li>
                  <div className="icon">
                    <span className="lnr-icon-phone-plus"></span>
                  </div>
                  <div className="text">
                    {/* <h6 className="mb-1">Have any question?</h6> */}
                    <a href="tel:+905344425626"><span></span>+905344425626</a>
                  </div>
                </li>

                <li>
                  <div className="icon">
                    <span className="lnr-icon-envelope1"></span>
                  </div>
                  <div className="text">
                    {/* <h6 className="mb-1">Write email</h6> */}
                    <a href="mailto:info@elmiralojstik.com">info@elmiralojstik.com</a>
                  </div>
                </li>


                
                <li>
                  <div className="icon">
                    <span className="lnr-icon-envelope1"></span>
                  </div>
                  <div className="text">
                    {/* <h6 className="mb-1">Write email</h6> */}
                    <a href="mailto:director@elmiralojstik.com">director@elmiralojstik.com</a>
                  </div>
                </li>


                
                <li>
                  <div className="icon">
                    <span className="lnr-icon-envelope1"></span>
                  </div>
                  <div className="text">
                    {/* <h6 className="mb-1">Write email</h6> */}
                    <a href="mailto:muhasebe@elmiralojstik.com">muhasebe@elmiralojstik.com</a>
                  </div>
                </li>



                <li>
                  <div className="icon">
                    <span className="lnr-icon-location"></span>
                  </div>
                  <div className="text">
                    {/* <h6 className="mb-1">Visit anytime</h6> */}
                    <span>ALTINŞEHİR MAH. GÜLNİHAL SK. NO: 6 İÇ KAPI NO: 3 BAŞAKŞEHİR/ İSTANBUL</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="map-section py-0">
      <iframe  className="map w-100"  src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
    </section>


    </Layout>
    </>
  );
};
export default ContactMain
