"use client"

import Layout from "../../../components/layout/Layout"
import PageTitle from "../../../components/sections/PageTitle"

import About from "../../../components/sections/innerpages/About"
import { useLanguageContext } from "../../languageContext"
// import Process from "@/components/sections/Process"
// import Services1 from "@/components/sections/Services1"
// import TeamGrid2 from "@/components/sections/innerpages/TeamGrid2"

export default function AboutMain({data}) {

    const { language :lang } = useLanguageContext()

    const dir = lang === 'ar' && 'rtl'
  
    console.log("ABOURT_____-"  ,data)

    const title =  lang === 'en' ? "AboutUs": lang === 'ar' ? "من نحن" : "Hakkimizda"


  return (
    <>

    <Layout headerStyle={1} footerStyle={1}>
    <PageTitle pageName={title} />
    
    <About data={data} lang={lang} />
    {/* <Process  addClass={"bg-light"}/>
    <Services1 />
    <TeamGrid2 /> */}

    </Layout>
    </>
    )
}