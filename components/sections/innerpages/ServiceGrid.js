import Link from "next/link";

const ServiceGrid = () => {
  return (
    <>
    
  <section className="services-section pt-90">
    <div className="auto-container">
      <div className="row">
        {/* Service Block */}
        <div className="service-block-home2 col-lg-4 col-sm-6 wow fadeInUp">
          <figure className="image">
            <Link href="page-service-details">
              <img className="img-1" src="/images/resource/service-1.jpg" alt=""/>
              <img className="img-2" src="/images/resource/service-1.jpg" alt=""/>
            </Link>
          </figure>
          <div className="inner-box ">
            <i className="icon flaticon-airplane-1"></i>
            <h4 className="title mt-0"><Link href="page-service-details">Air freight</Link></h4>
            <div className="text">Long established fact that a reader will be distracted content of a page when looking at its layout</div>
            <Link href="page-service-details" className="read-more">Read More</Link>
          </div>
        </div>
        {/* Service Block */}
        <div className="service-block-home2 col-lg-4 col-sm-6 wow fadeInUp" data-wow-delay="200ms">
          <figure className="image">
            <Link href="page-service-details">
              <img className="img-1" src="/images/resource/service-2.jpg" alt=""/>
              <img className="img-2" src="/images/resource/service-2.jpg" alt=""/>
            </Link>
          </figure>
          <div className="inner-box ">
            <i className="icon flaticon-cargo-boat"></i>
            <h4 className="title mt-0"><Link href="page-service-details">Sea freight</Link></h4>
            <div className="text">Long established fact that a reader will be distracted content of a page when looking at its layout</div>
            <Link href="page-service-details" className="read-more">Read More</Link>
          </div>
        </div>
        {/* Service Block */}
        <div className="service-block-home2 col-lg-4 col-sm-6 wow fadeInUp" data-wow-delay="300ms">
          <figure className="image">
            <Link href="page-service-details">
              <img className="img-1" src="/images/resource/service-3.jpg" alt=""/>
              <img className="img-2" src="/images/resource/service-3.jpg" alt=""/>
            </Link>
          </figure>
          <div className="inner-box ">
            <i className="icon flaticon-delivery-truck-1"></i>
            <h4 className="title mt-0"><Link href="page-service-details">Road service</Link></h4>
            <div className="text">Long established fact that a reader will be distracted content of a page when looking at its layout</div>
            <Link href="page-service-details" className="read-more">Read More</Link>
          </div>
        </div>
        {/* Service Block */}
        <div className="service-block-home2 col-lg-4 col-sm-6 wow fadeInUp" data-wow-delay="400ms">
          <figure className="image">
            <Link href="page-service-details">
              <img className="img-1" src="/images/resource/service-4.jpg" alt=""/>
              <img className="img-2" src="/images/resource/service-4.jpg" alt=""/>
            </Link>
          </figure>
          <div className="inner-box ">
            <i className="icon flaticon-shipment"></i>
            <h4 className="title mt-0"><Link href="page-service-details">Other solution</Link></h4>
            <div className="text">Long established fact that a reader will be distracted content of a page when looking at its layout</div>
            <Link href="page-service-details" className="read-more">Read More</Link>
          </div>
        </div>
        {/* Service Block */}
        <div className="service-block-home2 col-lg-4 col-sm-6 wow fadeInUp" data-wow-delay="500ms">
          <figure className="image">
            <Link href="page-service-details">
              <img className="img-1" src="/images/resource/service-1.jpg" alt=""/>
              <img className="img-2" src="/images/resource/service-1.jpg" alt=""/>
            </Link>
          </figure>
          <div className="inner-box ">
            <i className="icon flaticon-airplane-1"></i>
            <h4 className="title mt-0"><Link href="page-service-details">Air freight</Link></h4>
            <div className="text">Long established fact that a reader will be distracted content of a page when looking at its layout</div>
            <Link href="page-service-details" className="read-more">Read More</Link>
          </div>
        </div>
        {/* Service Block */}
        <div className="service-block-home2 col-lg-4 col-sm-6 wow fadeInUp" data-wow-delay="600ms">
          <figure className="image">
            <Link href="page-service-details">
              <img className="img-1" src="/images/resource/service-2.jpg" alt=""/>
              <img className="img-2" src="/images/resource/service-2.jpg" alt=""/>
            </Link>
          </figure>
          <div className="inner-box ">
            <i className="icon flaticon-cargo-boat"></i>
            <h4 className="title mt-0"><Link href="page-service-details">Sea freight</Link></h4>
            <div className="text">Long established fact that a reader will be distracted content of a page when looking at its layout</div>
            <Link href="page-service-details" className="read-more">Read More</Link>
          </div>
        </div>
      </div>
    </div>
  </section>

    </>
  );
};
export default ServiceGrid
