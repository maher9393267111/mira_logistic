"use client"
import Link from "next/link"
import urlFor from "../../../lib/urlFor";
import { useLanguageContext } from '../../../app/languageContext'

import { PortableText} from '@portabletext/react';
import { RichTextComponents } from '../../RichTextComponents';



const ProjectDetails = ({data}) => {


  const { language :lang } = useLanguageContext()

  const dir = lang === 'ar' && 'rtl'



  return (
    <>

  <section className="project-details">
    <div className="container">
      
      <div className="row">
        <div className="col-xl-12">
          <div className="project-details__top">
            <div className="project-details__img"> <img 
            // src="/images/resource/project-details.jpg"
            src={urlFor(data?.image)?.url()} 
            alt=""/> </div>
          </div>
        </div>
      </div>
      {/* <div className="row justify-content-center">
        <div className="col-xl-10">
          <div className="project-details__content-right">
            <div className="project-details__details-box pb-25">
              <div className="row">
                <div className="col-6 col-md-3">
                  <p className="project-details__client">Date</p>
                  <h4 className="project-details__name">10 January, 2023</h4>
                </div>
                <div className="col-6 col-md-3">
                  <p className="project-details__client">Client</p>
                  <h4 className="project-details__name">Kodesolution Ltd</h4>
                </div>
                <div className="col-6 col-md-3">
                  <p className="project-details__client">Website</p>
                  <h4 className="project-details__name">www.domain.com</h4>
                </div>
                <div className="col-6 col-md-3">
                  <p className="project-details__client">Location</p>
                  <h4 className="project-details__name">New York, USA</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <div className="project-details__content">
        <div dir={lang === 'ar' && 'rtl'} className="row  arabic">
          <div className="col-xl-12">
            <div className="project-details__content-left">
              <h3 className="mb-4 mt-5">

              {lang === 'en' ? data?.heading : lang === 'ar' ? data?.headingar : data?.headingtr}
              </h3>


              <div className=' mt-12  arabic !text-black'>
      <PortableText value={lang === 'en' ? data?.body : lang === 'ar' ? data?.bodyar : data?.bodytr} components={RichTextComponents} />
      </div>



              {/* <p className="">Lorem ipsum, dolor sit amet consectetur, adipisicing elit. Asperiores, repellat aliquid. Est corrupti officiis dignissimos deserunt sunt minima iusto quia saepe tempora consectetur dolor deleniti voluptatum et, eos vitae pariatur molestiae odit quos enim voluptas nobis ullam voluptatem cum iste. Dolore modi, animi optio, dignissimos delectus pariatur similique harum eos. </p>
              <p className="mb-5">Beyond more stoic this along goodness hey this this
                wow manatee mongoose one as since a far flustered impressive manifest Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum illo ea ad, nam quisquam optio vel tempora, minus placeat, ut nisi quam quos laboriosam eos quibusdam cum atque suscipit quod dignissimos magni doloribus facere eius soluta possimus. Officiis, autem similique sequi labore aliquid corporis illo omnis voluptate optio possimus doloremque, error reiciendis delectus ex tempore, architecto eaque, inventore nihil pariatur quibusdam facere reprehenderit? Doloribus deleniti sapiente, dicta, dolorem unde deserunt quisquam. Dolore consequuntur reiciendis corporis perspiciatis quam fuga magnam molestiae minima culpa ab beatae vel itaque cumque et adipisci autem nisi qui esse in, deserunt numquam hic? Et, eligendi, assumen daEst corrupti officiis dignissimos.</p>
 */}


                {/* <ul className="list-style-two mb-0">
                  <li><i className="fa fa-check-circle"></i> Lorem ipsum dolor amet consectetur adipisicing elit</li>
                  <li><i className="fa fa-check-circle"></i> Vitae pariatur molestiae odit quos enim</li>
                  <li><i className="fa fa-check-circle"></i> Beyond more stoic this along goodness hey this</li>
                  <li><i className="fa fa-check-circle"></i> Officiis autem similique sequi labore</li>
                </ul> */}
            </div>
          </div>
        </div>

      </div>

      {/* <div className="row">
        <div className="col-xl-12">
          <div className="project-details__pagination-box">
            <ul className="project-details__pagination list-unstyled clearfix">
              <li className="next">
                <div className="icon"> <Link href="#" aria-label="Previous"><i className="lnr lnr-icon-arrow-left"></i></Link> </div>
                <div className="content">Previous</div>
              </li>
              <li className="count"><Link href="#"></Link></li>
              <li className="count"><Link href="#"></Link></li>
              <li className="count"><Link href="#"></Link></li>
              <li className="count"><Link href="#"></Link></li>
              <li className="previous">
                <div className="content">Next</div>
                <div className="icon"> <Link href="#" aria-label="Previous"><i className="lnr lnr-icon-arrow-right"></i></Link> </div>
              </li>
            </ul>
          </div>
        </div>
      </div> */}



    </div>
  </section>
  


    </>
  );
};
export default ProjectDetails
