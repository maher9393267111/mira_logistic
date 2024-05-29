"use client"
import Layout from "../../../../components/layout/Layout"
import PageTitle from "../../../../components/sections/PageTitle"
import ProjectDetails from "../../../../components/sections/innerpages/ProjectDetails"
import { useLanguageContext } from "../../../languageContext"

export default function SingleNewsMain({data}) {

  const { language :lang } = useLanguageContext()

  const dir = lang === 'ar' && 'rtl'

  const title =lang === 'en' ? data?.heading : lang === 'ar' ? data?.headingar : data?.headingtr

  return (
    <>

    <Layout headerStyle={1} footerStyle={1}>
    <PageTitle pageName={title} />
    <ProjectDetails data={data} />

    </Layout>
    </>
    )
}