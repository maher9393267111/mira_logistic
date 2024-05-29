"use client"
import Layout from "../../../components/layout/Layout"
import PageTitle from "../../../components/sections/PageTitle"
import ProjectGrid from "../../../components/sections/innerpages/ProjectGrid"
import { useLanguageContext } from "../../languageContext"

export default function Home({services}) {

  const { language :lang } = useLanguageContext()

  const dir = lang === 'ar' && 'rtl'

  const title =lang === 'en' ? "Our Services" : lang === 'ar' ? "خدماتنا" : "Hizmetlerimiz"


  return (
    <>

    <Layout headerStyle={1} footerStyle={1}>
    <PageTitle pageName={title} />
    <ProjectGrid services={services} />

    </Layout>
    </>
    )
}