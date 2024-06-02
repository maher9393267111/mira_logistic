// -----------------
import { groq } from "next-sanity";
import { client } from "../../lib/sanity.client";
import Home from "./mainHome";
export const revalidate = 30;

// const query = groq`
//   *[_type=='post'] {
//     ...,
//     author->,
//     categories[]->
//   } | order(_createdAt desc)  [0...1]
// `;

const servicesquery = groq`
  *[_type=='service'] {
    ...,
    categories[]-> 
    
  } | order(_createdAt desc)
  [0...3]
`;

const query = groq`
  *[_type=='faqs']{
    ...,
    
  } | order(_createdAt desc)
`;

const newsquery = groq`
  *[_type=='post']{
    ...,
    
  } | order(_createdAt desc)  [0...3]
`;

const commentsquery = groq`
  *[_type=='comments']{
    ...,
    
  } | order(_createdAt desc)  
`;


const aboutquery = groq`
  *[_type=='aboutone'] {
    ...,
    
    
  } | order(_createdAt desc)
`;



export const metadata = {
  title: " نموذج شركة شحن",
  icons: {
    icon: "/logo-3.jpg",
  },
};

const HomePage = async () => {
  const services = await client.fetch(servicesquery);
  const faqsData = await client.fetch(query);
  const commentsData = await client.fetch(commentsquery);
  const newsData = await client.fetch(newsquery);
  const aboutData = await client.fetch(aboutquery);
  console.log("SERVICES-->", aboutData[0]);

  return (
    <>
      <div className="arabic">
        <Home
          comments={commentsData}
          newsdata={newsData}
          services={services}
          faqs={faqsData[0]}
          about={aboutData[0]}
        />
      </div>
    </>
  );
};

export default HomePage;
