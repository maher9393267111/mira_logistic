import {
    FaTripadvisor,
    FaFacebookF,
    FaWhatsapp,
    FaInstagram,
    FaLinkedinIn,
    FaTiktok
  } from 'react-icons/fa';
  import { MdEmail } from "react-icons/md";
  
  
  import {
  
    FaMobileAlt,
   
    FaFacebook,
    
    FaSnapchat,
    
    FaVoicemail,
  } from "react-icons/fa";
  
  
  
  const SocialButtons = () => {
    const socials = [
  
  
      {
        name: 'Whatsapp',
        icon: <FaWhatsapp className='w-full h-full text-white' />,
        link: 'https://wtspee.com/905344425626',
      },
    //   {
    //   name: 'Whatsapp2',
    //   icon: <FaWhatsapp />,
    //   link: 'https://wtspee.com/905348828077',
    // },
      
      // {
      //   name: 'Facebook',
      //   icon: <FaFacebookF />,
      //   link: 'https://www.facebook.com/profile.php?id=61559966015912&mibextid=LQQJ4d',
      // },
  
      // {
      //   name: 'email',
      //   icon: <MdEmail />,
      //   link: 'mailto:info@elmiralojstik.com',
      // },

      // {
      //   name: 'email2',
      //   icon: <MdEmail />,
      //   link: 'mailto:muhasebe@elmiralojstik.com',
      // },


      // {
      //   name: 'email3',
      //   icon: <MdEmail />,
      //   link: 'mailto:director@elmiralojstik.com',
      // },



  
     
    ];
  
    return (
      <>
       <div dir='ltr' className="fixed py-12 top-[81%]  md:top-[88%] z-10 right-0 translate-y-[-50%] flex flex-col items-end -gap-0.1">
          {socials.map((social, index) => (
            <a
              key={index}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blac text-green-400 w-12 h-12 bg-green-500  rounded-full p-2 flex justify-center items-center text-xl  gap-2 transition-all duration-500 ease-in-out"
              // onMouseEnter={(e) => {
              //   const childNode = e.target.childNodes[1];
              //   childNode && childNode.classList.remove('hidden');
              // }}
              // onMouseLeave={(e) => {
              //   const childNode = e.target.childNodes[1];
              //   childNode && childNode.classList.add('hidden');
              // }}
            >
              { social?.name !== 'yotube' ? social.icon  : <img src="/yotube.svg" alt="" />}
              <span className="text-xs font-poly !text-[#d70006] !font-bold hidden">
                {social.name}
              </span>
            </a>
          ))}
        </div>
  
  
  
  
  
    
      </>
    );
  };
  
  export default SocialButtons;