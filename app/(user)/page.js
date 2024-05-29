
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

const blogsquery = groq`
  *[_type=='post'] {
    ...,
    categories[]-> 
    
  } | order(_createdAt desc)
  [0...3]
`;

const productsquery = groq`
  *[_type=='product'] {
    ...,
    
    
  } | order(_createdAt desc)
  [0...3]
`;

const bannerquery = groq`
  *[_type=='Homebanner'] {
    ...,
    "video": video.asset->url,
   
  } | order(_createdAt desc)
`;

const onequery = groq`
  *[_type=='homeone'] {
    ...
    
   
  } | order(_createdAt desc)
`;

// const servicesquery = groq`
//   *[_type=='service'] {
//     ...

//   } | order(_createdAt desc)
// `;

//workprocess

// const workPorocessquery = groq`
//   *[_type=='workprocess'] {
//     ...

//   } | order(_createdAt desc)
// `;

//homeapproach

// const approachquery = groq`
//   *[_type=='homeapproach'] {
//     ...

//   } | order(_createdAt desc)
// `;

//clientcomments"

// const clientsquery = groq`
//   *[_type=='clientcomments'] {
//     ...

//   } | order(_createdAt desc)
// `;

// const casestudyquery = groq`
//   *[_type=='casestudy'] {
//     ...

//   } | order(_createdAt desc)
// `;

const contactquery = groq`
  *[_type=='contact'] {
    ...,
    
    
  } | order(_createdAt desc)
`;

//homeCauseSlider
// const caseInfoquery = groq`
//   *[_type=='homeCasesSlider'] {
//     ...,

//   } | order(_createdAt desc)
// `;

// const casesquery = groq`
//   *[_type=='casestudy'] {
//     ...,

//   } | order(_createdAt desc)
//   [0...4]
// `;

const aboutOnequery = groq`
  *[_type=='aboutOne']{
    ...,
    
  } | order(_createdAt desc)
`;

// const brandsquery = groq`
//   *[_type=='brands']{
//     ...,

//   } | order(_createdAt desc)
// `;

// const showcasequery = groq`
//   *[_type=='showCase']{
//     ...,

//   } | order(_createdAt desc)
// `;

export const metadata = {
  icons: {
    icon: "/logo.png",
  },
};
const HomePage = async () => {
  // const posts = await client.fetch(query);
  const products = await client.fetch(productsquery);
  const homebannerData = await client.fetch(bannerquery);
  const sectionOneData = await client.fetch(onequery);
  const sectionOneData2 = await client.fetch(aboutOnequery);
  const blogsData = await client.fetch(blogsquery);
  const contact = await client.fetch(contactquery);
  // const servicesData = await client.fetch(servicesquery);
  // const workProcessData = await client.fetch(workPorocessquery);
  // const approachData = await client.fetch(approachquery);
  // const clientsData = await client.fetch(clientsquery);

  // const caseInfo = await client.fetch(caseInfoquery);

  // const casesData = await client.fetch(casesquery);

  // const brandsData = await client.fetch(brandsquery);
  // const showcaseData = await client.fetch(showcasequery);

  // //showcasequery
  // console.log(showcaseData);

  return (
    <>
      <div className="arabic">

<Home/>



      </div>
 
 

     
    </>
  );
};

export default HomePage;
