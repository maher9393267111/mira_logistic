import Link from 'next/link';

const News1 = () => {  
  const data = [
  {
      img: "news-1.jpg",
      title:"We ensures you the best quality services",
      authorTitle: "Admin",
      text: "There are not many of passages of lorem ipsum available alteration in some form."
  },
  {
      img: "news-2.jpg",
      title:"We ensures you the best quality services",
      authorTitle: "Admin",
      text: "There are not many of passages of lorem ipsum available alteration in some form."
  },
  {
      img: "news-3.jpg",
      title:"We ensures you the best quality services",
      authorTitle: "Admin",
      text: "There are not many of passages of lorem ipsum available alteration in some form."
  }
];
    return (
        <>
        <section className="news-section">
          <div className="auto-container">
            <div className="sec-title text-center">
              <span className="sub-title">News & Updates</span>
              <h2>Latest news directly <br/> from the <span className="color1">blog</span></h2>
            </div>
        
            <div className="row">
            {data.map((item, i) => (
              <div key={i} className="news-block col-lg-4 col-md-6 wow fadeInUp">
                <div className="inner-box">
                  <div className="image-box">
                    <figure className="image"><a href="news-details.html"><img src={`/images/resource/${item.img}`} alt=""/></a></figure>
                    <span className="date">30 <span className="month">March</span></span>
                  </div>
                  <div className="lower-content">
                    <ul className="post-info">
                      <li><i className="fa fa-user-circle"></i>{item.authorTitle}</li>
                      <li><i className="fa fa-comments"></i> 2 Comments</li>
                    </ul>
                    <h4 className="title"><a href="news-details.html">{item.title}</a></h4>
                    <div className="text">{item.text}</div>
                  </div>
                </div>
              </div>))}
      
            </div>
          </div>
        </section>
        
        </>
    );
};

export default News1;