import Link from "next/link";
import React, { useState } from 'react';
import ModalVideo from 'react-modal-video';
import dynamic from 'next/dynamic';
const CounterUp = dynamic(() => import('@/components/elements/CounterUp'), {
    ssr: false,
})
const About = () => {
  const [isOpen, setOpen] = useState(false)
  return (
    <>

    <section className="about-section-video pt-120">
      <div className="auto-container">
        <div className="row align-items-center">
          <div className="col-lg-5">
            <div className="sec-title">
              <span className="sub-title">About The Company</span>
              <h2>Best transportation services Since 1996</h2>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="sec-title">
              <p className="text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium, tenetur dolor aliquam, laborum ullam, quas quam optio itaque voluptas officia quaerat.</p>
              <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing, elit. Officia porro eius pariatur deleniti, harum vel, tempore iusto quis excepturi corporis, adipisci dignissimos.</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="about-block-video text-center position-relative overflow-hidden">
              <img className="w-100 img-fluid" src="/images/resource/video-home2.jpg" alt=""/>
              <div className="video-box">
                <a onClick={() => setOpen(true)} className="play-now-two"><i className="icon fa fa-play" aria-hidden="true"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="about-section-client pb-100">
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
          <div className="col-lg-4">
            <div className="counter-block about-page wow fadeInUp">
              <div className="inner">
                <h2 className="">All Of Reward That We Received</h2>
                <div className="count-box"><CounterUp count={990} time={3} />+</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="tFC3jE34ilc" onClose={() => setOpen(false)} />

    </>
  );
};
export default About
