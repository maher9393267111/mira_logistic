import Link from "next/link"
import urlFor from "../../../lib/urlFor";
import { useLanguageContext } from '../../../app/languageContext'

const ProjectGrid = ({services}) => {

  const { language :lang } = useLanguageContext()

  const dir = lang === 'ar' && 'rtl'


  return (
    <>


  <section className="projects-section pb-90">
    <div className="auto-container">
      <div className="outer-box">
        <div className="row">


                  
            

          {/* Project Block */}

          {services?.map((item, index) => {
                  
                  return (
          <div key={index} className="project-block arabic col-lg-3 col-md-6 wow fadeInUp">
            <div className="inner-box">
              <div className="image-box">
                <figure className="image"><Link   href={`/service/${item?.slug?.current}`}><img 
                   src={urlFor(item?.image)?.url()} 
                // src="/images/resource/project-1.jpg"
                 alt=""/></Link></figure>
              </div>
              <div className="content-box">
                <Link href={`/service/${item?.slug?.current}`} className="icon"><i className="fa fa-long-arrow-alt-right"></i></Link>
                {/* <span className="cat">Logistics</span> */}
                <h4 className="title"><Link   href={`/service/${item?.slug?.current}`} title="">
           
                  
                  {lang === 'en' ? item?.heading : lang === 'ar' ? item?.headingar : item?.headingtr}
                  
                  </Link></h4>
              </div>
            </div>
          </div>

                  )})}
                

      
        </div>
      </div>
    </div>
  </section>
       
    </>
  );
};
export default ProjectGrid
