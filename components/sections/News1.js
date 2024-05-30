import Link from 'next/link';
import urlFor from '../../lib/urlFor';
import { useLanguageContext } from '../../app/languageContext';
const News1 = ({newsdata}) => {  

  const { language :lang } = useLanguageContext()

  const dir = lang === 'ar' && 'rtl'
  const headTitle =lang === 'en' ? "Latest news"  : lang === 'ar' ? "اخر الاخبار" : "Son haberler"



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
              {/* <span className="sub-title">News & Updates {newsdata?.length}</span> */}
              <h2 className=' arabic'>
                
                
{headTitle}


              </h2>
            </div>
        
            <div className="row">
            {newsdata?.map((item, i) => (
              <div key={i} className="news-block col-lg-4 col-md-6 wow fadeInUp">
                <div className="inner-box">
                  <div className="image-box">
                    <figure className="image"><Link href={`/news/${item?.slug?.current}`} ><img 

src={urlFor(item?.image)?.url()} 
                    // src={`/images/resource/${item.img}`}
                    
                    alt=""/></Link></figure>
                    <span className="date">30 <span className="month">March</span></span>
                  </div>
                  <div dir={lang === 'ar' && 'rtl'} className="lower-content">
                    <ul className="post-info">
                      {/* <li><i className="fa fa-user-circle"></i>Admin</li> */}
                      {/* <li><i className="fa fa-comments"></i> 2 Comments</li> */}
                    </ul>

                    <h4 className="title arabic mt-4"><Link href={`/news/${item?.slug?.current}`}>
                      {lang === 'en' ? item?.heading : lang === 'ar' ? item?.headingar : item?.headingtr}</Link></h4>
                    {/* <div className="text">{item.text}</div> */}
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