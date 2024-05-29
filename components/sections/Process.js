const Process = ({ addClass }) => {
  const data = [
  {
      icon: "icon flaticon-product",
      title:"Enter your & product details",
      count:"01",
      description: "Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet."
  },
  {
      icon: "icon flaticon-cash",
      title:"Documents & Payments",
      count:"02",
      description: "Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet."
  },
  // {
  //     icon: "icon flaticon-cargo",
  //     title:"Ready to send your goods",
  //     count:"03",
  //     description: "Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet."
  // }
];
    return (
        <>
        <section className={`process-section ${addClass}`}>
          <div className="dotted-map"></div>
          <div className="auto-container">
            <div className="sec-title text-center">
              <span className="sub-title">How It Work</span>
              <h2>Get your shipment with us <br/>3 easy simple <span className="color1">steps</span></h2>
            </div>
        
            <div className="row">
            {data.map((item, i) => (
              <div key={i} className="process-block col-lg-4 col-md-6 wow fadeInUp">
                <div className="inner-box">
                  <div className="icon-box">
                    <i className={item.icon}></i>
                    <span className="count">{item.count}</span>
                  </div>
                  <div className="info-box">
                    <div className="inner">
                      <h4 className="title">{item.title}</h4>
                      <div className="text">{item.description}</div>
                    </div>
                  </div>
                </div>
              </div>))}
        
            </div>
          </div>
        </section>
        </>
    );
};
export default Process
