import Link from "next/link"
import { useLanguageContext } from "../../../app/languageContext";
import urlFor from "../../../lib/urlFor";

const NewsGrid = ({news}) => {

  const { language :lang } = useLanguageContext()

  const dir = lang === 'ar' && 'rtl'

  return (
    <>

    <section className="news-section">
      <div className="auto-container">
        <div className="row">
          {/* News Block */}





          {news?.map((item, index) => {
                  
                  return (

          <div key={index} className="news-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp">
            <div className="inner-box">
              <div className="image-box">
                <figure className="image"><Link href="news-details"><img src="/images/resource/news-1.jpg" alt=""/></Link></figure>
                <span className="date">30 <span className="month">March</span></span>
              </div>
              <div dir={lang === 'ar' && 'rtl'} className="lower-content">
                <ul  className="post-info">
                  <li><i className="fa fa-user-circle arabic"></i>Admin</li>
                  {/* <li><i className="fa fa-comments"></i> 2 Comments</li> */}
                </ul>
                <h4 className="title arabic"><Link  href={`/news/${item?.slug?.current}`}>
                {lang === 'en' ? item?.heading : lang === 'ar' ? item?.headingar : item?.headingtr}
                  </Link></h4>
                {/* <div className="text">There are not many of passages of lorem ipsum available alteration in some form.</div> */}
              </div>
            </div>
          </div>


                  )})}

      
        </div>
      </div>
    </section>
       
    </>
  );
};
export default NewsGrid
