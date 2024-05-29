
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








export const metadata = {
  icons: {
    icon: "/logo.png",
  },
};
const HomePage = async () => {
  const services = await client.fetch(servicesquery);
  const faqsData = await client.fetch(query);

  const newsData = await client.fetch(newsquery);
  console.log("SERVICES-->" , faqsData)




  return (
    <>
      <div className="arabic">

<Home newsdata={newsData} services={services} faqs={faqsData[0]}/>



      </div>
 
 

     
    </>
  );
};

export default HomePage;
