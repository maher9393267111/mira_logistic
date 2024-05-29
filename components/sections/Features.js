import Link from 'next/link';
const Features = () => {
  const data = [
  {
      img: "feature-1.jpg",
      title:"Cost Optimization",
      description: "Neque porro quisqum est qui dolorem ipsum quia dolor. tellus est aliquet egetristique nisullam."
  },
  {
      img: "feature-2.jpg",
      title:"Reduced Transit Timing",
      description: "Neque porro quisqum est qui dolorem ipsum quia dolor. tellus est aliquet egetristique nisullam."
  },
  {
      img: "feature-3.jpg",
      title:"Warehouse Operation",
      description: "Neque porro quisqum est qui dolorem ipsum quia dolor. tellus est aliquet egetristique nisullam."
  }
];
    return (
        <>
        <section className="features-section pb-0">
          <div className="auto-container">
            <div className="row">
            {data.map((item, i) => (
              <div key={i} className="feature-block-two col-lg-4 col-md-6 wow fadeInUp">
                <div className="inner-box">
                  <figure className="image"><img src={`/images/resource/${item.img}`} alt=""/></figure>
                  <Link href="page-service-details" className="theme-btn btn-style-one step">{item.title}</Link>
                  <div className="overlay-content">
                    <div className="title-box">
                      <i className="icon flaticon-logistics-8"></i>
                      <h4 className="title">{item.title}</h4>
                    </div>
                    <div className="text">{item.description}</div>
                    <Link href="page-service-details" className="theme-btn btn-style-one read-more">Read More</Link>
                  </div>
                </div>
              </div>))}
            </div>
          </div>
        </section>
        </>
    );
};
export default Features
