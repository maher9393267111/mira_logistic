import Link from "next/link"
import { useLanguageContext } from "../../app/languageContext"

export default function Footer1() {


    const { language :lang } = useLanguageContext()

    const dir = lang === 'ar' && 'rtl'
  

    const social =  lang === 'Social Links' ? "": lang === 'ar' ? "روابط التواصل الاجتماعي" : "Social Links"

    return (
        <>
        <footer className="main-footer">
            <div className="bg bg-pattern-7"></div>
            <div className="auto-container">
                    <div className="footer-upper">
                        {/* <div className="logo-box"><img src="/images/logo-2.png" alt=""/></div> */}
                <ul className="contact-info">
                <li>
                    <i className="icon lnr-icon-smartphone"></i>
                    <span className="title">Phone:</span>
                    <div className="text"><a target="_blank"     rel="noopener noreferrer" href="tel:+0123456789">+905433053212</a></div>
                </li>
                <li>
                    <i className="icon lnr-icon-location"></i>
                    <span className="title">Email:</span>
                    <div className="text"><a target="_blank"     rel="noopener noreferrer" href="mailto:info@elmiralojstik.com">info@elmiralojstik.com</a></div>
                </li>


             


                <li>
                    <i className="icon lnr-icon-map-marker"></i>
                    <span className="title">Address:</span>
                    <div className="text">Istanbul</div>
                </li>
                </ul>
                    </div>
            </div>
                {/* Widgets Section */}
                <div className="widgets-section">
                <div className="auto-container">
                    <div className="row">
                    
                    {/* <div className="footer-column col-xl-6 col-lg-8 col-md-12 mb-0">
                        <div className="row">
                        <div className="footer-widget col-md-4">
                            <h4 className="widget-title">Links</h4>
                            <ul className="user-links">
                            <li><Link href="#">About</Link></li>
                            <li><Link href="#">Meet Team</Link></li>
                            <li><Link href="#">News & Media</Link></li>
                            <li><Link href="#">Our Projects</Link></li>
                            <li><Link href="#">Contact</Link></li>
                            </ul>
                        </div>
                        <div className="footer-widget col-md-4">
                            <h4 className="widget-title">Services</h4>
                            <ul className="user-links">
                            <li><Link href="#">Sea Freight</Link></li>
                            <li><Link href="#">Road Transport</Link></li>
                            <li><Link href="#">Railway Logistics</Link></li>
                            <li><Link href="#">Air Flight</Link></li>
                            <li><Link href="#">Secure Shopping</Link></li>
                            </ul>
                        </div>
                        <div className="footer-widget col-md-4">
                            <h4 className="widget-title">Services</h4>
                            <ul className="user-links">
                            <li><Link href="#">Ocean Freight</Link></li>
                            <li><Link href="#">Railway Freight</Link></li>
                            <li><Link href="#">Warehousing</Link></li>
                            <li><Link href="#">Distribution</Link></li>
                            <li><Link href="#">Transparent Pricing</Link></li>
                            </ul>
                        </div>
                        </div>
                    </div> */}



                    {/* <div className="footer-column col-xl-3 col-lg-4 col-md-6 col-sm-8">
                        <div className="footer-widget gallery-widget">
                        <h4 className="widget-title">Gallery</h4>
                        <div className="widget-content">
                            <div className="outer clearfix">
                            <figure className="image"><Link href="#"><img src="/images/resource/project-thumb-1.jpg" alt=""/></Link></figure>
                            <figure className="image"><Link href="#"><img src="/images/resource/project-thumb-2.jpg" alt=""/></Link></figure>
                            <figure className="image"><Link href="#"><img src="/images/resource/project-thumb-3.jpg" alt=""/></Link></figure>
                            <figure className="image"><Link href="#"><img src="/images/resource/project-thumb-4.jpg" alt=""/></Link></figure>
                            <figure className="image"><Link href="#"><img src="/images/resource/project-thumb-5.jpg" alt=""/></Link></figure>
                            <figure className="image"><Link href="#"><img src="/images/resource/project-thumb-6.jpg" alt=""/></Link></figure>
                            </div>
                        </div>
                        </div>
                    </div> */}

                    <div className="footer-column col-xl-3 col-lg-12 col-md-6">
                        <div className="footer-widget">
                        <h4 className="widget-title arabic">

{social}


                        </h4>
                        {/* <div className="subscribe-form">
                            <div className="text">Signup for our latest news & articles.</div>
                            <form method="post" action="#">
                            <div className="form-group">
                                <input type="email" name="email" className="email" defaultValue="" placeholder="Email Address" required=""/>
                                <button type="button" className="theme-btn"><i className="fa fa-paper-plane"></i></button>
                            </div>
                            </form>
                        </div> */}
                        <ul className="social-icon-two">
                            <li><a target="_blank"     rel="noopener noreferrer" href="#"><i className="fab fa-twitter"></i></a></li>
                            <li><a target="_blank"     rel="noopener noreferrer"><i className="fab fa-facebook"></i></a></li>
                            <li><a target="_blank"     rel="noopener noreferrer" ><i className="fab fa-pinterest"></i></a></li>
                            <li><a target="_blank"     rel="noopener noreferrer" ><i className="fab fa-instagram"></i></a></li>

                            <li><a target="_blank"     rel="noopener noreferrer" ><i className="fab fa-whatsapp"></i></a></li>
                        </ul>
                        </div>
                    </div>
                    </div>
                </div>
                </div>

                    {/*  Footer Bottom */}
                <div className="footer-bottom">
                <div className="auto-container">
                    <div className="inner-container">
                    <div className="copyright-text">
                        {/* &copy; Copyright reserved by <Link href="/">kodesolution.com</Link> */}
                        
                        </div>
                    </div>
                </div>
                </div>
    
            </footer>

        </>
    )
}
