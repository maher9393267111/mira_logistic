import Link from "next/link";

const PricingTable = () => {
  return (
    <>
    <section className="pricing-section">
      <div className="auto-container">
        <div className="row">
          {/* Pricing Block */}
          <div className="pricing-block col-lg-4 col-md-6 wow fadeInUp">
            <div className="inner-box" style={{ backgroundImage: 'url(images/resource/bg-pricing.jpg)' }}>
              <figure className="image"><Link href="#"><img src="/images/resource/pricing1-1.png" alt="Image"/></Link></figure>
              <h3 className="title"><Link href="#">Sea Freight</Link></h3>
              <div className="price">$1250 <small>/ 500KG</small></div>
              <ul className="list-style">
                <li><span className="icon icon-arrow"></span>Delivery in 2-3 Working Days</li>
                <li><span className="icon icon-arrow"></span>Customs brokerage</li>
                <li><span className="icon icon-arrow"></span>Pickup and delivery</li>
                <li><span className="icon icon-arrow"></span>Insurance</li>
                <li><span className="icon icon-arrow"></span>Customs security</li>
              </ul>
              <div className="btn-box">
                <Link href="#" className="theme-btn btn-style-one"><span className="btn-title">Purchase Now</span></Link>
              </div>
            </div>
          </div>
          {/* Pricing Block */}
          <div className="pricing-block col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="300ms">
            <div className="inner-box" style={{ backgroundImage: 'url(images/resource/bg-pricing.jpg)' }}>
              <figure className="image"><Link href="#"><img src="/images/resource/pricing1-2.png" alt="Image"/></Link></figure>
              <h3 className="title"><Link href="#">Road Cargo</Link></h3>
              <div className="price">$150 <small>/ 30KG</small></div>
              <ul className="list-style">
                <li><span className="icon icon-arrow"></span>Delivery in 2-3 Working Days</li>
                <li><span className="icon icon-arrow"></span>Customs brokerage</li>
                <li><span className="icon icon-arrow"></span>Pickup and delivery</li>
                <li><span className="icon icon-arrow"></span>Insurance</li>
                <li><span className="icon icon-arrow"></span>Customs security</li>
              </ul>
              <div className="btn-box">
                <Link href="#" className="theme-btn btn-style-one"><span className="btn-title">Purchase Now</span></Link>
              </div>
            </div>
          </div>
          {/* Pricing Block */}
          <div className="pricing-block col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="600ms">
            <div className="inner-box" style={{ backgroundImage: 'url(images/resource/bg-pricing.jpg)' }}>
              <figure className="image"><Link href="#"><img src="/images/resource/pricing1-3.png" alt="Image"/></Link></figure>
              <h3 className="title"><Link href="#">Ship Cargo</Link></h3>
              <div className="price">$750 <small>/ 148KG</small></div>
              <ul className="list-style">
                <li><span className="icon icon-arrow"></span>Delivery in 2-3 Working Days</li>
                <li><span className="icon icon-arrow"></span>Customs brokerage</li>
                <li><span className="icon icon-arrow"></span>Pickup and delivery</li>
                <li><span className="icon icon-arrow"></span>Insurance</li>
                <li><span className="icon icon-arrow"></span>Customs security</li>
              </ul>
              <div className="btn-box">
                <Link href="#" className="theme-btn btn-style-one"><span className="btn-title">Purchase Now</span></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};
export default PricingTable
