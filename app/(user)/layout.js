"use client";



import "../../styles/globals.css";


import "swiper/css";
import "swiper/css/navigation";

import '../../public/css/bootstrap.min.css';
import '../../public/css/style.css';
import '../../public/css/responsive.css';
import { useEffect, useState } from "react";




import LayoutComp from '../layoutMain'


export default function RootLayout({ children }) {
  

  // const [loading, setLoading] = useState(false);
  // useEffect(() => {
  //     setLoading(true);
  //     setTimeout(() => {
  //         setLoading(false);
  //     }, 2000);
  // }, []);



  return (

    



    <LayoutComp
 
  >
    {children}
  </LayoutComp>




  );
}
