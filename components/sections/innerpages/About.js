import Link from "next/link";
import React, { useState } from 'react';
import ModalVideo from 'react-modal-video';
import urlFor from "../../../lib/urlFor";
// import dynamic from 'next/dynamic';
// const CounterUp = dynamic(() => import('@/components/elements/CounterUp'), {
//     ssr: false,
// })
const About = ({data ,lang}) => {
  const [isOpen, setOpen] = useState(false)

const heading =  lang === 'en' ? data?.heading: lang === 'ar' ? data?.headingar : data?.headingtr

const desc =  lang === 'en' ? data?.desc: lang === 'ar' ? data?.descar : data?.desctr



  return (
    <>

    <section className="about-section-video pt-120">
      <div className="auto-container">
        <div dir={lang === 'ar' && 'rtl'} className="  arabic row align-items-center">
          <div className="col-lg-12">
            <div className="sec-title text-center">
              {/* <span className="sub-title">About The Company</span> */}
              <h3>{heading}
              
              <span className="color1">  
                    
                    {data?.year}
                    
                    </span>
              
              
              </h3>
            </div>
          </div>
          <div className="col-lg-12 ">
            <div className="sec-title text-center !text-xl !font-semibold">
              <p className="text">
              {desc}  .</p>
              {/* <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing, elit. Officia porro eius pariatur deleniti, harum vel, tempore iusto quis excepturi corporis, adipisci dignissimos.</p> */}
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="">
              <img className="w-100  md:!h-[600px] rounded-md img-fluid" 
              
src={urlFor(data?.image)?.url()}
              // src="/images/resource/video-home2.jpg" 
              
              alt=""/>
              {/* <div className="video-box">
                <a onClick={() => setOpen(true)} className="play-now-two"><i className="icon fa fa-play" aria-hidden="true"></i></a>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* <section className="about-section-client pb-100">
      <div className="dotted-map"></div>
      <div className="auto-container">
        <div className="row align-items-center">
          <div className="col-lg-8 wow fadeInUp">
            <div className="row">
              <div className="col-lg-4 col-sm-6">
                <div className="about-block-client">
                  <img src="/images/client/client1.png" alt=""/>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6">
                <div className="about-block-client">
                  <img src="/images/client/client2.png" alt=""/>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6">
                <div className="about-block-client">
                  <img src="/images/client/client3.png" alt=""/>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6">
                <div className="about-block-client">
                  <img src="/images/client/client4.png" alt=""/>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6">
                <div className="about-block-client">
                  <img src="/images/client/client5.png" alt=""/>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6">
                <div className="about-block-client">
                  <img src="/images/client/client6.png" alt=""/>
                </div>
              </div>
            </div>
          </div>
      
        </div>
      </div>
    </section>

    <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="tFC3jE34ilc" onClose={() => setOpen(false)} /> */}

    </>
  );
};
export default About
