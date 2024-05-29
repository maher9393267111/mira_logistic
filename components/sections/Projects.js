import Link from 'next/link';
const Projects = () => {
  const data = [
  {
      img: "project-1.jpg",
      title:"Special In Transport"
  },
  {
      img: "project-2.jpg",
      title:"Reduced Transit Timing"
  },
  {
      img: "project-3.jpg",
      title:"Warehouse Operation"
  },
  {
      img: "project-4.jpg",
      title:"Warehouse Operation"
  }
];
    return (
        <>
        <section className="projects-section pb-0">
          <div className="auto-container">
            <div className="sec-title text-center">
              <span className="sub-title">our Project</span>
              <h2>Explore our new recently <br/>completed projects.</h2>
            </div>
            <div className="outer-box">
              <div className="row">
              {data.map((item, i) => (
                <div key={i} className="project-block col-lg-3 col-md-6 wow fadeInUp">
                  <div className="inner-box">
                    <div className="image-box">
                      <figure className="image"><Link href="page-project-details"><img src={`/images/resource/${item.img}`} alt=""/></Link></figure>
                    </div>
                    <div className="content-box">
                      <Link href="page-project-details" className="icon"><i className="fa fa-long-arrow-alt-right"></i></Link>
                      <span className="cat">Logistics</span>
                      <h4 className="title"><Link href="page-project-details" title="">{item.title}</Link></h4>
                    </div>
                  </div>
                </div>))}

              </div>
            </div>
          </div>
        </section>
        </>
    );
};
export default Projects
