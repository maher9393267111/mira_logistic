import dynamic from 'next/dynamic'
const CounterUp = dynamic(() => import('@/components/elements/CounterUp'), {
    ssr: false,
})
const Funfact = () => {
    return (
        <>
        <section className="fun-fact-section pull-up">
          <div className="bg bg-pattern-3-dark"></div>
          <div className="auto-container">
            <div className="fact-counter">
              <div className="row">

                <div className="counter-block col-lg-3 col-sm-6 wow fadeInUp">
                  <div className="inner">
                    <div className="icon-box"><i className="flaticon-cargo"></i></div>
                    <div className="count-box"><CounterUp count={990} time={3} /></div>
                    <h4 className="counter-title">Projects Completed</h4>
                  </div>
                </div>
            
                <div className="counter-block col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="300ms">
                  <div className="inner">
                    <div className="icon-box"><i className="flaticon-delivery-man-1"></i></div>
                    <div className="count-box"><CounterUp count={370} time={3} /></div>
                    <h4 className="counter-title">Repeat Customers</h4>
                  </div>
                </div>
            
                <div className="counter-block col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="600ms">
                  <div className="inner">
                    <div className="icon-box"><i className="flaticon-global-1"></i></div>
                    <div className="count-box"><CounterUp count={860} time={3} /></div>
                    <h4 className="counter-title">Satisfied Customers</h4>
                  </div>
                </div>
            
                <div className="counter-block col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="900ms">
                  <div className="inner">
                    <div className="icon-box"><i className="flaticon-team"></i></div>
                    <div className="count-box"><CounterUp count={88} time={3} /></div>
                    <h4 className="counter-title">Team Members</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        </>
    );
};
export default Funfact
