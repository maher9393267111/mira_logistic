"use client"
import Layout from "../../../components/layout/Layout"
import PageTitle from "../../../components/sections/PageTitle"
import NewsGrid from "../../../components/sections/innerpages/NewsGrid"
import { useLanguageContext } from "../../languageContext"

export default function NewsMainComp({news}) {



  const { language :lang } = useLanguageContext()

  const title =lang === 'en' ? "News" : lang === 'ar' ? "آخر الأخبار" : "Haberler"

  return (
    <>

    <Layout headerStyle={1} footerStyle={1}>
    <PageTitle pageName={title}/>
    <NewsGrid news={news} />

    </Layout>
    </>
    )
}