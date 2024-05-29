import { groq } from "next-sanity";
import { client } from "../../../lib/sanity.client";
import MainService from "./mainServices";

export const revalidate = 30;

const query = groq`
  *[_type=='service'] {
    ...,
   
  } | order(_createdAt desc)
`;

const contactquery = groq`
  *[_type=='contact'] {
    ...,
    
    
  } | order(_createdAt desc)
`;



export const metadata = {
  icons: {
    icon: "/smawilogo.png",
  },
};

const Services = async () => {
  const services = await client.fetch(query);
 // const contact = await client.fetch(contactquery);

  console.log(services)

  return (
    <>
      <MainService  services={services} />
    </>
  );
};

export default Services;
