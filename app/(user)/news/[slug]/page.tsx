import { groq } from 'next-sanity';
import Image from 'next/image';
import { client } from '../../../../lib/sanity.client';
import MainNews from './mainSingleNews'



export const metadata = {
  title: "Mira Lojistik",
  icons: {
    icon: "/logo-3.jpg",
  },
};




type Props = {
  params: {
    slug: string;
  };
};


  const query = groq`*[_type == "post"][slug.current == $slug][0] {
  
      ...,      
     
  }`;

  const contactquery = groq`
  *[_type=='contact'] {
    ...,
    
    
  } | order(_createdAt desc)
`;


const NewsDetailPage = async ({ params }: { params: { slug: string } }) => {
  const { slug } = params;

  const service = await client.fetch(query, { slug }) || [];
  const contact = await client.fetch(contactquery);
  

  return (
    <div>

<MainNews  data ={service}/>
    </div>
  );
};

export default NewsDetailPage;

