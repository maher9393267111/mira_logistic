
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










export const metadata = {
  icons: {
    icon: "/logo.png",
  },
};
const HomePage = async () => {
  const services = await client.fetch(servicesquery);
  const faqsData = await client.fetch(query);

  console.log("SERVICES-->" , faqsData)




  return (
    <>
      <div className="arabic">

<Home services={services} faqs={faqsData[0]}/>



      </div>
 
 

     
    </>
  );
};

export default HomePage;
