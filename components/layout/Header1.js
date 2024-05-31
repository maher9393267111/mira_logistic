import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import TopNav from "../../app/topNav";

import { useRouter } from "next/router";
import { useEffect } from "react";
import { useLanguageContext } from "../../app/languageContext";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isClinicalDropdownOpen, setIsClinicalDropdownOpen] = useState(false);
  const [isfixed ,setisFixed] = useState(true)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
  const toggleClose = () => setIsMenuOpen(true);

  const closeAllMenus = () => {
    setIsMenuOpen(false);
    setIsDropdownOpen(false);
    setIsClinicalDropdownOpen(false);
  };

  // const [menu, setMenu] = useState(false);
  // const [dropdownOpen, setDropdownOpen] = useState(false);

  // const dropdownToggler = (e) => {
  //   let menu = e.target.nextElementSibling;
  //   menu.classList.toggle("hidden");
  // };
  const navbarRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector(`.info-nav`);
      if (navbar) {
        navbar.classList.toggle("fixed", window.scrollY > 600);
        setisFixed(true)
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      setisFixed(false)
    };
  }, []);





  const { language :lang } = useLanguageContext()

  const dir = lang === 'ar' && 'rtl'
 


  const hometitle = lang === 'en' ? "Home" : lang === 'ar' ? "الرئيسية" : "Anasayfa"
  const servicestitle = lang === 'en' ? "Services" : lang === 'ar' ? "الخدمات" : "Hizmetlerimiz"
  const newstitle = lang === 'en' ? "News" : lang === 'ar' ? "الاخبار" : "Haberler"
  const contacttitle = lang === 'en' ? "Contact" : lang === 'ar' ? "التواصل" : "ilitesim"
  const abouttitle = lang === 'en' ? "AboutUs" : lang === 'ar' ? "من نحن" : "hakkimizda"


  return (
    <div>
      {/* headewr-- */}

      {/* --end header */}

      <nav
        ref={navbarRef}
        dir=""
        className={` ${isfixed && '!fixed right-0 left-0'} info-nav z-[100]  bg-white  shadow-2xl bg-yelow-100 px-3 arabic py-1 bg-opacity-80 md:bg-opacity-80 sticky top-0 z-50   text-black md:bg-primar font-primary mx-0 mt-0  bg-no-repeat bg-top md:bg-cover md:bg-top`}
      >
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
          <div className="flex gap-3 items-center">
            <Link className="flex flex-row shimmer !shadow-2xl" href="/">
              <img
                className=" object-cover  !w-[90px] !h-[70px]    rounded-md"
                src={"/logo-3.jpg"}
                // src="https://ik.imagekit.io/m1akscp5q/logo%20bac%20horizontal%20hitam%201.png?updatedAt=1705581337965"
                width={52}
                height={52}
                alt="logo bac"
              />
            </Link>
          </div>

          {/* <div className="md:hidden arabic shimmer text-3xl ">

TEDILI MERMER
</div> */}

          <button
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden  focus:outline-none focus:ring-2"
            aria-controls="navbar-dropdown"
            aria-expanded={isMenuOpen}
            onClick={toggleMenu}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div
            className={`w-full md:block md:w-auto ${
              isMenuOpen ? "" : "hidden"
            }`}
            id="navbar-dropdown"
          >
            <ul className="flex text-xl md:text-xl flex-col arabic font-semibold font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:!border-0 md:bg-transparent  ">
              <li onClick={toggleClose}>
                <Link
                  href="/"
                  className="block md:hover:text-secondary py-2 px-3 hover:bg-gay-100 !text-primary rounded hover:md:bg-transparent md:text-black md:p-0   "
                ></Link>
              </li>

              <li onClick={toggleClose}>
                <Link
                  href="/"
                  className="block md:hover:text-secondary py-2 px-3 hover:bg-gay-100 !text-primary rounded hover:md:bg-transparent md:text-black md:p-0   "
                >
                  {hometitle}
                </Link>
              </li>


              <li onClick={toggleClose}>
                <Link
                  href="/about"
                  className="block md:hover:text-secondary py-2 px-3 hover:bg-gay-100 !text-primary rounded hover:md:bg-transparent md:text-black md:p-0   "
                >
                  {abouttitle}
                </Link>
              </li>


              <li onClick={toggleClose}>
                <Link
                  href="/service"
                  className="block md:hover:text-secondary py-2 px-3 hover:bg-gay-100 !text-primary rounded hover:md:bg-transparent md:text-black md:p-0   "
                >
                  {servicestitle}
                </Link>
              </li>


              <li onClick={toggleClose}>
                <Link
                  href="/news"
                  className="block md:hover:text-secondary py-2 px-3 hover:bg-gay-100 !text-primary rounded hover:md:bg-transparent md:text-black md:p-0   "
                >
                  {newstitle}
                </Link>
              </li>



              <li onClick={toggleClose}>
                <Link
                  href="/contact"
                  className="block md:hover:text-secondary py-2 px-3 hover:bg-gay-100 !text-primary rounded hover:md:bg-transparent md:text-black md:p-0   "
                >
                  {contacttitle}
                </Link>
              </li>






              {/* ... other navigation items ... */}

              <li>
                <TopNav />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

// import Link from "next/link"
// import Menu from "./Menu"
// import MobileMenu from "./MobileMenu"
// import TopNav from '../../app/topNav'
// export default function Header1({ scroll, isMobileMenu, handleMobileMenu, isSearch, handleSearch, }) {
//   return (
//   <>
//   112
//   <header className={`main-header header-style-two ${isSearch ? "moblie-search-active" : ""}`}>
//     {/* Header Top */}
//     <div className="header-top">
//       <div className="inner-container">

//         <div className="top-left">

//           <ul className="list-style-one">
//             <li><i className="fa fa-envelope"></i> <Link href="mailto:needhelp@company.com">needhelp@company.combb</Link></li>
//             <li><i className="fa fa-map-marker"></i> 88 Broklyn Golden Street. New York</li>
//           </ul>
//         </div>

//         <div className="top-right">
//           <ul className="useful-links">
//             <li><Link href="#">Calle</Link></li>
//             <li><Link href="#">Support</Link></li>
//             <li><Link href="#">Contact</Link></li>
//           </ul>
//         </div>
//       </div>

//       <div className="outer-box">
//         <ul className="social-icon-one">
//           <li><Link href="#"><span className="fab fa-twitter"></span></Link></li>
//           <li><Link href="#"><span className="fab fa-facebook-square"></span></Link></li>
//           <li><Link href="#"><span className="fab fa-pinterest-p"></span></Link></li>
//           <li><Link href="#"><span className="fab fa-instagram"></span></Link></li>
//         </ul>
//       </div>
//     </div>
//     {/* Header lower */}
//     <div className="header-lower">

//       <div className="main-box">
//         <div className="logo-box">
//           <div className="logo"><Link href="/"><img src="/images/logo.png" alt="Logo" title="Transfort"/></Link></div>
//         </div>

//         <div className="nav-outer">
//           <nav className="nav main-menu">
//             <Menu />
//           </nav>

//           <div className="outer-box">
//             {/* <div className="ui-btn-outer">
//               <button className="ui-btn ui-btn search-btn" onClick={handleSearch}>
//                 <span className="icon lnr lnr-icon-search"></span>
//               </button>
//               <Link href="#" className="ui-btn"><i className="lnr-icon-shopping-cart"></i></Link>
//             </div> */}

//             {/* <Link href="tel:+92(8800)9806" className="info-btn">
//             <i className="icon fa fa-phone"></i>
//             <small>Call AnytimeW</small><br/> +92 (8800) 9806cv
//           </Link> */}

//           <TopNav/>

//           {/* <Link href="page-contact" className="theme-btn btn-style-one"><span className="btn-title">
//             get solution

//             </span></Link> */}

//           <div className="mobile-nav-toggler" onClick={handleMobileMenu}><span className="icon lnr-icon-bars"></span></div>
//         </div>
//       </div>
//     </div>
//   </div>
//   {/* Mobile Menu  */}
//   <div className="mobile-menu">
//     <div className="menu-backdrop" onClick={handleMobileMenu} />

//     <nav className="menu-box">
//       <div className="upper-box">
//         <div className="nav-logo"><Link href="/"><img src="/images/logo-2.png" alt=""  /></Link></div>
//         <div className="close-btn" onClick={handleMobileMenu}><i className="icon fa fa-times" /></div>
//       </div>
//       <MobileMenu />
//       <ul className="contact-list-one light">
//         <li>
//           {/* Contact Info Box */}
//           <div className="contact-info-box">
//             <i className="icon lnr-icon-phone-handset" />
//             <span className="title">Call Now</span>
//             <div className="text">
//               <Link href="/tel:+92880098670">+92 (8800) - 98670</Link>
//             </div>
//           </div>
//         </li>
//         <li>
//           {/* Contact Info Box */}
//           <div className="contact-info-box">
//             <span className="icon lnr-icon-envelope1" />
//             <span className="title">Send Email</span>
//             <div className="text">
//               <Link href="/mailto:help@company.com">help@company.com12</Link>
//             </div>
//           </div>
//         </li>
//         <li>
//           {/* Contact Info Box */}
//           <div className="contact-info-box">
//             <span className="icon lnr-icon-clock" />
//             <span className="title">Send Emailss</span>
//             <div className="text">
//               Mon - Sat 8:00 - 6:30, Sunday - CLOSED
//             </div>
//           </div>
//         </li>
//       </ul>
//       <ul className="social-links">
//         <li><Link href="/#"><i className="fab fa-twitter" /></Link></li>
//         <li><Link href="/#"><i className="fab fa-facebook-f" /></Link></li>
//         <li><Link href="/#"><i className="fab fa-pinterest" /></Link></li>
//         <li><Link href="/#"><i className="fab fa-instagram" /></Link></li>
//       </ul>
//     </nav>
//   </div>{/* End Mobile Menu */}
//   {/* Header Search */}
//   <div className="search-popup">
//     {/* <span className="search-back-drop" onClick={handleSearch} />
//     <button className="close-search" onClick={handleSearch}><span className="fa fa-times" /></button> */}
//     <div className="search-inner">
//     <TopNav/>
//       {/* <form method="post" action="/">
//         <div className="form-group">
//           <input type="search" name="search-field" placeholder="Search..." required />
//           <button type="submit"><i className="fa fa-search" /></button>
//         </div>
//       </form> */}
//     </div>
//   </div>
//   {/* End Header Search */}
//   {/* Sticky Header  */}
//   <div className={`sticky-header ${scroll ? "fixed-header animated slideInDown" : ""}`}>
//     <div className="auto-container">
//       <div className="inner-container">
//         {/*Logo*/}
//         <div className="logo">
//           <Link href="/" ><img src="/images/logo.png" alt=""  /></Link>
//         </div>
//         {/*Right Col*/}
//         <div className="nav-outer">
//           {/* Main Menu */}
//           <nav className="main-menu">
//             <div className="navbar-collapse show collapse clearfix">
//               <Menu />
//             </div>
//           </nav>{/* Main Menu End*/}
//           {/*Mobile Navigation Toggler*/}
//           <div className="mobile-nav-toggler" onClick={handleMobileMenu}><span className="icon lnr-icon-bars" /></div>
//         </div>
//       </div>
//     </div>
//   </div>{/* End Sticky Menu */}
// </header>

// </>
// )
// }
