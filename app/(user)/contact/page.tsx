import { groq } from "next-sanity";
import { client } from "../../../lib/sanity.client";
import MainContact from "./mainContact";

export const revalidate = 30;

const query = groq`
  *[_type=='contact'] {
    ...,
    
    
  } | order(_createdAt desc)
`;



export const metadata = {
  title: " نموذج شركة شحن",
  icons: {
    icon: "/images/logo.png",
  },
};


interface Props {
  searchParams: {
    category?: string;
    tag?: any;
  };
}

const ContactPage = async ({ searchParams }: Props) => {
  const contactData = await client.fetch(query);
  console.log(contactData[0]);

  return (
    <>
      <MainContact />
    </>
  );
};

export default ContactPage;
