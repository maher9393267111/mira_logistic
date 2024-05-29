import Link from "next/link";

const TeamGrid2 = () => {
  return (
    <>

  <section className="team-section">
    <div className="icon-plane-1 bounce-y"></div>
    <div className="auto-container">
      <div className="sec-title text-center">
        <span className="sub-title">Our Team</span>
        <h2>Few reasons to choose <br/>our transport <span className="color1">company</span></h2>
      </div>
      <div className="row">
        {/* Team block */}
        <div className="team-block col-lg-4 col-sm-6 wow fadeInUp">
          <div className="inner-box">
            <div className="image-box">
              <figure className="image"><Link href="page-team-details"><img src="/images/resource/team1-1.jpg" alt="Image"/></Link></figure>
              <ul className="social-links">
                <li><Link href="#"><i className="icon fab fa-facebook-f"></i></Link></li>
                <li><Link href="#"><i className="icon fab fa-twitter"></i></Link></li>
                <li><Link href="#"><i className="icon fab fa-pinterest-p"></i></Link></li>
              </ul>
              <span className="share-icon fa fa-share-alt"></span>
            </div>
            <div className="info-box">
              <span className="designation">Company Founder</span>
              <h4 className="name"><Link href="page-team-details">Alaxis D. Dowson</Link></h4>
            </div>
          </div>
        </div>
        {/* Team block */}
        <div className="team-block col-lg-4 col-sm-6 wow fadeInUp" data-wow-delay="100ms">
          <div className="inner-box">
            <div className="image-box">
              <figure className="image"><Link href="page-team-details"><img src="/images/resource/team1-2.jpg" alt="Image"/></Link></figure>
              <ul className="social-links">
                <li><Link href="#"><i className="icon fab fa-facebook-f"></i></Link></li>
                <li><Link href="#"><i className="icon fab fa-twitter"></i></Link></li>
                <li><Link href="#"><i className="icon fab fa-pinterest-p"></i></Link></li>
              </ul>
              <span className="share-icon fa fa-share-alt"></span>
            </div>
            <div className="info-box">
              <span className="designation">Company Founder</span>
              <h4 className="name"><Link href="page-team-details">thomas Willims</Link></h4>
            </div>
          </div>
        </div>
        {/* Team block */}
        <div className="team-block col-lg-4 col-sm-6 wow fadeInUp" data-wow-delay="200ms">
          <div className="inner-box">
            <div className="image-box">
              <figure className="image"><Link href="page-team-details"><img src="/images/resource/team1-3.jpg" alt="Image"/></Link></figure>
              <ul className="social-links">
                <li><Link href="#"><i className="icon fab fa-facebook-f"></i></Link></li>
                <li><Link href="#"><i className="icon fab fa-twitter"></i></Link></li>
                <li><Link href="#"><i className="icon fab fa-pinterest-p"></i></Link></li>
              </ul>
              <span className="share-icon fa fa-share-alt"></span>
            </div>
            <div className="info-box">
              <span className="designation">Company Founder</span>
              <h4 className="name"><Link href="page-team-details">Manio Roman</Link></h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

    </>
  );
};
export default TeamGrid2
