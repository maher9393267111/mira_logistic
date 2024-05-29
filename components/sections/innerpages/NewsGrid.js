import Link from "next/link"
const NewsGrid = () => {
  return (
    <>

    <section className="news-section">
      <div className="auto-container">
        <div className="row">
          {/* News Block */}
          <div className="news-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp">
            <div className="inner-box">
              <div className="image-box">
                <figure className="image"><Link href="news-details"><img src="/images/resource/news-1.jpg" alt=""/></Link></figure>
                <span className="date">30 <span className="month">March</span></span>
              </div>
              <div className="lower-content">
                <ul className="post-info">
                  <li><i className="fa fa-user-circle"></i>Admin</li>
                  <li><i className="fa fa-comments"></i> 2 Comments</li>
                </ul>
                <h4 className="title"><Link href="news-details">We ensures you the best quality services</Link></h4>
                <div className="text">There are not many of passages of lorem ipsum available alteration in some form.</div>
              </div>
            </div>
          </div>
          {/* News Block */}
          <div className="news-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="200ms">
            <div className="inner-box">
              <div className="image-box">
                <figure className="image"><Link href="news-details"><img src="/images/resource/news-2.jpg" alt=""/></Link></figure>
                <span className="date">30 <span className="month">March</span></span>
              </div>
              <div className="lower-content">
                <ul className="post-info">
                  <li><i className="fa fa-user-circle"></i>Admin</li>
                  <li><i className="fa fa-comments"></i> 2 Comments</li>
                </ul>
                <h4 className="title"><Link href="news-details">We ensures you the best quality services</Link></h4>
                <div className="text">There are not many of passages of lorem ipsum available alteration in some form.</div>
              </div>
            </div>
          </div>
          {/* News Block */}
          <div className="news-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="300ms">
            <div className="inner-box">
              <div className="image-box">
                <figure className="image"><Link href="news-details"><img src="/images/resource/news-3.jpg" alt=""/></Link></figure>
                <span className="date">30 <span className="month">March</span></span>
              </div>
              <div className="lower-content">
                <ul className="post-info">
                  <li><i className="fa fa-user-circle"></i>Admin</li>
                  <li><i className="fa fa-comments"></i> 2 Comments</li>
                </ul>
                <h4 className="title"><Link href="news-details">We ensures you the best quality services</Link></h4>
                <div className="text">There are not many of passages of lorem ipsum available alteration in some form.</div>
              </div>
            </div>
          </div>
          {/* News Block */}
          <div className="news-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="400ms">
            <div className="inner-box">
              <div className="image-box">
                <figure className="image"><Link href="news-details"><img src="/images/resource/news-3.jpg" alt=""/></Link></figure>
                <span className="date">30 <span className="month">March</span></span>
              </div>
              <div className="lower-content">
                <ul className="post-info">
                  <li><i className="fa fa-user-circle"></i>Admin</li>
                  <li><i className="fa fa-comments"></i> 2 Comments</li>
                </ul>
                <h4 className="title"><Link href="news-details">We ensures you the best quality services</Link></h4>
                <div className="text">There are not many of passages of lorem ipsum available alteration in some form.</div>
              </div>
            </div>
          </div>
          {/* News Block */}
          <div className="news-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="500ms">
            <div className="inner-box">
              <div className="image-box">
                <figure className="image"><Link href="news-details"><img src="/images/resource/news-1.jpg" alt=""/></Link></figure>
                <span className="date">30 <span className="month">March</span></span>
              </div>
              <div className="lower-content">
                <ul className="post-info">
                  <li><i className="fa fa-user-circle"></i>Admin</li>
                  <li><i className="fa fa-comments"></i> 2 Comments</li>
                </ul>
                <h4 className="title"><Link href="news-details">We ensures you the best quality services</Link></h4>
                <div className="text">There are not many of passages of lorem ipsum available alteration in some form.</div>
              </div>
            </div>
          </div>
          {/* News Block */}
          <div className="news-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="600ms">
            <div className="inner-box">
              <div className="image-box">
                <figure className="image"><Link href="news-details"><img src="/images/resource/news-2.jpg" alt=""/></Link></figure>
                <span className="date">30 <span className="month">March</span></span>
              </div>
              <div className="lower-content">
                <ul className="post-info">
                  <li><i className="fa fa-user-circle"></i>Admin</li>
                  <li><i className="fa fa-comments"></i> 2 Comments</li>
                </ul>
                <h4 className="title"><Link href="news-details">We ensures you the best quality services</Link></h4>
                <div className="text">There are not many of passages of lorem ipsum available alteration in some form.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
       
    </>
  );
};
export default NewsGrid
