"use client"
import Layout from "../../components/layout/Layout"
import About1 from "../../components/sections/About1"
import Banner from "../../components/sections/Banner"
import CallToAction from "../../components/sections/CallToAction"
import Faq from "../../components/sections/Faq"
import Features from "../../components/sections/Features"
import Form from "../../components/sections/Form"
import News1 from "../../components/sections/News1"
import Process from "../../components/sections/Process"
import Services1 from "../../components/sections/Services1"
import Testimonial1 from "../../components/sections/Testimonial1"
export default function Home({services , faqs ,newsdata}) {

    return (
        <>
            <Layout headerStyle={1} footerStyle={1}>
                <Banner />

                <Services1 services={services} />

                <Faq faqs={faqs} />

                <News1  newsdata={newsdata} />

                <Features />
                <About1 />
              
                <Process />
                <CallToAction />
               
                <Testimonial1 />
                <Form />
                
            </Layout>
        </>
    )
}