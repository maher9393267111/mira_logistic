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
export default function Home() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={1}>
                <Banner />
                <Features />
                <About1 />
                <Services1 />
                <Process />
                <CallToAction />
                <Faq />
                <Testimonial1 />
                <Form />
                <News1 />
            </Layout>
        </>
    )
}