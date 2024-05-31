import { groq } from "next-sanity";
import { client } from "../../../lib/sanity.client";
import MainAbout from "./mainAbout";

export const revalidate = 30;

const query = groq`
  *[_type=='aboutone'] {
    ...,
    
    
  } | order(_createdAt desc)
`;

export const metadata = {
  icons: {
    icon: "/logo-3.jpg",
  },
};

interface Props {
  searchParams: {
    category?: string;
    tag?: any;
  };
}

const AboutPage = async ({ searchParams }: Props) => {
  const aboutData = await client.fetch(query);
  console.log(aboutData[0]);

  return (
    <>
      <MainAbout data={aboutData[0]} />
    </>
  );
};

export default AboutPage;
