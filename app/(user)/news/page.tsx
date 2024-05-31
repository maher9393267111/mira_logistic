import { groq } from "next-sanity";
import { client } from "../../../lib/sanity.client";
import MainNews from "./newsMain";

export const revalidate = 30;

const query = groq`
  *[_type=='post'] {
    ...,
   
  } | order(_createdAt desc)
`;

const contactquery = groq`
  *[_type=='contact'] {
    ...,
    
    
  } | order(_createdAt desc)
`;



export const metadata = {
  title: "Mira Lojistik",
  icons: {
    icon: "/logo-3.jpg",
  },
};


const Services = async () => {
  const services = await client.fetch(query);
 // const contact = await client.fetch(contactquery);

  console.log(services)

  return (
    <>
      <MainNews  news={services} />
    </>
  );
};

export default Services;
